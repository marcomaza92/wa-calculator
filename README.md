# WASM 101

## Description

WebAssembly is a technology that aims to incorporate the native speed and performance from languages like C/C++ into the twenty first century web development.

In other words, **you can run C/C++ code in the browser**

Yes, you read that right. No, I'm not kidding.

---

## Easy Mode

0. Prerequisites
1. Write the C/C++ code
2. Compile the C/C++ code
3. Download the dynamic library
4. Add the dynamic library
5. Call and use the dynamic library
6. Deploy the application to see results

### 0. Prerequisites

For this project you will need:

* Web local server (NodeJS, Apache, etc.).
* Text editor (I recommend Atom).

### 1. Write the C/C++ code

Here you have this C calculator (C++ code is the same in this case):

```c
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

**Important**: for the sake of simplicity you don't need to declare any variable or include any header or library.

### 2. Compile the C/C++ code

Go [here](https://mbebenita.github.io/WasmExplorer/) and paste the code in the red section.

**Tips**:

- You can choose from a bunch of compilers:
  - C89 (C code)
  - C99 (C code)
  - C++98 (C++ code)
  - C++11 (C++ code)
  - C++14 (C++ code)
  - C++1z (C++ code)

- You can choose different levels of optimization:
  - 0 (less optimization)
  - 1
  - 2
  - 3
  - 4
  - 5
  - s (optimization it's over 9000!)

Use `C99` (altought you could use any of them since they have the same syntax, stick with this one for simplicity reasons explained later) and choose the `s` option from the optimization.

Hit the button `compile` and you will see some code appearing in the purple and blue parts.

**The purple part:** This is WAST/WAT code. Is basically WASM human-readable code. Useful to check and debug the compilation.
**The blue part:** This is Assembler code. If you've ever seen it, you'll get pretty much of it.

### 3. Download the dynamic library

Now, download the file.

If you hit the button `download`, it will compile from WAT to WASM (your magic file) and download it.

Once you have it, move it to your project folder (i.e.: `~/www/wasm-calculator`).

This folder should be inside the _root directory_ (`www` in this case) of your web local server.

### 4. Add the dynamic library

You are done with the _low-level_ part. Now you have to do some HTML/CSS/JS to use this magic file.

To add the library and show results on the browser, create the following files:

- index.html
- index.css
- index.js

You can create those with

```bash
touch index.{html,css,js}
```

The content should for each one should be:

**index.html**

```html
code here
```

**index.css**

```css
code here
```

**index.js**

```js
code here
```

HTML and CSS code can stand still. JS is the one making the work for you.

With this part you are defining how to load a WebAssembly dynamic library:

```js
code here
```

With this part you are calling the function you defined before and passing it the dynamic library (your magic file):

```js
code here
```

Particularly, you will see you are _exporting_ the functions from the C code to the function call. This way you can use those functions like a JS function.

```js
code here
```

The rest of it is pretty much normal JS

### 5. Call and use the dynamic library

As you may have guessed, you will have to call the JS file from the HTML file to use all of the magic from it.

You can simply do:

```html
code here
```

### 6. Deploy the application to see results

Now, the moment of the true. Test it out!.

Open [localhost/wasm-calculator](https://localhost/wasm-calculator) in your browser. You should see something like this:

![Success](https://localhost/wasm-calculator/success.jpg)

If you don't see this, check the following:

* Review the steps one by one carefully. This is a hard concept to incorporate.
* Check your web local server configuration. Maybe your _root directory_ is not the one you think it is.

---

## Hard Mode (To-Do)

0. Prerequisites
1. Write the C/C++ code
2. Install the Toolchain
3. Compile the C/C++ code
4. Add the dynamic library
5. Call and use the dynamic library
6. Deploy the application to see results

---

## Credits

---

## Further Reading

* [WebAssembly Developers Guide](http://webassembly.org/getting-started/developers-guide/)
* [Standalone WebAssembly Example](https://gist.github.com/kripken/59c67556dc03bb6d57052fedef1e61ab)
* [WebAssembly with only 14 lines of JS](https://medium.freecodecamp.org/get-started-with-webassembly-using-only-14-lines-of-javascript-b37b6aaca1e4)

---

## License

---

## Thanks

---

_Per aspera ad astra_
