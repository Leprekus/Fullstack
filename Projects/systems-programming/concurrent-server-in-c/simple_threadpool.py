import os
import queue
import weakref
import threading
import itertools

_threads_queues = weakref.WeakKeyDictionary()
_shutdown = False
# Ensures new workers are not created
# while interpreted is shutting down
_global_shutdown_lock = threading.Lock()

class Future(object):
    pass


class _WorkItem:
    pass
    
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
			w = _WorkItem #TODO: implement workitem

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