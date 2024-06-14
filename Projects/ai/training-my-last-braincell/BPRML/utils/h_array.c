#include <stdio.h> //printf
#include <stdlib.h>//malloc, NULL
#include <string.h>//strdup
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

h_array* init(size_t num_elements){
	h_array* arr = (h_array*)malloc( num_elements * sizeof(h_array) );
	if(arr == NULL){
		perror("[H_ARRAY.C] h_array* init() failed");
		exit( EXIT_FAILURE );
	}
	return arr;

}

int main (){
	h_array array[4] = {
		{ INT, { .n = 20 }},
		{ STRING, { .s = "hello" }},
		{ CHAR, { .c = 'c' }},
		{ FLOAT, { .f = 4.20 }}
	};

	h_array* malloced_arr = init(4);
	for(int i = 0 ; i < 4; ++i){
		if(i % 2 == 0){
			malloced_arr[i].T = STRING;
			malloced_arr[i].s = strdup("i am a string");
		} else {
			malloced_arr[i].T = FLOAT;
			malloced_arr[i].f = 0.69;
		}
	}


	int len = sizeof array / sizeof array[0];

	for(int i = 0; i < len; ++i) 
		switch(malloced_arr[i].T){
			case(INT):
				printf("number is: %d\n", malloced_arr[i].n);
				break;
			case(STRING):
				printf("string is: %s\n", malloced_arr[i].s);
				break;
			case(CHAR):
				printf("char is: %c\n", malloced_arr[i].c);
				break;
			case(FLOAT):
				printf("float is: %f\n", malloced_arr[i].f);
				break;
		}
	
	
	return 0;
}
