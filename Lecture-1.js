// Datatypes

// Syntax and declaration

var score = 10;  // ES5 - Ecma 

let result = 50; // ES6 - Ecmascript 2015
const PI = 3.14;  // ES6 


score = 15;
result = 55;
PI = 3.26;

console.log(score);
console.log(result);
console.log(PI);


/**
 *  Datatypes
 *  1. Number
 *  2. Strings
 *  3. Boolean
 *  4. Null
 *  5. Undefined
 *  6. Objects
 *  7. Symbols (es6)
 * 
 *  Loosely Typed
 */

let score = 10; // Number
let res = '10'; // String

// # BEDMAS  (Bracket Exponent Divison Multiplication addition Substraction)

    let finalScore = score + result; // Concatenating with string
    let penalty = score - result; // Mathematical
    let totalGames = 'five';
    let avgScore = finalScore / totalGames;

    console.log(finalScore, penalty);
    console.log(avgScore);

    // # typeof
    console.log(typeof finalScore);
    console.log(typeof penalty);
    console.log(typeof avgScore);

    let value = (finalScore**2)*10/(penalty + totalGames)

    console.log(penalty * totalGames);

    console.log(value); // Value = NaN (not a number)