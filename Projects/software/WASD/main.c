#include <stdatomic.h>
#include <stdio.h>
#include <errno.h>
#include <stdlib.h>
#include <string.h>
#include <sys/ioctl.h>
#include <sys/ttycom.h>
#include <sys/wait.h>
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

typedef struct {
	int screenrows; //Num of rows that we can show
	int screencols; //Num of cols that we can show
} EditorConfig;

/* terminal */
void die(const char *s){
	write(STDOUT_FILENO, "\x1b[2J", 4);
	write(STDOUT_FILENO, "\x1b[H", 3);

	write(STDERR_FILENO, s, strlen(s));
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

int get_cursor_position(int input_fd, int output_fd, int *rows, int *cols){
	char buf[32];
	unsigned int i = 0;

	if( write(output_fd, "\x1b[6n", 4) != 4 ) return -1;
	while( i < sizeof(buf) - 1 ){
		if( read(input_fd, buf + i, 1)  != 1 ) break;
		if( buf[i] == 'R' ) break;
		i++;
	}
	buf[i] = '\0';
	sscanf(buf, "%d;%d", rows, cols);
	return 0;
}

/*
 * If ioctl() fails query the terminal itself
 * returns 0 for success, -1 on error
 */
int get_window_size(int input_fd, int output_fd, int *rows, int *cols){
	struct winsize ws;
	if(ioctl(STDOUT_FILENO, TIOCGWINSZ, &ws) == -1 || ws.ws_col == 0 ){

		//TODO: fix fallback row col querying 
		int og_rows, og_cols, return_value;
		return_value = get_cursor_position(input_fd, output_fd, &og_rows, &og_cols);
		if(return_value == -1) return return_value;
		/*
		 * Both are documented to stop from going past the screen's edge
		 * C: cursor forward
		 * B: Cursor down
		 *  we verify that the 12 bytes specified in our string have been
		 *  written, otherwise something went wrong.
		 * */

		//go to bottom right margin and get pos Cursor 
		//Position Report: ESC [ 6 n
		//Response: ESC [ Pl ; Pc R 
		//Pl = line number; Pc = column number
		if(write(output_fd, "\x1b[999C\1xb[999B", 12) != 12) return -1;
		return_value = get_cursor_position(input_fd, output_fd, rows, cols);
		if(return_value == -1) return return_value;
		//restore pos
		char seq[32];
		snprintf(seq, 32, "\x1b[%dl;%dH", og_rows, og_cols);
		if(write(output_fd, seq, strlen(seq)) == -1) {
			//unrecoverable
		}
		return 0;
	} else {
		*rows = ws.ws_row;
		*cols = ws.ws_col;
	}
	return 0;
}

void update_window_size(int *rows, int *cols) {
	if(get_window_size(STDIN_FILENO, STDOUT_FILENO, rows, cols) == -1 )
		die("get_window failed");
	cols -= 2; //make space for status bar
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
void editor_init(termios_ctx *term){
	EditorConfig E = { 
		.screenrows = 0,
		.screencols = 0,
	};
	update_window_size(&E.screenrows, &E.screencols);
	editor_draw_rows( term );
}


int main (int argc, char **argv) {

	if(argc != 2)
		die("make sure to correctly have called wasd along with a file name : \"wasd <file-name>\"");
	
	termios_ctx term;
	editor_init(&term);
	enable_raw_mode( &term );
	while( 1 ){
		editor_refresh_screen( &term );
		editor_process_key_press();
	}
	
	
	disable_raw_mode(&term);
	return 0;
}

/*
* Format:
* - Action
* - Error Handling
* - Output handling
*/
