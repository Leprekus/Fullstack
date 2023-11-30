#include <stdio.h>
#include <stddef.h>

struct Node {
    int data;
    struct Node* pNext;
    struct Node* pPrev;
};

struct Node nodeInit(int data){
    struct Node n;
    n.data = data;
    n.pNext = NULL;
    n.pPrev = NULL;

    return n;
}

struct LinkedList {
    struct Node* pHead;
    struct Node* pTail;

    void (*addFront)(struct LinkedList *self, struct Node *n);
    void (*addBack)(struct LinkedList *self, struct Node *n);

    struct Node* (*removeFront)(struct LinkedList *self);
    struct Node* (*removeBack)(struct LinkedList *self);

    void (*toString)(struct LinkedList *self);
};

void addFront(struct LinkedList *self, struct Node *n){
    if(self->pHead == NULL) {
        self->pHead = n;
        self->pTail = n;
    } else {
        struct Node *temp = self->pHead;
        n->pNext = temp;
        temp->pPrev = n;

        self->pHead = n;
    }
}
void addBack(struct LinkedList *self, struct Node *n){
    if(self->pHead == NULL) {
        self->pHead = n;
        self->pTail = n;
    } else {
        struct Node *temp = self->pTail;
        temp -> pNext = n;
        n -> pPrev = temp;
        self -> pTail = n;
    }
    
}

struct Node* removeBack(struct LinkedList *self){
    if(self->pTail == NULL) {
        return self->pTail;
    }

    struct Node *popped = self->pTail;
    self -> pTail = (popped->pPrev != NULL) ? popped->pPrev :  NULL; //assign new tail
    //remove references to other nodes
    printf("previous: %d \n", self->pTail->pPrev->data);
    popped -> pNext = NULL;
    popped -> pPrev = NULL;
    return popped;
}

struct Node* removeFront(struct LinkedList *self){
    if(self->pHead == NULL) {
        return self->pHead;
    }

    struct Node *popped = self->pHead;
    self -> pHead = (popped ->pNext != NULL) ? popped -> pNext : NULL;
    
    popped -> pNext = NULL;
    popped -> pPrev = NULL;
    return popped;
}

void toString(struct LinkedList *self) {
    struct Node *current = self->pHead;
    printf("{ ");
    while(current != NULL) {
        printf("%d ", current->data);
        current = current->pNext;
    }
    printf("}\n");
}

struct LinkedList linkedListInit(struct Node *n) {
    struct LinkedList list;
    if(n != NULL) {
        list.pHead = n;
        list.pTail = n;
    } else {
        list.pHead = NULL;
        list.pTail = NULL;
    }
    list.addFront = addFront;
    list.addBack = addBack;

    list.removeFront = removeFront;
    list.removeBack = removeBack;
    list.toString = toString;
    return list;
}



int main() {

    struct Node a = nodeInit(1);
    struct Node b = nodeInit(2);
    struct Node c = nodeInit(3);
    struct Node d = nodeInit(4);

    struct LinkedList list = linkedListInit(&c);
    list.addFront(&list, &b);
    list.addFront(&list, &a);

    list.addBack(&list, &d);

    struct Node* poppedHead = list.removeFront(&list);
    struct Node* poppedTail = list.removeBack(&list);
    printf("popped H: %d\n", poppedHead->data);
    printf("popped T: %d\n", poppedTail->data);
    list.toString(&list);
    list.toString(&list);

    return 0;
}
