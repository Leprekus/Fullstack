# Variables
CC = gcc
CFLAGS = -Wall -Wextra -std=c99 -I../utils

# Targets
all: error_functions

error_functions: error_functions.o ../utils/h_array.o
	$(CC) $(CFLAGS) -o error_functions error_functions.o ../utils/h_array.o

error_functions.o: error_functions.c ../utils/h_array.h
	$(CC) $(CFLAGS) -c error_functions.c

../utils/h_array.o: ../utils/h_array.c ../utils/h_array.h
	$(CC) $(CFLAGS) -c ../utils/h_array.c -o ../utils/h_array.o

clean:
	rm -f error_functions error_functions.o ../utils/h_array.o

.PHONY: all clean

