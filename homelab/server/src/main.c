#include <sys/socket.h> //socket, bind, listen, accept 
#include <stdlib.h> //exit atexit
#include <stdio.h> //perror
#include <unistd.h> //close
#include <arpa/inet.h>//htons
#include <string.h>//strlen
/*
 * todo:
 * [x] - socket
 * [x] - bind
 * [x] - listen
 * [x] - accept
 * */

#define PORT 3000

void die(const char* message) {
	perror(message);
	exit(EXIT_FAILURE);
}

void socket_cleanup(int sockfd, const char* message) {
	close(sockfd);
	die(message);
}

ssize_t parse_req(int acceptfd, void* buf, int buf_len, int flags){
	ssize_t x = recv(acceptfd, buf, buf_len, flags);
	return x;
}
void handle_client(int sockfd){

	char buf[1024];
	while(1) {
		int acceptfd;
		struct sockaddr_in client_addr;
		socklen_t addrlen = sizeof(client_addr);
		if( (acceptfd = accept(sockfd, (struct sockaddr*)&client_addr, &addrlen ) ) < 0)
			//socket_cleanup(sockfd, "accept failed");
			continue; //accept new connection


		//read request
		int req = parse_req(acceptfd, buf, sizeof(buf) - 1, 0);
		if(req < 0)
			die("req failed");

		//send response
		const char* res = 
			"HTTP/1.1 200 OK\r\n"
			"Content-Type: text/plain\r\n"
			"Content-Length: 13\r\n"
			"\r\n"
			"Hello, World!";
		send(acceptfd, res, strlen(res), 0);

		buf[req] = '\0';
		printf("%s", buf);

		
	}
}

void server_init() {
	int sockfd;
	if( (sockfd = socket( AF_INET, SOCK_STREAM, 0)) < 0)
		die("socket failed");

	struct sockaddr_in server_addr;
	server_addr.sin_family = AF_INET;
	server_addr.sin_addr.s_addr = INADDR_ANY;
	server_addr.sin_port = htons(PORT);	

	//bind maps socket to ip
	if( (bind( sockfd, (struct sockaddr*)&server_addr, sizeof(server_addr) )) < 0)
		socket_cleanup(sockfd, "bind failed");


	//TODO: update backlog int
	if( ( listen(sockfd, 0) ) < 0)
		socket_cleanup(sockfd, "listen failed");

	handle_client(sockfd);	

	close(sockfd);
		
		
}

int main() {
	server_init();	
	return 0;
}
