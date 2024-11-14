#include "../../include/types.h"
#include <assert.h>
#include <stdio.h>
#include <stdbool.h>

byte carry = 0;
byte half_adder(byte a, byte b){
	byte sum = a ^ b;
	carry = a & b;
	return sum;
}

byte full_adder(byte a, byte b){
	byte sum = a ^ b;
	byte carry_out = carry ^ sum;
	return carry_out;

}

/*
 * outputs in decoders are ordered by bit position.
 * each output is a power of 2.
 * ex: 1st output = 0001, 4th output = 1000, 8th = 1000 0000*/
byte decoder2to4(byte b, byte a){
	//assert(a == 0x00 || a == 0x01);
	//assert(b == 0x00 || b == 0x01);
	
	//returns bit sequence with correct position
	byte idx = (b << 1) | a;
	byte result = 1 << idx;
	
	return result;
	
}

byte decoder3to8(byte c, byte b, byte a){
	
	byte result = decoder2to4(b, a);
	// Shift result to upper 4 bits if c = 1
	if(c == 1)
		result <<= 4;
	return result;
}


void decoder2to4upTo8to256(byte h, byte g, byte f, byte e, byte d, byte c, byte b, byte a, byte *buff){

	//idx is at most 31, and at least 0
	//it shifts the input up by multiples of 8
	//so the 8th bit position in buff[31] would represent the 256th output
	byte idx = (h << 4) | (g << 3) | (f << 2) | (e << 1) | d;
	buff[idx] = decoder3to8(c, b, a);
}

byte rotate_left(byte x, byte i) {
	byte y = x >> 7;
	x = (x << (i % 8)) | y;
	return x;
}
void test_decoder2to4upTo8to256(){
	
	byte buff[32] = {0};
	for(int i = 0; i < 256; i++){
		

		for(byte j = 0; j < 32; j++)
			buff[j] = 0;
		byte h = (i >> 7) & 1; //k000 0000
		byte g = (i >> 6) & 1; //0k00 0000
		byte f = (i >> 6) & 1; //00k0 0000
		byte e = (i >> 4) & 1; //000k 0000
		byte d = (i >> 3) & 1; //0000 k000
		byte c = (i >> 2) & 1; //0000 0k00
		byte b = (i >> 1) & 1; //0000 00k0
		byte a = i & 1; //0000 000k

		decoder2to4upTo8to256(
			h, 
			g, 
			f, 
			e, 
			d, 
			c, 
			b, 
			a, 
			buff
		);
		byte idx = (h << 4) | (g << 3) | (f << 2) | (e << 1) | d;
		assert(buff[idx] == rotate_left(1, i));
	}
	
}
int main () {
	

	byte buff[32] = {0};
	test_decoder2to4upTo8to256();
	return 0;
}
