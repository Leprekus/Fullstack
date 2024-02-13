#include <sys/ioctl.h>
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

struct winsize w;
long long **screen;

#define clear() printf("\033[H\033[J")
#define gotoxy(x,y) printf("\033[%d;%dH", (y), (x))

void init_screen(){
    ioctl(STDOUT_FILENO, TIOCGWINSZ, &w);
    screen = malloc(w.ws_row * sizeof(*screen));
    
    for(int i = 0; i <  w.ws_row; ++i)
        screen[i] = malloc(w.ws_col * sizeof(*screen[i]));
    
    for(int i = 0; i < w.ws_row; ++i)
        for(int j = 0; j < w.ws_row; ++j)
            screen[i][j] = 0;
}
int main() {
    
    init_screen();
    int c = 0;
    printf("\033[%d;%dH", 0, 0);
    free(screen);
    return 0;
}
