import os
import queue
import threading
import itertools

# Ensures new workers are not created
# while interpreted is shutting down
_global_shutdown_lock = threading.Lock()
_shutdown = False

class Future(object):
    pass


class _WorkItem:
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
		self._threads = set()
		self._broken = False
		self._shutdown = False
		self._shutdown_lock = threading.Lock()
		self._thread_name_prefix = "SimpleThreadPool-%d" % self._counter()

		
	def submit(self, fn, /, *args, **kwargs):
		with self._shutdown_lock, _global_shutdown_lock:
			if self._broken:
				raise Exception('Broken thread pool')

			if self._shutdown:
				raise RuntimeError('canot schedule new features after shutdown')

			if _shutdown:
				raise RuntimeError('cannot schedule new features after interpreter shutdown')

			f = Future()
			w = _WorkItem

