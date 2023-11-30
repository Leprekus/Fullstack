#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

struct Array {
    int* data;
    int size;
  //fn return type | ptr to fn | fn args
    int (*push)(struct Array *self, int element);
    int (*pop)(struct Array *self);
    void (*toString)(struct Array *self);
};

int push (struct Array *self, int element) {
    self -> size++;

    int *newArray = (int*) malloc(self -> size * sizeof(int));
    
    if(newArray == NULL) return -1;


    for(int i = 0; i < self -> size; ++i) {
        newArray[i] = self -> data[i];
    }

    newArray[ self -> size - 1 ] = element;
    printf("size: %d new size: %d \n", self -> size);

    free(self -> data);

    self -> data = newArray;
    return self -> size;
}

int pop (struct Array *self) {
    if(self->size == 0) return -1;
    int popped = self->data[self -> size - 1];
    self->data[self -> size - 1] = NULL;
    self -> size--;
    return popped;
    
}

int addFront (struct Array *self, int element){ return 0; };
int removeFront(struct Array *self){ return 0;};

void toString(struct Array *self){
    int len = self->size;
    
    printf("{ ");
    for(int i = 0; i < len; ++i) {

        int item = self -> data[i];
        if(i == len - 1) printf("%d ", item);
        else printf("%d, ", item);

    }
    printf("} \n");
    

}


//returns pointer to type struct Array
struct Array createArray(int data[], int size) {

    struct Array array;
    int *newArray = (int*) malloc(size * sizeof(int));
    if(newArray == NULL) return array;
    for(int i = 0; i < size; ++i) {
        newArray[i] = data[i];
    }

    array.data = newArray;
    array.size = size;

    array.push = push;
    array.pop = pop;
    array.toString = toString;
    
    return array;
}

int main() {
    
    int data[] = {1,2,3,4,5};
    int size = sizeof(data) / sizeof(data[0]);
    printf("initial size %d ", size);
    struct Array nums = createArray(data, size);
    
    nums.push(&nums, 2);
    nums.push(&nums, 3);
    int popped = nums.pop(&nums);
    printf("popped: %d\n", popped);

    popped = nums.pop(&nums);
    printf("popped: %d\n", popped);
    popped = nums.pop(&nums);
    printf("popped: %d\n", popped);

    nums.toString(&nums);

    return 0;
}