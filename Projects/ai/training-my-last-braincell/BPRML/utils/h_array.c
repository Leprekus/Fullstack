#include "h_array.h"

h_array* init_h_array(size_t num_elements){
	h_array* arr = (h_array*)malloc( num_elements * sizeof(h_array) );
	if(arr == NULL){
		perror("[H_ARRAY.C] h_array* init() failed");
		exit( EXIT_FAILURE );
	}
	return arr;

}

	/*sample init*/
	//h_array* malloced_arr = init(4);
	//for(int i = 0 ; i < 4; ++i){
	//	if(i % 2 == 0){
	//		malloced_arr[i].T = STRING;
	//		malloced_arr[i].s = strdup("i am a string");
	//	} else {
	//		malloced_arr[i].T = FLOAT;
	//		malloced_arr[i].f = 0.69;
	//	}
	//}


