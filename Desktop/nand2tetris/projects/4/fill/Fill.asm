// MultiplySimple.asm
// Repeated-addition multiplier
// Input: RAM[0] (R0) = multiplicand (X)
//        RAM[1] (R1) = multiplier   (Y)  (must be >= 0 for this simple version)
// Output: RAM[2] (R2) = product (X * Y)

@R2
M=0         // R2 = 0 (result)

(START)
  @R1
  D=M
  @END
  D;JEQ     // if R1 == 0, goto END

  @R2
  D=M
  @R0
  D=D+M     // D = R2 + R0
  @R2
  M=D       // R2 = D

  @R1
  M=M-1     // R1 = R1 - 1

  @START
  0;JMP

(END)
  @END
  0;JMP     // halt here (infinite loop)




