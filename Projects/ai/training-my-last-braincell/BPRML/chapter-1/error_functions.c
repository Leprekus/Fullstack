#include "../utils/h_array.h"
#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define IRIS_DATASET "../datasets/iris/iris.data" //expected output
#define IRIS_DATASET_TRAINING "../datasets/iris/iris.training" //training set
#define IRIS_DATASET_TESTING "../datasets/iris/iris.testing"//post training
#define IRIS_DATASET_SHORT "../datasets/iris/iris.short"//regularization set
#define MAX_LINE_LENGTH 100
#define NUM_COLS 5
#define DF_INDEX(x, y) (x + (( NUM_COLS ) * (y)))
int get_line_count(const char *file_path){
	FILE *file = fopen(file_path, "r");
	if(file == NULL)
		perror("failed to open file");

	char line[ MAX_LINE_LENGTH ];
	int counter = 0;
	while( fgets(line, sizeof(line), file) )
		counter++;

	fclose(file);
	return counter;
}

h_array* read_file(const char *file_path, int num_lines){
	FILE *file = fopen(file_path, "r");
	if(file == NULL)
		perror("failed to open file");

	char line[ MAX_LINE_LENGTH ];
	char class_label[ 20 ];
	float sepal_length, sepal_width, petal_length, petal_width;

	h_array* df = init_h_array( num_lines * NUM_COLS);	
	int y = 0;
	while( fgets(line, sizeof(line), file) ) {
		if( sscanf(line, "%f, %f, %f, %f, %s", &sepal_length, &sepal_width, &petal_length, &petal_width, class_label) == 5){


			df[ DF_INDEX(0,y) ].T = FLOAT;
			df[ DF_INDEX(0,y) ].f = sepal_length;
				
			df[ DF_INDEX(1,y) ].T = FLOAT;
			df[ DF_INDEX(1,y) ].f = sepal_width;

			df[ DF_INDEX(2,y) ].T = FLOAT;
			df[ DF_INDEX(2,y) ].f = petal_length;

			df[ DF_INDEX(3,y) ].T = FLOAT;
			df[ DF_INDEX(3,y) ].f = petal_width;

			df[ DF_INDEX(4,y) ].T = STRING;
			df[ DF_INDEX(4,y) ].s = strdup(class_label);

			y++;
		}
	}

	fclose(file);
	return df;
}

void print_df (h_array* df, size_t rows) {
	const size_t length = rows * NUM_COLS;

	printf("sepal_length, sepal_width, petal_length, petal_width, class_label\n");
	for(size_t i = 0; i < length; ++i){
		switch(df[i].T) {
			case(FLOAT):
				if((i + 1)% 5 == 0)
					printf("%f\n", df[i].f);
				else printf("%f ", df[i].f);
				break;
			case(STRING):
				if((i + 1) % 5 == 0)
					printf("%s\n", df[i].s);
				else printf("%s ", df[i].s);
				break;
			default:
				break;
		}
	}
	
		
}

void get_feature(const char* feature, h_array* df,  size_t rows){
	for(size_t i = 0; i < rows; i++){
		if(df[ DF_INDEX(4, i) ].s == feature)
			printf("found");
	}
}
int main() {
	const char* file_path = IRIS_DATASET_TRAINING;

	size_t num_lines = get_line_count(file_path);
	h_array* df = read_file(file_path, num_lines);

	get_feature("Iris-setosa", df, num_lines);
	print_df(df, num_lines); 
	return 0;
		

}
