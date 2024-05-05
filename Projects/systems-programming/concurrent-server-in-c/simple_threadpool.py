import os
import queue
import types
import logging
import weakref
import threading
import itertools

_threads_queues = weakref.WeakKeyDictionary()
_shutdown = False
# Ensures new workers are not created
# while interpreted is shutting down
_global_shutdown_lock = threading.Lock()



PENDING = 'PENDING'
RUNNING = 'RUNNING'
FINISHED = 'FINISHED'
CANCELLED = 'CANCELLED'
CANCELLED_AND_NOTIFIED = 'CANCELLED_AND_NOTIFIED'

LOGGER = logging.getLogger("leprekus.future")

class _Waiter(object):
    #provides wait() and as_completed() events
	def __init__(self):
		self.event = threading.Event()
		self.finished_futures = []

	def add_result(self, future):
		self.finished_futures.append(future)

	def add_cancelled(self, future):
		self.finished_futures.append(future)


#TODO: implement set_exception
class Future(object):
	def __init__(self):
		self._condition = threading.Condition()
		self._state = PENDING
		self._result = None
		self._exception = None
		self._waiters = []
		self._done_callbacks = []

	def _invoke_callbacks(self):
		for callback in self._done_callbacks:
			try:
				callback(self)
			except Exception:
				LOGGER.exception('exception calling callback for %r', self)

	def set_running_or_notify_cancel(self):
		'''
		Marks future as running or process cancel notifications.
		'''
		with self._condition:
			if self._state == CANCELLED:
				self._state = CANCELLED_AND_NOTIFIED
				for waiter in self._waiters:
					waiter.add_cancelled(self)
				#self.cancel() triggers a notification
				return False
			elif self._state == PENDING:
				self._state = RUNNING
				return True
			else:
				LOGGER.critical(
					'Future %s in unexpected state: %s',
						id(self),
						self._state
					)
				raise RuntimeError('Future in unexpected state')

	def set_result(self, result):
		#sets return value of associated work
		with self._condition:
			if self._state in { CANCELLED, CANCELLED_AND_NOTIFIED, FINISHED }:
				raise Exception('{}: {!r}'.format(self._state, self))

			self._result = result
			self._state = FINISHED

			for waiter in self._waiters:
				waiter.add_result(self)
    
			self._condition.notify_all()

		self._invoke_callbacks()
			


class _WorkItem:
	def __init__(self, future, fn, args, kwargs):
		self.future = future
		self.fn = fn
		self.args = args
		self.kwargs = kwargs

	def run(self):
		if not self.future.set_running_or_notify_canel():
			return

		try:
			result = self.fn(*self.args, **self.kwargs)
		except BaseException as exc:
			self.future.set_exception(exc)
			#break reference cycle with exc
			self = None

		else:
			self.future.set_result

	__class_getitem__ = classmethod(types.GenericAlias)
    
def _worker(executor_reference, work_queue, initializer, initargs):
	pass

class SimpleThreadPool:
    
    #defines unique thread names
	_counter = itertools.count().__next__
    
	def __init__(self, max_workers=None):
		if max_workers == None:
			max_workers = min(os.cpu_count() + 4, 32)

		if max_workers <= 0:
			raise ValueError("max_workers must be greater than 0")

		self._max_workers = max_workers
		self._work_queue = queue.SimpleQueue()
		self._idle_semaphore = threading.Semaphore(0) # synchronization primitive for shared resource access
		self._threads = set()
		self._broken = False
		self._shutdown = False
		self._shutdown_lock = threading.Lock()
		self._thread_name_prefix = "SimpleThreadPool-%d" % self._counter()

		self._initializer = None
		self._initargs = ()

		
	def submit(self, fn, /, *args, **kwargs):
		with self._shutdown_lock, _global_shutdown_lock:
			if self._broken:
				raise Exception('Broken thread pool')

			if self._shutdown:
				raise RuntimeError('canot schedule new features after shutdown')

			if _shutdown:
				raise RuntimeError('cannot schedule new features after interpreter shutdown')

			f = Future() #TODO: implement future
			w = _WorkItem(f, fn, args, kwargs)

			self._work_queue.put(w)
			self._adjust_thread_count()

			return f

	def _adjust_thread_count(self):
		#if idle threads are available, don't spin new threads
		if self._idle_semaphore.acquire(timeout=0):
			return

		#executor: carries out concurrent tasks
		#wakes up worker threads when executor is lost to garbage collection
		def weakref_cb(_, q=self._work_queue):
			q.put(None)

		num_threads = len(self._threads)
		if num_threads < self._max_workers:
			thread_name = '%s_d' % self, num_threads

			t = threading.Thread(
				name=thread_name,
				target=_worker,
				args=(
					weakref.ref(self, weakref_cb),
					self._work_queue,
					self._initializer,
					self._initargs
				)
			)

			t.start()
			self._threads.add(t)
			_threads_queues[t] = self._work_queue