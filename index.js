// Check for wasm support.
if (!('WebAssembly' in window)) {
  console.log("Oops, this browser don't support WebAssembly. Upgrade it! :)");
}

let exports;

let addition, subtraction, multiplication, division;
let number, number1Input, number2Input;
let output;

// Loads a WebAssembly dynamic library, returns a promise.
// function loadWebAssembly(fileName, imports) {
function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(bits => WebAssembly.compile(bits)) // bits a.k.a. buffer
    .then(module => {
      // Create the imports for the module, including the
      // standard dynamic library imports
      // imports = imports || {};
      // imports.env = imports.env || {};
      // imports.env.memoryBase = imports.env.memoryBase || 0;
      // imports.env.tableBase = imports.env.tableBase || 0;
      // if (!imports.env.memory) {
      //   imports.env.memory = new WebAssembly.Memory({ initial: 256 });
      // }
      // if (!imports.env.table) {
      //   imports.env.table = new WebAssembly.Table({ initial: 8, element: 'anyfunc' });
      // }
      // return new WebAssembly.Instance(module, imports);
      return new WebAssembly.Instance(module);
    });
};
// Loads the C module and uses it.
loadWebAssembly('calculatorc.wasm')
  .then(instance => {
    exports = instance.exports; // The "exports" of the instance

    const addition = exports.addition; // Exports the function. For C modules.
    const subtraction = exports.subtraction;
    const multiplication = exports.multiplication;
    const division = exports.division;

    // console.log('Finished compiling! Ready when you are...'); // It's alive!

    const additionTrigger = document.getElementById('addition');
    const subtractionTrigger = document.getElementById('subtraction');
    const multiplicationTrigger = document.getElementById('multiplication');
    const divisionTrigger = document.getElementById('division');

    const equalTrigger = document.getElementById('equal');

    let number1 = document.getElementById('number1');
    let number2 = document.getElementById('number2');

    let operation = document.getElementById('operation');

    let result = document.getElementById('result');

    function execution(event) {
      let keyPressed = event.keyCode;
      let elementClicked = event.path[0].innerText;
      if ((keyPressed == 13 || elementClicked == '=') && operation.innerText != 'nil') {
        if (operation.innerText == '+') {
          result.innerText = addition(number1.innerText, number2.innerText);
        }
        if (operation.innerText == '-') {
          result.innerText = subtraction(number1.innerText, number2.innerText);
        }
        if (operation.innerText == 'x') {
          result.innerText = multiplication(number1.innerText, number2.innerText);
        }
        if (operation.innerText == '/') {
          result.innerText = division(number1.innerText, number2.innerText);
        }
      }
    }
    function operations(event) {
      let keyPressed = event.keyCode;
      let elementClicked = event.path[0].innerText;
      // Operations
      if (keyPressed == 107 || elementClicked == '+') {
        operation.innerText = '+';
      }
      if (keyPressed == 109 || elementClicked == '-') {
        operation.innerText = '-';
      }
      if (keyPressed == 106 || elementClicked == 'x') {
        operation.innerText = 'x';
      }
      if (keyPressed == 111 || elementClicked == '/') {
        operation.innerText = '/';
      }
    }
    function firstOperand(event) {
      let keyPressed = event.keyCode;
      let elementClicked = event.path[0].innerText;
      // First Operand
      if (operation.innerText == 'nil') {
        if (keyPressed == 48 || keyPressed == 96 || elementClicked == '0') {
          number1.innerText = `${number1.innerText}0`;
        }
        if (keyPressed == 49 || keyPressed == 97 || elementClicked == '1') {
          number1.innerText = `${number1.innerText}1`;
        }
        if (keyPressed == 50 || keyPressed == 98 || elementClicked == '2') {
          number1.innerText = `${number1.innerText}2`;
        }
        if (keyPressed == 51 || keyPressed == 99 || elementClicked == '3') {
          number1.innerText = `${number1.innerText}3`;
        }
        if (keyPressed == 52 || keyPressed == 100 || elementClicked == '4') {
          number1.innerText = `${number1.innerText}4`;
        }
        if (keyPressed == 53 || keyPressed == 101 || elementClicked == '5') {
          number1.innerText = `${number1.innerText}5`;
        }
        if (keyPressed == 54 || keyPressed == 102 || elementClicked == '6') {
          number1.innerText = `${number1.innerText}6`;
        }
        if (keyPressed == 55 || keyPressed == 103 || elementClicked == '7') {
          number1.innerText = `${number1.innerText}7`;
        }
        if (keyPressed == 56 || keyPressed == 104 || elementClicked == '8') {
          number1.innerText = `${number1.innerText}8`;
        }
        if (keyPressed == 57 || keyPressed == 105 || elementClicked == '9') {
          number1.innerText = `${number1.innerText}9`;
        }
        // Misc
        if (keyPressed == 110 || keyPressed == 190 || elementClicked == '.') {
          number1.innerText = `${number1.innerText}.`;
        }
      }
    }
    function secondOperand(event) {
      let keyPressed = event.keyCode;
      let elementClicked = event.path[0].innerText;
      // Second Operand
      if (operation.innerText != 'nil') {
        if (keyPressed == 48 || keyPressed == 96 || elementClicked == '0') {
          number2.innerText = `${number2.innerText}0`;
        }
        if (keyPressed == 49 || keyPressed == 97 || elementClicked == '1') {
          number2.innerText = `${number2.innerText}1`;
        }
        if (keyPressed == 50 || keyPressed == 98 || elementClicked == '2') {
          number2.innerText = `${number2.innerText}2`;
        }
        if (keyPressed == 51 || keyPressed == 99 || elementClicked == '3') {
          number2.innerText = `${number2.innerText}3`;
        }
        if (keyPressed == 52 || keyPressed == 100 || elementClicked == '4') {
          number2.innerText = `${number2.innerText}4`;
        }
        if (keyPressed == 53 || keyPressed == 101 || elementClicked == '5') {
          number2.innerText = `${number2.innerText}5`;
        }
        if (keyPressed == 54 || keyPressed == 102 || elementClicked == '6') {
          number2.innerText = `${number2.innerText}6`;
        }
        if (keyPressed == 55 || keyPressed == 103 || elementClicked == '7') {
          number2.innerText = `${number2.innerText}7`;
        }
        if (keyPressed == 56 || keyPressed == 104 || elementClicked == '8') {
          number2.innerText = `${number2.innerText}8`;
        }
        if (keyPressed == 57 || keyPressed == 105 || elementClicked == '9') {
          number2.innerText = `${number2.innerText}9`;
        }
        // Misc
        if (keyPressed == 110 || keyPressed == 190 || elementClicked == '.') {
          number2.innerText = `${number2.innerText}.`;
        }
      }
    }
    function erase() {
      let keyPressed = event.keyCode;
      if (keyPressed == 8 || keyPressed == 46) {
        if (operation.innerText == 'nil') {
          number1.innerText = '';
        } else if (operation.innerText != 'nil' && result.innerText != '') {
          result.innerText = '';
          number2.innerText = '';
        } else if (operation.innerText != 'nil') {
          number2.innerText = '';
          operation.innerText = 'nil';
        }
      }
    }

    document.addEventListener('keyup', firstOperand, false);
    document.addEventListener('click', firstOperand, false);

    document.addEventListener('keyup', operations, false);
    document.addEventListener('click', operations, false);

    document.addEventListener('keyup', secondOperand, false);
    document.addEventListener('click', secondOperand, false);

    document.addEventListener('keyup', erase, false);

    document.addEventListener('keyup', execution, false);
    document.addEventListener('click', execution, false);
});
// Loads the C++ module and uses it.
// loadWebAssembly('calculatorcpp.wasm')
//   .then(instance => {
//     exports = instance.exports; // The "exports" of the instance
//
//     const addition = exports._Z8additiondd; // Exports the function. For C modules.
//     const subtraction = exports._Z11subtractiondd;
//     const multiplication = exports._Z14multiplicationdd;
//     const division = exports._Z8divisiondd;
//
//     // console.log('Finished compiling! Ready when you are...'); // It's alive!
//
//     const additionTrigger = document.getElementById('addition');
//     const subtractionTrigger = document.getElementById('subtraction');
//     const multiplicationTrigger = document.getElementById('multiplication');
//     const divisionTrigger = document.getElementById('division');
//
//     const equalTrigger = document.getElementById('equal');
//
//     let number1 = document.getElementById('number1');
//     let number2 = document.getElementById('number2');
//
//     let operation = document.getElementById('operation');
//
//     let result = document.getElementById('result');
//
//     function execution(event) {
//       let keyPressed = event.keyCode;
//       let elementClicked = event.path[0].innerText;
//       if ((keyPressed == 13 || elementClicked == '=') && operation.innerText != 'nil') {
//         if (operation.innerText == '+') {
//           result.innerText = addition(number1.innerText, number2.innerText);
//         }
//         if (operation.innerText == '-') {
//           result.innerText = subtraction(number1.innerText, number2.innerText);
//         }
//         if (operation.innerText == 'x') {
//           result.innerText = multiplication(number1.innerText, number2.innerText);
//         }
//         if (operation.innerText == '/') {
//           result.innerText = division(number1.innerText, number2.innerText);
//         }
//       }
//     }
//     function operations(event) {
//       let keyPressed = event.keyCode;
//       let elementClicked = event.path[0].innerText;
//       // Operations
//       if (keyPressed == 107 || elementClicked == '+') {
//         operation.innerText = '+';
//       }
//       if (keyPressed == 109 || elementClicked == '-') {
//         operation.innerText = '-';
//       }
//       if (keyPressed == 106 || elementClicked == 'x') {
//         operation.innerText = 'x';
//       }
//       if (keyPressed == 111 || elementClicked == '/') {
//         operation.innerText = '/';
//       }
//     }
//     function firstOperand(event) {
//       let keyPressed = event.keyCode;
//       let elementClicked = event.path[0].innerText;
//       // First Operand
//       if (operation.innerText == 'nil') {
//         if (keyPressed == 48 || keyPressed == 96 || elementClicked == '0') {
//           number1.innerText = `${number1.innerText}0`;
//         }
//         if (keyPressed == 49 || keyPressed == 97 || elementClicked == '1') {
//           number1.innerText = `${number1.innerText}1`;
//         }
//         if (keyPressed == 50 || keyPressed == 98 || elementClicked == '2') {
//           number1.innerText = `${number1.innerText}2`;
//         }
//         if (keyPressed == 51 || keyPressed == 99 || elementClicked == '3') {
//           number1.innerText = `${number1.innerText}3`;
//         }
//         if (keyPressed == 52 || keyPressed == 100 || elementClicked == '4') {
//           number1.innerText = `${number1.innerText}4`;
//         }
//         if (keyPressed == 53 || keyPressed == 101 || elementClicked == '5') {
//           number1.innerText = `${number1.innerText}5`;
//         }
//         if (keyPressed == 54 || keyPressed == 102 || elementClicked == '6') {
//           number1.innerText = `${number1.innerText}6`;
//         }
//         if (keyPressed == 55 || keyPressed == 103 || elementClicked == '7') {
//           number1.innerText = `${number1.innerText}7`;
//         }
//         if (keyPressed == 56 || keyPressed == 104 || elementClicked == '8') {
//           number1.innerText = `${number1.innerText}8`;
//         }
//         if (keyPressed == 57 || keyPressed == 105 || elementClicked == '9') {
//           number1.innerText = `${number1.innerText}9`;
//         }
//         // Misc
//         if (keyPressed == 110 || keyPressed == 190 || elementClicked == '.') {
//           number1.innerText = `${number1.innerText}.`;
//         }
//       }
//     }
//     function secondOperand(event) {
//       let keyPressed = event.keyCode;
//       let elementClicked = event.path[0].innerText;
//       // Second Operand
//       if (operation.innerText != 'nil') {
//         if (keyPressed == 48 || keyPressed == 96 || elementClicked == '0') {
//           number2.innerText = `${number2.innerText}0`;
//         }
//         if (keyPressed == 49 || keyPressed == 97 || elementClicked == '1') {
//           number2.innerText = `${number2.innerText}1`;
//         }
//         if (keyPressed == 50 || keyPressed == 98 || elementClicked == '2') {
//           number2.innerText = `${number2.innerText}2`;
//         }
//         if (keyPressed == 51 || keyPressed == 99 || elementClicked == '3') {
//           number2.innerText = `${number2.innerText}3`;
//         }
//         if (keyPressed == 52 || keyPressed == 100 || elementClicked == '4') {
//           number2.innerText = `${number2.innerText}4`;
//         }
//         if (keyPressed == 53 || keyPressed == 101 || elementClicked == '5') {
//           number2.innerText = `${number2.innerText}5`;
//         }
//         if (keyPressed == 54 || keyPressed == 102 || elementClicked == '6') {
//           number2.innerText = `${number2.innerText}6`;
//         }
//         if (keyPressed == 55 || keyPressed == 103 || elementClicked == '7') {
//           number2.innerText = `${number2.innerText}7`;
//         }
//         if (keyPressed == 56 || keyPressed == 104 || elementClicked == '8') {
//           number2.innerText = `${number2.innerText}8`;
//         }
//         if (keyPressed == 57 || keyPressed == 105 || elementClicked == '9') {
//           number2.innerText = `${number2.innerText}9`;
//         }
//         // Misc
//         if (keyPressed == 110 || keyPressed == 190 || elementClicked == '.') {
//           number2.innerText = `${number2.innerText}.`;
//         }
//       }
//     }
//     function erase() {
//       let keyPressed = event.keyCode;
//       if (keyPressed == 8 || keyPressed == 46) {
//         if (operation.innerText == 'nil') {
//           number1.innerText = '';
//         } else if (operation.innerText != 'nil' && result.innerText != '') {
//           result.innerText = '';
//           number2.innerText = '';
//         } else if (operation.innerText != 'nil') {
//           number2.innerText = '';
//           operation.innerText = 'nil';
//         }
//       }
//     }
//
//     document.addEventListener('keyup', firstOperand, false);
//     document.addEventListener('click', firstOperand, false);
//
//     document.addEventListener('keyup', operations, false);
//     document.addEventListener('click', operations, false);
//
//     document.addEventListener('keyup', secondOperand, false);
//     document.addEventListener('click', secondOperand, false);
//
//     document.addEventListener('keyup', erase, false);
//
//     document.addEventListener('keyup', execution, false);
//     document.addEventListener('click', execution, false);
// });
