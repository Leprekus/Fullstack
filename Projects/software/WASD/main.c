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
	term->raw.c_cflag &= ~(CS8);
	term->raw.c_iflag &= ~(BRKINT | ICRNL | INPCK | ISTRIP | IXON);
	term->raw.c_lflag &= ~(ECHO | ICANON | IEXTEN | ISIG);
	term->raw.c_oflag &= ~(OPOST);

	term->raw.c_cc[VMIN] = 0; //min num of bytes before read can return
	term->raw.c_cc[VTIME] = 1 * 5; //100 * 5 ms must wait before returning

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
			printf("ctrl: %d\r\n", c);
		else
			printf("int:%d ch: %c\r\n", c, c);
	}
	
	disable_raw_mode(&term);
	return 0;
}
