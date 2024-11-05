# Avr Assembly Chip

## Definitions
Data space addressing: it is a range of addresses that can be mapped to fit our needs such as pointers, values, hardware registers, etc.
Interrupts: they are hardware or system events. These events get stored in the **interupt vector**. Chip stores state executes event and retrieves resumes execution retrieving state from the stack.

## Specifications
- has 32 registers each holds up to 8 bits
    - 6 registers can be used as 3 16bit indirect address register pointers for data space adressing
- Program flash memory is divided into **boot** and **application** sections. Contains lock bits to avoid read/write in certain memory regions. 256kb.
    - boot section:
    - application section:
        - contains interrupt vectors starting at 0x00, the lower the address, the higher the priority
- SRAM 8kb: contains the stack
    - I/O memory: 
    - stack: contains stack pointer (SP) which must be initialized by all programs
- Registers:
    - Data Space Addressing: 0x20 - 0x5F
    - I/O space 0x60 - 0x1FF:
    - Status Register (SREG): contains information of the most recently executed arithmetic instruction (1 8-bit register with 6 status flags)
        - I (Global Interrupt Enable): if cleared interrupts are disabled
        - T (bit copy storage): serves as a temporary storage
        - H (Half Carry Flag): indicates whether a carry happened between bits 3 and 4 during an 8 bit add / sub operation. 
        - S (Sign Bit): N(negative) xor V(overflow). tells you whether result should be interpreted as negative
        - N (Negative Flag): indicates if a result was negative in an arithmetic op
        - Z (Zero Flag): indicates whether the result of an operation was 0
        - C (Carry Flag): indicates a carry (borrow) between the most significant bit (MSB).
    - General Purpose Registers:
        The register's addresses get mapped to the first 32 locations of the address space. X, Y, Z registers can be set to index any register in the file.
        - Addresses: [ 0x01, 0X02, ..., 0X0D, 0X0E, 0X0F, 0X10, 0X11, ..., 0X1A, 0X1B, 0X1C, 0X1D, 0X1E, 0X1F ]
    - The X, Y, Z Registers:
        Registers R26...R31 are 16-bit address pointers. That allow indirect addressing to the data space.
        - j
- ALU: performs arithmetic, logical, and bit operations 

