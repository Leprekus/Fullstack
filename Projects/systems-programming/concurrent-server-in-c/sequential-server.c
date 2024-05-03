/// Sequential socket server - accepting one client at a time
// Eli Bendersky [http://eli.thegreenplace.net]
// This code is in the public domain.
// Adapted by Raul Rodriguez to Follow along [https://eli.thegreenplace.net/2017/concurrent-servers-part-1-introduction/]

#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <unistd.h>

#include "utils.h"
// *: sets server in mode wait for message (server -> client) 
// ^: sets server in mode receive message (client -> server) 
// $: sets server in mode wait for message (client -> server) 

typedef enum { WAIT_FOR_MSG, IN_MSG } ProcessingState;

void serve_connection(int sockfd) {
	// used to send data over connected socket
	if(send(sockfd, "*", 1, 0) < 1) //(* mode) and terminates if there's an error
		perror_die("send");

	ProcessingState state = WAIT_FOR_MSG;

	while(1) {
		uint8_t buf [ 1024 ];

		//receives data from connected socket (client)
		int len = recv(sockfd, buf, sizeof buf, 0);
		if(len < 0) //terminate if error
			perror_die("recv");
		else if(len == 0) //stop if buffer's empty
			break;

		for(int i = 0; i < len; ++i)
			switch(state) {  //ignore everything, handle state change
				case WAIT_FOR_MSG:
					if(buf[i] == '^') 
						state = IN_MSG;
					break;
				case IN_MSG:
					if(buf[i] == '$')
						state = WAIT_FOR_MSG;

					else buf[i] += 1; //echo everything back + 1 byte

					if(send(sockfd, &buf[i], 1, 0) < 1){
						perror("send error");
						close(sockfd);
						return;
					}
					break;
			}

	}
	close(sockfd);
}
	

int main(int argc, char** argv) {

	printf("running");	
	//set buffer mode
	setvbuf(stdout, NULL, _IONBF, 0);
	
	int portnum = 9090;
	if(argc >= 2) //converts the second value to integer and uses it as portnumber
		portnum = atoi(argv[1]);

	printf("Serving on port %d\n", portnum);

	int sockfd = listen_inet_socket(portnum);

	while(1) {
		struct sockaddr_in peer_addr;
		
		socklen_t peer_addr_len = sizeof(peer_addr);

		int newsockfd = 
			accept(sockfd, (struct sockaddr*)&peer_addr, &peer_addr_len);

		if(newsockfd < 0) 
			perror_die("ERROR on accept");

		report_peer_connected(&peer_addr, peer_addr_len);
		serve_connection(newsockfd); //blocking call until client is done
		printf("peer done\n");
	}
	return 0;

}
