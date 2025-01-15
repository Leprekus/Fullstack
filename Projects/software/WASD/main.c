#include <ctype.h>
#include <stdio.h>
#include <termios.h>
#include <unistd.h>

typedef struct {
	struct termios og;
	struct termios raw;
} termios_ctx;


void enable_raw_mode(termios_ctx *term) {
	
	//save original termios settings
	tcgetattr(STDIN_FILENO, &term->og);
	
	//turn off echo
	term->raw = term->og;
	term->raw.c_lflag &= ~(ECHO | ICANON);
	//apply changes
	tcsetattr(STDIN_FILENO, TCSAFLUSH, &term->raw);
}

void disable_raw_mode(termios_ctx *term){
	tcsetattr(STDIN_FILENO, TCSAFLUSH, &term->og);
}

int main () {
	termios_ctx term;
	enable_raw_mode(&term);
	char c;
	while( read(STDIN_FILENO, &c, 1) == 1 && c != 'q'){
		if( iscntrl(c) )
			printf("ctrl: %d\n", c);
		else
			printf("int:%d ch: %c\n", c, c);
	}
	
	disable_raw_mode(&term);
	return 0;
}
