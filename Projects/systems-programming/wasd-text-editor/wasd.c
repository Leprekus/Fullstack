#include <ctype.h> //iscntrl
#include <errno.h>
#include <stdio.h>
#include <stdlib.h>
#include <termios.h>
#include <unistd.h> //contains the read fn

struct termios og_termios; //og term state

void die(const char *s) {
	perror(s); //kills the program and provides context on the error
	exit(1);
}

void disable_raw_mode() {
	if(tcsetattr(STDIN_FILENO, TCSAFLUSH, &og_termios) == -1)
		die("tcsetattr");
}

/*
purpose: store original state
and set terminal to raw mode
*/
void enable_raw_mode() {

	if(tcsetattr(STDIN_FILENO, TCSAFLUSH, &og_termios) == -1)
		atexit(disable_raw_mode); //restore og term state

	tcgetattr(STDIN_FILENO, &og_termios); //store term atts
	atexit(disable_raw_mode);

	struct termios raw = og_termios;

	//disable ctrl-s ctrl-q used for software control flow
	//ICRNL disables ctrl m
	//brkint causes sigint to be sent with ctrl-c
	//inpck enables parity checking
	//istrip causes 8th bit of each input byte to be stripped
	raw.c_iflag &= ~(BRKINT | ICRNL | INPCK | ISTRIP | IXON); 

	//OPOST turn off processing of output
	raw.c_oflag &= ~(OPOST);

	//tuning on bit mask to set char size to 8 bits per byte
	raw.c_cflag |= (CS8);

	

	//disable echoing | cooked mode | ctrl-z | ctrl-c
	//IEXTEN disables ctrl-o
	raw.c_lflag &= ~(ECHO | ICANON | IEXTEN | ISIG); 
	
	//specified min num of bytes & time before read() can return
	raw.c_cc[ VMIN ] = 0;
	raw.c_cc[ VTIME ] = 1;

	if(tcsetattr(STDIN_FILENO, TCSAFLUSH, &raw) == -1)
		die("tcsetattr");
}

int main() {
	enable_raw_mode();

	//read from std until there are no more bytes 
	while(1) {
		char c = '\0';
		
		//EAGAIN is an error timeout
		if(read(STDIN_FILENO, &c, 1) == -1 && errno != EAGAIN)
			die("read");

		if(iscntrl(c)) printf("%d\r\n", c);

		else printf("%d ('%c')\r\n", c, c);

		if(c == 'q') die("conchasumadre");;
	
	}


	return 0;
}