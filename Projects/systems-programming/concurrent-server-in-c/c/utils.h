// Utility functions for socket servers in C.
//
// Eli Bendersky [http://eli.thegreenplace.net]
// This code is in the public domain.
// Adapted by Raul Rodriguez to Follow along [https://eli.thegreenplace.net/2017/concurrent-servers-part-1-introduction/]

#ifndef UTILS_H
#define UTILS_H

#include <netinet/in.h>
#include <sys/socket.h>
#include <sys/types.h>

void die(char* fmt, ...);

void* xmalloc(size_t size);

void perror_die(char* msg);

void report_peer_connected(const struct sockaddr_in* sa, socklen_t salen);

int listen_inet_socket(int portnum);

void make_socket_non_blocking(int sockfd);

#endif
