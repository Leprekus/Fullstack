# Simple client used to interact with concurrent servers.
#
# Launches N concurrent client connections, each executing a pre-set sequence of
# sends to the server, and logs what was received back.
#
# Tested with Python 3.6
#
# Eli Bendersky [http://eli.thegreenplace.net]
# This code is in the public domain.



import argparse
import logging
import socket
import sys
import threading
import time

class ReadThread(threading.Thread):
	def __init__(self, name, sockobj):
		super().__init__() #calls the constructor of the (parent class) of the current class
		self.sockobj = sockobj
		self.name = name
		self.bufsize = 8 * 1024


	def run(self):
		fullbuf = b''
		while True:
			buf = self.sockobj.recv(self.bufsize)
			logging.info('{0} received {1}'.format(self.name, buf))
			fullbuf += buf
			if b'1111' in fullbuf:
				break

def make_new_connection(name, host, port):
	"""Creates single socket connection to host:port
	sets a sequence of messages with delays to the server in parallel
	reads from sockket in separate thread """
	
	sockobj = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	sockobj.connect((host,port))
	if sockobj.recv(1) != b'*':
		logging.error('Something went wrong. Did not receive *')
	logging.info('{0} connected...'.format(name))

	rthread = ReadThread(name, sockobj)
	rthread.start()

	s = b'^abc$de^abte$f'
	logging.info('{0} sending {1}'.formate(name, s))
	sockobj.send(s)
	time.sleep(1.0)

	s = b'25$ab0000$abab'
	logging.info('{0} sending {1}'.format(name, s))
	sockobj.send(s)
	time.sleep(0.2)

	rthread.join()
	sockobj.close()
	logging.info('{0} disconnecting'.format(name))

def main():
	argparser = argparse.ArgumentParser('Simple TCP client')
	argparser.add_argument('host', help='Server host name')
	argparser.add_argument('port', type=int, help='Server port')
	argparser.add_argument(
	'-n', 
	'--num_concurrent', 
	type=int, 
	default=1, 
	help='Number of concurrent connections'
	)
	args = argparser.parse_args()

	logging.basicConfig(
	level=logging.DEBUG,
	format='%(levelname)s:%(asctime)s:%(message)s'
	)
	
	t1 = time.time()
	connections = []
	
	for i in range(args.num_concurrent):
		name = 'conn{0}'.format(i)
		tconn = threading.Thread(
			target=make_new_connection,
			args=(name, args.host, args.port)
			)
		tconn.start()
		connections.append(tconn)
	
	for conn in connections:
		conn.join()

	print('Elapsed: ', time.time() - t1)

		
if __name__ == '__main__':
	main()





