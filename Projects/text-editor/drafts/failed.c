#include <stdint.h>
#include <locale.h>
#include <curses.h>
#include <string.h>
#include <stdlib.h>
/*
 *
 *IDEA
 keep track of text in file via COLS & ROWS
 only allow addch() to be called when the ROWS COLS index is valid
 * */
int *ARRAY;

const uint8_t MODE_NORMAL = 0;
const uint8_t MODE_INSERT = 1;
const uint8_t MODE_VISUAL = 2;

uint8_t current_mode = MODE_NORMAL;
uint8_t last_code = 0;

//TODO: create CMD + C shortcut to change between modes
//TODO: ENTER should insert \n char
//TODO: DEL should delete text in current cursor position
//
//
//
//IMPORTANT
//TODO: create subwindow to indicate current mode
void handle_movement(int code) { //returns 0 for no errors 1 for error
   
}
int get_index(int y, int x) { return x * y + y; }
void mode_normal_action(int code){
    noecho();
    cbreak();

    int y, x;
    getyx(stdscr, y, x);
    /*
       chtype ALLOWED_UP = mvinch(y - 1, x);
       chtype ALLOWED_DOWN = mvinch(y + 1, x);
       chtype ALLOWED_LEFT = mvinch(y, x - 1);
       chtype ALLOWED_RIGHT = mvinch(y, x + 1);
       */
    int ALLOWED_UP = ARRAY[ get_index(y - 1, x) ];
    int ALLOWED_DOWN = ARRAY[ get_index(y + 1, x) ];
    int ALLOWED_LEFT = ARRAY[ get_index(y, x + 1) ];
    int ALLOWED_RIGHT = ARRAY[ get_index(y, x + 1) ];
printf("%d", code);
    switch(code){
        case 119: //w - up
            if(ALLOWED_UP > 0){
                move(y - 1, x);
            } 
            break;
            
        case 97://a - left
            if(ALLOWED_LEFT > 0){
                move(y, x - 1);
            } 
            break;

        case 115: //s - down
            if(ALLOWED_DOWN > 0){
                move(y + 1, x);
            }
            break;

        case 100://d - right
            if(ALLOWED_RIGHT > 0){
    printw("\n\n allowed right: %d index: %d", ALLOWED_RIGHT, get_index(y, x+ 1));
                move(y, x + 1);
            }
            break;

    }
    
}
void mode_insert_action(int code){
    if(code == 127) { //handle delete
        delch();
        return;
    }

    int y, x;
    getyx(stdscr, y, x);
    int i = get_index(y, x);
    
    ARRAY[i] = code;
    addch(code);
}
void mode_visual_action(int code){}

void handle_input(int code) {
    //sets last_code
    //sets current_mode
    if(code == 27) {
        last_code = code;
        noecho();
        cbreak();
        return;
    }

    //handle mode switch 
    if(last_code == 27)
        switch(code) {
            case 110: //n - switch to normal
                current_mode = MODE_NORMAL;
                last_code = 0;
                break;


            case 118: //v - switch to visual
                current_mode = MODE_VISUAL;
                last_code = 0;
                break;
                
            case 105://i - switch to insert
                current_mode = MODE_INSERT;
                last_code = 0;
                break;
        }
    /*
     * current
     * only way to change between
     * modes is by being in normal first
     * */
    switch(current_mode){
        case 0:
        mode_normal_action(code);
        break;

        case 1:
        mode_insert_action(code); 
        break;

        case 2:
        mode_visual_action(code);
        break;
    }
}

void footer() {
    
}
int main() { 

    initscr();
    int x,y;
    getmaxyx(stdscr, y, x);

    //map 2D array to 1D
    ARRAY = (int *) malloc(y * x * sizeof(int));

    //initialize array to 0
    memset(ARRAY, 0, (y * x) * sizeof(int));
    /*
     * w = 119
     * a = 97
     * s = 115
     * d = 100
     */
    int input_code = 0;

//    WINDOW header = subwin(stdscr, 3, 10, 0, 0);

    while(input_code != 113){ //q exits
        
        input_code = getch();
        //printf("key code: %d\n", input_code);

        handle_input(input_code);
        // Refresh the screen
        refresh();

    }    

    // End curses
    endwin();

    return 0;
}
