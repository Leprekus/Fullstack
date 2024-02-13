#include <stdint.h>
#include <curses.h>
#include <locale.h>

const uint8_t MODE_NORMAL = 0;
const uint8_t MODE_INSERT = 1;
const uint8_t MODE_VISUAL = 2;

uint8_t current_mode = MODE_NORMAL;
uint8_t last_input = 0;
int input = 0;
int y = 0;
int x = 0;

const uint8_t UP = 119;
const uint8_t LEFT = 97;
const uint8_t DOWN = 115;
const uint8_t RIGHT = 100;

const uint8_t ESC_KEY = 27;

const uint8_t CTRL_N = 14; 
const uint8_t CTRL_I = 9;
const uint8_t CTRL_V = 22;
const uint8_t GREATER_THAN_KEY = 62;
#define CTRL_KEY(k) ((k)  & 0x1f) 


const uint8_t N_KEY = 110;
const uint8_t V_KEY = 118;
const uint8_t I_KEY = 115;
const uint8_t SPACE_CHAR = 32;
void action_insert(){
    
    if(input == ESC_KEY) {
        noecho();
        cbreak();
        return;
    }
    addch(input);
};

void action_normal(){

    if(input == GREATER_THAN_KEY) scr_dump("test.txt");
    getyx(stdscr, y, x);
    switch(input) {
        case UP:
            move(y - 1, x);
            break;

        case DOWN:
            move(y + 1, x);
            break;
            
        case LEFT:
            move(y, x - 1);
            break;

        case RIGHT:
             move(y, x + 1);
            break;
    }

    
};
void action_visual(){
};
void handle_input() {

    if(current_mode == MODE_NORMAL || current_mode == MODE_VISUAL){
        noecho();
        cbreak();
    }

    input = getch();

    if(input == ESC_KEY) 
        last_input = ESC_KEY;

    switch(input) {
        case CTRL_N:
            last_input = 0;
            current_mode = MODE_NORMAL;
            break;

        case CTRL_I:
            last_input = 0;
            current_mode = MODE_INSERT;
            break;

        case CTRL_V:
            last_input = 0;
            current_mode = MODE_VISUAL;
            break;
    }

    switch(current_mode) {
        case MODE_NORMAL:
            action_normal();
            break;

        case MODE_INSERT:
            action_insert();
            break;
        case V_KEY:
            action_visual();
            break;
    }


    refresh();

}

int main() {

    setlocale(LC_ALL, "");

    initscr();
    while(input != 113) {
        handle_input();

    }
    endwin();
    return 0;
}
