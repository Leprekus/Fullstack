# KILO TEXT-EDITOR

## My Notes
- Default terminal starts in cooked mode (only keyboard input received is enter)
- want: raw_mode (i.e turn off a bunch of flags to accept input)
- setting term's att's: tcsetattr()
- TCSAFLUSH specifies when the att change is applied

Bitwise NOT ex:
```c
    ~00000000000000000000000000001000

    =>11111111111111111111111111110111
```
