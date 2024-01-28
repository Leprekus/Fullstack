#!/bin/bash

# Remove previous compilation error log if exists
rm -f compilation_error.log

# Compile the C program
gcc -o chip8 chip8.c 2> compilation_error.log

# Check if compilation was successful
if [ $? -eq 0 ]; then
    # Run the compiled program
    ./chip8
else
    echo "Compilation failed. Check compilation_error.log for details."
    cat compilation_error.log
    rm -f chip8  # Remove the executable if compilation fails
fi

