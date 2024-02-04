#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

const unsigned int START_ADDRESS = 0X200;

typedef struct Chip8 {
    
    uint8_t registers[ 16 ];
    uint8_t memory[ 4096 ];
    uint8_t sp; //stack pointer
    uint8_t delayTimer;
    uint8_t soundTimer;
    uint8_t keypad[ 16 ]; 
    
    uint16_t index;
    uint16_t pc; //program counter
    uint16_t stack[ 16 ];
    uint16_t opcode;

    uint32_t video[ 64 * 32 ];

} Chip8;

Chip8 init() {

    Chip8 item = {
        .registers = { 0 },
        .memory = { 0 },
        .sp = 0 ,
        .delayTimer =  0 ,
        .soundTimer =  0 ,
        .keypad = { 0 }, 
        .index = 0 ,
        .pc =  START_ADDRESS,
        .stack = { 0 },
        .opcode = 0, //uninitialized
        .video = { 0 },

    };
    
    return item;
}

void Chip8_LoadROM(Chip8 *Chip8, char const *filename) {
    

    char *buffer = 0;
    long length;

    //Open file 
    //suffix b indicates binary
    FILE *f = fopen(filename, "rb");

    if(f) {
        //move pointer to the end
        fseek(f, 0L, SEEK_END);

        //get filze size
        length = ftell(f);
        
        fseek(f, 0L, SEEK_SET);
        buffer = malloc(length);

        if(buffer) { fread(buffer, 1, length, f); }
        fclose(f);    
    }

    if(buffer){
        printf("buffer created");
        for(int i = 0; i < length; ++i) {
            //potential bug here
            //if code doesn't work as expected
            //come back here
            Chip8 -> memory[ START_ADDRESS + i ] = buffer[i];
        }

    }
}

int test_Chip8() {
     Chip8 chip = init();
     int counter = 0; 

     if(chip.pc == START_ADDRESS) {
        printf("pc should equal START_ADDRESS\n");    
        ++counter;
     }

     Chip8_LoadROM(&chip, "test.txt");

     char *expected = "the quick brown fox jumps over the lazy dog.";
     if(chip.memory == expected) {
         printf("memory should equal %c\n", expected);
         ++counter;
     } else {
         printf("actual %c", chip.memory);
     }

     printf("tests passed %d/2\n", counter);
}
int main () {
   
    test_Chip8();
    return 0;
}
