// Check for wasm support.
if (!('WebAssembly' in window)) {
  console.log("Oops, this browser don't support WebAssembly. Upgrade it! :)");
}

let exports;

let addition, subtraction, multiplication, division, square, exponentiation;
let number, number1Input, number2Input;
let output;

// Loads a WebAssembly dynamic library, returns a promise.
function loadWebAssembly(fileName, imports) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(bits => WebAssembly.compile(bits)) // bits a.k.a. buffer
    .then(module => {
      // Create the imports for the module, including the
      // standard dynamic library imports
      imports = imports || {};
      imports.env = imports.env || {};
      imports.env.memoryBase = imports.env.memoryBase || 0;
      imports.env.tableBase = imports.env.tableBase || 0;
      if (!imports.env.memory) {
        imports.env.memory = new WebAssembly.Memory({ initial: 256 });
      }
      if (!imports.env.table) {
        imports.env.table = new WebAssembly.Table({ initial: 8, element: 'anyfunc' });
      }
      return new WebAssembly.Instance(module, imports);
    });
};
// Loads the module and uses it.
loadWebAssembly('calculatorc.wasm')
  .then(instance => {
    exports = instance.exports; // The "exports" of the instance

    // squarer = exports._Z7squareri; // Exports the function. For C++ modules.
    addition = exports.addition; // Exports the function. For C modules.

    // console.log('Finished compiling! Ready when you are...'); // It's alive!
    // console.log(squarer); // It's really native code!

    additionTrigger = document.getElementById("addition");

    number1Input = document.getElementById("number1");
    number2Input = document.getElementById("number2");

    additionTrigger.addEventListener('click', function () {
      output = document.getElementById("result");
      output.innerHTML = addition(number1Input.value, number2Input.value);
    });
});
// loadWebAssembly('calculatorcpp.wasm')
//   .then(instance => {
//     exports = instance.exports; // The "exports" of the instance
//
//     square = exports._Z7squareri; // Exports the function. For C++ modules.
//     // squarer = exports._squarer; // Exports the function. For C modules.
//     // console.log('Finished compiling! Ready when you are...'); // It's alive!
//     // console.log(squarer); // It's really native code!
//     input = document.getElementById("mainInput");
//     input.addEventListener('keyup', function () {
//       output = document.getElementById("result");
//       output.innerHTML = squarer(input.value);
//     }, 'false')
// });
