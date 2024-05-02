#include <stdint.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

const unsigned int START_ADDRESS = 0X200;
const unsigned int FONTSET_SIZE = 80;
const unsigned int FONTSET_START_ADDRESS = 0x50;

uint8_t fontset[FONTSET_SIZE] =
{
	0xF0, 0x90, 0x90, 0x90, 0xF0, // 0
	0x20, 0x60, 0x20, 0x20, 0x70, // 1
	0xF0, 0x10, 0xF0, 0x80, 0xF0, // 2
	0xF0, 0x10, 0xF0, 0x10, 0xF0, // 3
	0x90, 0x90, 0xF0, 0x10, 0x10, // 4
	0xF0, 0x80, 0xF0, 0x10, 0xF0, // 5
	0xF0, 0x80, 0xF0, 0x90, 0xF0, // 6
	0xF0, 0x10, 0x20, 0x40, 0x40, // 7
	0xF0, 0x90, 0xF0, 0x90, 0xF0, // 8
	0xF0, 0x90, 0xF0, 0x10, 0xF0, // 9
	0xF0, 0x90, 0xF0, 0x90, 0x90, // A
	0xE0, 0x90, 0xE0, 0x90, 0xE0, // B
	0xF0, 0x80, 0x80, 0x80, 0xF0, // C
	0xE0, 0x90, 0x90, 0x90, 0xE0, // D
	0xF0, 0x80, 0xF0, 0x80, 0xF0, // E
	0xF0, 0x80, 0xF0, 0x80, 0x80  // F
};

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

    //Load fonts into memory
    for(int i = 0; i < FONTSET_SIZE; ++i)
        item.memory[ FONTSET_START_ADDRESS + i ] = fontset[i];

    
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
        for(int i = 0; i < length; ++i) {
            //potential bug here
            //if code doesn't work as expected
            //come back here
            Chip8 -> memory[ START_ADDRESS + i ] = buffer[i];
        }

    }
}

//TODO: write tests 
//Clear Display
void Chip8_OP_00E0(Chip8 *Chip8 ) { 
    memset(Chip8 -> video, 0, sizeof(Chip8 -> video));
}

//TODO: write tests
//Return from subroutine
void Chip8_0P00EE(Chip8 *Chip8) {
    uint8_t new_sp = --Chip8 -> sp;
    uint16_t new_stack = Chip8 -> stack[ new_sp ];
    Chip8 -> pc = new_stack;  

}

//TODO: write tests
//Jump to location nnn
//sets program counter to nnn
void Chip8_OP_1nnn(Chip8 *Chip8){
    uint16_t address = Chip8 -> opcode & 0x0FFFu;
    Chip8 -> pc = address;
}



int test_Chip8() {
     Chip8 chip = init();
     int counter = 0; 
     const unsigned int TOTAL_TESTS = 3;

     if(chip.pc == START_ADDRESS) {
        printf("START_ADDRESS set correctly\n");    
        ++counter;
     }

     Chip8_LoadROM(&chip, "test.txt");

     char *expected = "the quick brown fox jumps over the lazy dog.";

     
     int rom_loaded_correctly = 1;
     for(int i = 0; i < strlen(expected); ++i) {
         if(chip.memory[ START_ADDRESS + i] != expected[i]){
             rom_loaded_correctly = 0;
             break;
         }
     }
     if(rom_loaded_correctly == 1) {
         ++counter;
         printf("ROM loaded correctly\n");
     } else {
         printf("failed to load ROM\n");
     }

     
     int fontset_set = 1;
     for(int i = 0; i < FONTSET_SIZE; ++i) {
         if(chip.memory[ FONTSET_START_ADDRESS + i ] != fontset[i]) {
             fontset_set = 0;
             break;
         }
     }
     if(fontset_set == 1) {
         ++counter;
         printf("fontset set correctly\n");
     } else {
         printf("failed to set fontset\n");
     }

     printf("tests passed %d/%d \n", counter, TOTAL_TESTS);
}
int main () {
   
    test_Chip8();
    return 0;
}
