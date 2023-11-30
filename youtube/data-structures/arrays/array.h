#include <stdbool.h>
#ifndef ARRAY_H
#define ARRAY_H

struct Array {
    int* data;
    int size;
  //fn return type | ptr to fn | fn args
    int (*push)(struct Array *self, int element);
    int (*pop)(struct Array *self);
    void (*toString)(struct Array *self);
};

struct Array createArray(int data[], int size);

int push (struct Array *self, int element);
int pop (struct Array *self);

int addFront (struct Array *self, int element);
int removeFront(struct Array *self);

void toString(struct Array *self);


#endif
