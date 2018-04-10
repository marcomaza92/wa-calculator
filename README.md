# WASM 101

## Description

WebAssembly is a technology that aims to incorporate the native speed and performance from languages like C/C++ into the twenty first century web development. In other words, **you can run C code in the browser** (Yes, you read that right. No, I'm not kidding).

## Easy Mode

0. Write the C/C++ code
1. Compile the C/C++ code
2. Download the dynamic library
3. Add the dynamic library
4. Call and use the dynamic library

### 0. Write the C/C++ code

Let's have this C calculator example here (C++ is the same in this case):

```
double addition(double number1, double number2) {
  return number1 + number2;
}
double subtraction(double number1, double number2) {
  return number1 - number2;
}
double multiplication(double number1, double number2) {
  return number1 * number2;
}
double division(double number1, double number2) {
  if (number2 != 0) {
    return number1 / number2;
  } else {
    return 34404;
  }
}
```
Of course you can write your own code.

**Important**: for the sake of simplicity is not necesary to declare any variable or include any header or library.

### 1. Compile the C/C++ code

Go [here](https://mbebenita.github.io/WasmExplorer/) and paste your code in the red section.

**Tips**:

- You can choose from a bunch of compilers:
  - C89
  - C99
  - C++98
  - C++11
  - C++14
  - C++1z

- You can choose different levels of optimization:
  - 0
  - 1
  - 2
  - 3
  - 4
  - 5
  - s

We will use `C99` (altought we could use any of them since they have the same syntax, we'll stick with this one for simplicity reasons I'll explain further) and we will choose the `s` option from the optimization.

Hit the button `compile` and you will see some code appearing in the purple and blue parts.

The purple part: This is WAST/WAT code. Is basically WASM human-readable code. Useful to check and debug the compilation.
The blue part: This is Assembler code. If you've ever seen it, you'll get pretty much of it.

### 2. Download the dynamic library

Now, download the file. If you hit the button `download`, it will compile from WAT to WASM (our magic file) and download it.

Once you have it, move it to your project folder (i.e.: `~/www/wasm-calculator`)

### 3. Add the dynamic library

We are done with the _low-level_ part. Now we have to do some HTML/CSS/JS to use this magic file.

To add the library and show results on the browser we will create the following files:

- index.html
- index.css
- index.js

You can create those with `touch index.{html,css,js}`. The content should for each one should be:

**index.html**

```
code here
```

## Hard Mode (To-Do)

0. Write the C/C++ code
1. Check prerequisites
2. Install the Toolchain
3. Compile the C/C++ code
4. Add the dynamic library
5. Call and use the dynamic library
