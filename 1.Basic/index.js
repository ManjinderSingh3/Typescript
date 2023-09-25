"use strict";
/*
NOTES :
- Typescript compiler never runs our code. Wheneve we run TS code, TS compiler transpile/convert our TS code to JS code
- TS Complier (It checks the types in code during compilation) ------> JS Compiler (It runs the converted JS code)
- Typescript is not understood by browser. So, we need to convert it to JavaScript to use it in HTML file in browser.
- TS compiler name : tsc
  Command to install TS compiler : npm i -g tsc
*/
function calculator(num1, num2, typeOfOperation) {
    if (typeOfOperation == "sum") {
        return num1 + num2;
    }
    else if (typeOfOperation == "sub") {
        return num1 - num2;
    }
    else if (typeOfOperation == "mul") {
        return num1 * num2;
    }
    else if (typeOfOperation == "div") {
        return num1 / num2;
    }
    return -1;
}
console.log(calculator(4, 89, "mul"));
