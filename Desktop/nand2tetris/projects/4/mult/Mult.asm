// Pixel.asm - lights up the top-left pixel on Hack screen

@SCREEN
D=A
@addr
M=D           // addr = address of SCREEN

@1
D=A
@addr
A=M
M=D           // *addr = 1 → turns on top-left pixel

(END)
@END
0;JMP         // infinite loop
