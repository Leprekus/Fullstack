#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

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
        .sp = { 0 },
        .delayTimer = { 0 },
        .soundTimer = { 0 },
        .keypad = { 0 }, 
        .index = { 0 },
        .pc = { 0 },
        .stack = { 0 },
        .opcode = 0, //uninitialized
        .video = { 0 },

    };
    
    return item;
}

void Chip8_LoadROM() {
    
    const unsigned int START_ADDRESS = 0X200;

    char *buffer = 0;
    long length;

    //Open file 
    FILE *f = fopen("test.txt", "r");

    if(f) {
        //move pointer to the end
        fseek(f, 0, SEEK_END);
        length = ftell(f);
        fseek(f, 0, SEEK_SET);
        buffer = malloc(length);

        if(buffer) { fread(buffer, 1, length, f); }
        fclose(f);    
    }

    if(buffer){

        for(long i = 0; i < length; ++i) {
            printf("%s", buffer[i]);
        }

    }
}

int main () {
    
    Chip8_LoadROM();
    return 0;
}
