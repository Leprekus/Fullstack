#include "displayResults.h"

#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>



int main () {
    char test1[] = "The ";
    displayResults(true, "test" , __LINE__);
    return 0;
}

int testCount = 0;
int testPassCount = 0;

void displayResults(bool passed, const char *testName, int line) {
    testCount++;
    if (passed) {
        //System.out.println ("Passed test: " + testName);
        printf("Passed test: %s \n", testName);
        testPassCount++;
    } else {
        //System.out.println ("Failed test: " + testName + " at line "
        printf("Failed test: %s at Line: %d \n", testName, line);
    
    }
    printf("Tests Passed: %d/%d", testCount, testPassCount);
}