#include "control_unit.h"
#include <stdio.h>
#include <assert.h>

byte rotate_left(byte x, byte i) {
	byte y = x >> 7;
	x = (byte)(x << (i % 8)) | y;
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
		byte idx = (byte)(  (h << 4) | (g << 3) | (f << 2) | (e << 1) | d );
		byte expected = rotate_left(1, (byte)i);
		byte actual = buff[idx];
		assert(actual == expected);
		printf("expected: %d, got: %d, position: %d\n", expected, actual, i); 
	}
	
}

int main () {
	

	test_decoder2to4upTo8to256();
	return 0;
}
