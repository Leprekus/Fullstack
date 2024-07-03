#ifndef SERVER_H
#define SERVER_H

#include <sys/socket.h> //socket, bind, listen, accept 
#include <arpa/inet.h>//htons
#include <unistd.h> //close
#include <string.h> //strlen
#include <stdlib.h>//atexit
void socket_cleanup(int sockfd, const char *message);

ssize_t parse_req(int acceptfd, char* buf, int buf_len, int flags);

void handle_client(int sockfd);

void server_init(); 

#endif
