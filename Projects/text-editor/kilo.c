#include <ctype.h>
#include<stdio.h>
#include <stdlib.h>
#include <termios.h>
#include <unistd.h>

//save OG term atts
struct termios og_termios;

void disable_rawmode() {
    tcsetattr(STDIN_FILENO, TCSAFLUSH, &og_termios);
}
//yeeeh let's raw dog this terminal
void enable_rawmode(){
    //read term atts
    tcgetattr(STDIN_FILENO, &og_termios);
    atexit(disable_rawmode);

    struct termios raw = og_termios;
    //ICANON turns off cooked mode
        //not input flag (I), but local
    raw.c_lflag &= ~(ECHO | ICANON);
    //set atts
    tcsetattr(STDIN_FILENO, TCSAFLUSH, &raw);
}
int main() {
    char c;

    enable_rawmode();
    //reading 1 byte from std input into c
    //until no bytes left
    while(read(STDIN_FILENO, &c, 1) == 1 && c != 'q'){
        if(iscntrl(c))
            printf("%d\n", c);
        else printf("%d '%c'", c,c);
    }

    return 0;
}
