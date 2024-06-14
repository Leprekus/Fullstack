#include <stddef.h> // size_t
#include <stddef.h> // NULL def
#include <stdio.h> // fprintf 
#include <stdlib.h> //malloc
#include <string.h> //memcpy
typedef struct {
	void* array;
	size_t element_size;
	size_t length;
	size_t capacity;
	
} h_array;

h_array* init_array(size_t element_size, size_t capacity);
void resize(h_array* arr);
void push(h_array* arr, void* element);
void* get(h_array* arr, size_t index);

h_array* init_array(size_t element_size, size_t capacity){
	h_array* arr = (d_array*)malloc( sizeof(d_array) );
	if(arr == NULL){
		fprintf(stderr, "[ARRAY.C] memory allocation for h_array failed");
		exit( EXIT_FAILURE );
	}

	arr -> array = malloc( capacity * sizeof(element_size) );
	if(arr -> array == NULL) {
		fprintf(stderr, "[ARRAY.C] memory allocation for h_array* init_array()");
		exit( EXIT_FAILURE );
	}
	arr -> element_size = element_size;
	arr -> capacity = capacity;
	arr -> length = 0;

	return arr;
}

void resize(h_array* arr){
	const size_t new_capacity = arr -> capacity * 2;
	void* new_arr = realloc(arr -> array, new_capacity);
	if(new_arr == NULL) {
		fprintf(stderr, "[ARRAY.C] memory allocation failed for void* resize()" );
		exit( EXIT_FAILURE );
	}
	arr -> array = new_arr;
	arr -> capacity = new_capacity;
}
void push(h_array* arr, void* element){
	if(arr -> length == arr -> capacity)
		resize(arr);
	void* index = (char *)arr->array + (arr->length * arr->element_size);
	memcpy(index, element, arr -> element_size);
	arr -> length++;
};

void* get(h_array* arr, size_t index) {
	if(index >= arr -> length) {
		fprintf(stderr, "[ARRAY.C] index out of bounds for void* get()");
		exit( EXIT_FAILURE );
	}
	return (char *)arr -> array + (index * arr -> element_size);
}	

int main() {
	h_array* arr = init_array(sizeof(int), 2);
	printf("running");
	for(int i = 0; i < arr -> length; i++) 
		push(arr, &i);

	for(int i = 0; i < arr -> length; i++)
		printf("%d", get(arr, i));
	return 0;
}
