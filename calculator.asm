wasm-function[0]:
  sub rsp, 8                            ; 0x000000 48 83 ec 08
  addsd xmm0, xmm1                      ; 0x000004 f2 0f 58 c1
  nop                                   ; 0x000008 66 90
  add rsp, 8                            ; 0x00000a 48 83 c4 08
  ret                                   ; 0x00000e c3

wasm-function[1]:
  sub rsp, 8                            ; 0x000000 48 83 ec 08
  subsd xmm0, xmm1                      ; 0x000004 f2 0f 5c c1
  nop                                   ; 0x000008 66 90
  add rsp, 8                            ; 0x00000a 48 83 c4 08
  ret                                   ; 0x00000e c3

wasm-function[2]:
  sub rsp, 8                            ; 0x000000 48 83 ec 08
  mulsd xmm0, xmm1                      ; 0x000004 f2 0f 59 c1
  nop                                   ; 0x000008 66 90
  add rsp, 8                            ; 0x00000a 48 83 c4 08
  ret                                   ; 0x00000e c3

wasm-function[3]:
  sub rsp, 8                            ; 0x000000 48 83 ec 08
  divsd xmm0, xmm1                      ; 0x000004 f2 0f 5e c1
  movsd xmm2, qword ptr [rip + 0x9b0]   ; 0x000008 f2 0f 10 15 b0 09 00 00
  xorpd xmm3, xmm3                      ; 0x000010 66 0f 57 db
  ucomisd xmm1, xmm3                    ; 0x000014 66 0f 2e cb
  setne al                              ; 0x000018 0f 95 c0
  movzx eax, al                         ; 0x00001b 0f b6 c0
  jnp 0x29                              ; 0x00001e 0f 8b 05 00 00 00
 0x000024:
  mov eax, 1                            ; 0x000024 b8 01 00 00 00
 0x000029:                              ; 0x000029 from: [0x00001e]
  test eax, eax                         ; 0x000029 85 c0
  jne 0x35                              ; 0x00002b 0f 85 04 00 00 00
 0x000031:
  movapd xmm0, xmm2                     ; 0x000031 66 0f 28 c2
 0x000035:                              ; 0x000035 from: [0x00002b]
  nop                                   ; 0x000035 66 90
  add rsp, 8                            ; 0x000037 48 83 c4 08
  ret                                   ; 0x00003b c3
