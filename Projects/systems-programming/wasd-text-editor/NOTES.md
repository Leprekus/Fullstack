* Terminal has several modes
* raw mode: input is not processed and sent as is
* cooked mode: input is processed by the terminal before being sent to our program

```tcgeattr()``` allows us to:
1) create a struct with current term's atts
2) modify the struct
3) pass modified struct to ```tcsetattr()```

```tcsetattr()``` is used to set attributes to term

```c_lflag``` holds local flags, described as dumbing fround for other state
ICANON is a c_lflag


```iscntrl()``` tests whether char is a cntrl char (non printable)

```read()``` waits indefinetely for input so we add a timeout by specifying the minimum number of bytes & time it needs before it can return
This makes read return as soon as a key is pressed

carriage return '\r': 
	- control character ASCII code
	- Job is to display the output of a system
	- Is in charge of moving cursor position to first pos in same line

```write()``` writes data to a file descriptor (FD)

we add carriage returns to prinft() to move the cursor to start position in each \n


iflag: input modules
oflag: output modules
lflag: local modules

CTRL_KEY macro: ands a value of ```00011111``` and mirrorrs what the ctrl key does; strips 5-6 bits from <key-pressed> + <ktrl-key>.   
