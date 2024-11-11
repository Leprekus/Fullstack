#include "../../include/types.h"
#include <stdio.h>

bit carry = 0;
bit half_adder(bit a, bit b){
	bit sum = a ^ b;
	carry = a & b;
	return sum;
}

bit full_adder(bit a, bit b){
	bit sum = a ^ b;
	bit carry_out = carry ^ sum;
	return carry_out;

}


/*
 * For each bit position, extract the bit at the current position by right-shifting
 * the integer to align the bit of interest with the least significant bit (LSB), 
 * then AND it with 1 (0001 in binary) to isolate that bit. */
void fill_num(int num, bit *array, int bit_size){
	for(int i = 0; i < bit_size; i++)
		array[i] = (num >> i) & 1;

}
int main () {
	bit num1[8] = {0};
	bit num2[8] = {0};

	fill_num(15, num1, 8);
	fill_num(2, num2, 8);

	for(int j = 0; j < 8; j++)
		printf(" %d ", num1[j]); 
	printf("\n");

	for(int j = 0; j < 8; j++)
		printf(" %d ", num2[j]); 
	
	return 0;
}
