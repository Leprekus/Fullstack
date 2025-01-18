#include <stdio.h>
#include <errno.h>
#include <stdlib.h>
#include <string.h>
#include <sys/ioctl.h>
#include <sys/ttycom.h>
#include <termios.h>
#include <unistd.h>

/* macros */
#define CTRL_KEY(k) ((k) & 0x1F)
# define CLEAR_SCREEN_UP_TO_CURSOR write(STDOUT_FILENO, "\x1b[2J", 4);
//H takes in row, col as args ex: [row;colH
# define CURSOR_REPOSITION_TOP_LEFT write(STDOUT_FILENO, "\x1b[H", 3);
typedef struct {
	struct termios og;
	struct termios raw;
	struct winsize ws;
} termios_ctx;

/* terminal */
void die(const char *s){
	write(STDOUT_FILENO, "\x1b[2J", 4);
	write(STDOUT_FILENO, "\x1b[H", 3);

	perror(s);
	exit(1);
}

void enable_raw_mode(termios_ctx *term) {
	
	//save original termios settings
	if( tcgetattr(STDIN_FILENO, &term->og) < 0 )
		die("tcgetattr");
	
	//turn off echo
	term->raw = term->og;
	term->raw.c_cflag &= ~(CS8);
	term->raw.c_iflag &= ~(BRKINT | ICRNL | INPCK | ISTRIP | IXON);
	term->raw.c_lflag &= ~(ECHO | ICANON | IEXTEN | ISIG);
	term->raw.c_oflag &= ~(OPOST);

	term->raw.c_cc[VMIN] = 0; //min num of bytes before read can return
	term->raw.c_cc[VTIME] = 1 ; //100 ms must wait before returning

	//apply changes
	if( tcsetattr(STDIN_FILENO, TCSAFLUSH, &term->raw) < 0 )
		die("tcsetattr");
}

void disable_raw_mode(termios_ctx *term){
	tcsetattr(STDIN_FILENO, TCSAFLUSH, &term->og);
}

char editor_read_key() {
	char c;
	int chars_read;
	while( (chars_read = read(STDIN_FILENO, &c, 1)) != 1 )
       		if(chars_read < 0 && errno != EAGAIN) die("read");
	return c;
}

int get_window_size(termios_ctx *term){
	struct winsize ws;
	if( ioctl(STDOUT_FILENO, TIOCGWINSZ, &ws) == -1 || ws.ws_col == 0 )
		return -1;
	term->ws = ws;
	return 0;
}

/* input */
void editor_process_key_press() {
	char c = editor_read_key();
	switch( c ){
		case CTRL_KEY('q'):
			CLEAR_SCREEN_UP_TO_CURSOR
			CURSOR_REPOSITION_TOP_LEFT
			exit(1);
			break;

		case CTRL_KEY('c'):
			printf("\x1B[2J");
			break;
		default:
			putchar(c);
			break;
	};

}

/* output */

void editor_draw_rows( termios_ctx *term ) {
	for(int y = 0; y < term->ws.ws_row; y++)
		write(STDOUT_FILENO, "~\r\n", 3);
	
}

void editor_refresh_screen( termios_ctx *term ){
	CLEAR_SCREEN_UP_TO_CURSOR
	CURSOR_REPOSITION_TOP_LEFT
	editor_draw_rows( term );
	CURSOR_REPOSITION_TOP_LEFT
}

/* init */
termios_ctx editor_init(){
	termios_ctx term;
	if( get_window_size(&term) == -1 )
		die("get_window_size");
	editor_draw_rows( &term );
	return term;
}


int main () {

	termios_ctx term = editor_init();
	enable_raw_mode( &term );
	while( 1 ){
		editor_refresh_screen( &term );
		editor_process_key_press();
	}
	
	
	disable_raw_mode(&term);
	return 0;
}
