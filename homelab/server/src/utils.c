#include "utils.h"

void die(const char* message) {
	perror(message);
	exit(EXIT_FAILURE);
}

/*
 * returns a stubstring bounded by: start <= substring < end
 */
char* slice(const char* string, char* buf, int start, int end) {

	int str_len = strlen(string);
	if(start < 0 || end > (str_len - 1) || start > end)
		die("slice index out of bounds");
	
	for(int i = start; i < end; i++)
		buf[ i - start ] = string[i];

	buf[ end - start ] = '\0';
	
	return buf;
}
