#include "server.h"
#include "utils.h"

#define PORT 3000

void socket_cleanup(int sockfd, const char* message) {
	close(sockfd);
	die(message);
}
//GET / HTTP/1.1
//Host: localhost:3000
//Connection: keep-alive
//sec-ch-ua: "Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"
//sec-ch-ua-mobile: ?0
//sec-ch-ua-platform: "Windows"
//DNT: 1
//Upgrade-Insecure-Requests: 1
//User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36
//Sec-Purpose: prefetch;prerender
//Purpose: prefetch
//Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
//Sec-Fetch-Site: none
//Sec-Fetch-Mode: navigate
//Sec-Fetch-User: ?1
//Sec-Fetch-Dest: document
//Accept-Encoding: gzip, deflate, br, zstd
//Accept-Language: en-US,en;q=0.9,es;q=0.8

ssize_t parse_req(int acceptfd, char* buf, int buf_len, int flags){

	ssize_t req_len = recv(acceptfd, buf, buf_len - 1, flags);
	return req_len;
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
		int req = parse_req(acceptfd, buf, sizeof(buf), 0);
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
		printf("%s\n", buf);
		for(int i = 0; i < req; i++){
			if(i % 10 == 0) printf("\n");
			printf("%d ", buf[i]);
		}
		
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
