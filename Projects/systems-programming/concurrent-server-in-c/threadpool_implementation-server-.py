# Threaded socket server - accepting multiple clients concurrently, by
# dispatching them into a thread pool.
#
# Eli Bendersky [http://eli.thegreenplace.net]
# This code is in the public domain.
#Adapted by Raul Rodriguez to Follow along [https://eli.thegreenplace.net/2    017/concurrent-servers-part-1-introduction/]
#I replace the ThreadPool executor with my own ThreadPool implementation

import argparse
from enum import Enum
import socket
import sys
from simple_threadpool import SimpleThreadPool
ProcessingState = Enum('ProcessingState', 'WAIT_FOR_MSG IN_MSG')

def serve_connection(sockobj, client_address):
	print('{0} connected'.format(client_address))
	sockobj.sendall(b'*')
	state = ProcessingState.WAIT_FOR_MSG

	while True:
		try:
			buf = sockobj.recv( 1024 )
			if not buf:
				break
		except IOError as e:
			break
		for b in buf:
			if state == ProcessingState.WAIT_FOR_MSG:
				if b == ord(b'^'):
					state = ProcessingState.IN_MSG
			elif state == ProcessingState.IN_MSG:
				if b == ord(b'$'):
					state = ProcessingState.WAIT_FOR_MSG
				else:
					sockobj.send(bytes([b + 1]))
			else:
				assert False

	print('{0} done'.format(client_address))
	sys.stdout.flush()
	sockobj.close()


if __name__ == '__main__':
	argparser = argparse.ArgumentParser('Threadpool server')
	argparser.add_argument('--port', type=int, default=9090, help='Server port')
	argparser.add_argument(
		'-n', type=int, default=64, help='Number of threads in pool'
	)
	args = argparser.parse_args()

	pool = SimpleThreadPool(args.n) #pool-size
	sockobj = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	sockobj.bind(('localhost', args.port))
	sockobj.listen(15) #max queued connections before refusing
	
	try:
		while True:
			client_socket, client_address = sockobj.accept()
			pool.submit(serve_connection, client_socket, client_address)
	except KeyboardInterrupt as e:
		print(e)
		sockobj.close()

