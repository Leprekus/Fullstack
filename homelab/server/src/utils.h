#ifndef UTILS_H
#define UTILS_H

#include <stdio.h> //perror
#include <stdlib.h> //exit atexit
#include <string.h> //strlen
void die(const char* message);

char* slice(const char* string, char* buf, int start, int end);

#endif
