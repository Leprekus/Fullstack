#ifndef H_ARRAY_H
#define H_ARRAY_H

#include <stdio.h>   // printf
#include <stdlib.h>  // malloc, NULL, exit, perror
#include <string.h>  // strdup

typedef enum {
    INT,
    STRING,
    CHAR,
    FLOAT
} DataType;

typedef struct {
    DataType T;
    union {
        int n;
        char *s;
        char c;
        float f;
    };
} h_array;

h_array* init_h_array(size_t num_elements);

#endif // H_ARRAY_H

