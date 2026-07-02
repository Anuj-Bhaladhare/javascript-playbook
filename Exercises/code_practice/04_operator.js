
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Ternary Operator
// 6. String Operators
// 7. Type Operators
// 8. Bitwise Operators


// 1. ARITHMETIC OPERATOR:
/*
      ----------------------------------------------------------
    | Operator | Matlab              | Example                   |
    | -------- | ------------------- | ------------------------- |
    | +        | Add                 | `5 + 3 = 8`               |
    | -        | Subtract            | `5 - 3 = 2`               |
    | *        | Multiply            | `5 * 3 = 15`              |
    | /        | Divide              | `15 / 3 = 5`              |
    | %        | Modulus (Bacha hua) | `7 % 3 = 1`               |
    | ++       | Increment           | `let x = 5; x++ -> x = 6` |
    | --       | Decrement           | `let x = 5; x-- -> x = 4` |
      ----------------------------------------------------------

*/
let arth_number_1 = 10
let arth_number_2 = 5

// console.log(`Addition of ${arth_number_1} + ${arth_number_2} => `, arth_number_1 + arth_number_2)        // 15 
// console.log(`Subtraction of ${arth_number_1} - ${arth_number_2} => `, arth_number_1 - arth_number_2)     // 5
// console.log(`Multiplication of ${arth_number_1} * ${arth_number_2} => `, arth_number_1 * arth_number_2)     // 50
// console.log(`Division of ${arth_number_1} / ${arth_number_2} => `, arth_number_1 / arth_number_2)           // 2
// console.log(`Modulus of ${arth_number_1} % ${arth_number_2} => `, arth_number_1 % arth_number_2)            // 0



/*
  // =====================================
  // ASSIGNMENT OPERATORS IN JAVASCRIPT
  // =====================================

    | Operator | Matlab              | Example              |
    | -------- | ------------------- | -------------------- |
    | =        | Assign              | `x = 5`              |
    | +=       | Add and assign      | `x += 3` (x = x + 3) |
    | -=       | Subtract and assign | `x -= 2` (x = x - 2) |
    | *=       | Multiply and assign | `x *= 2`             |
    | /=       | Divide and assign   | `x /= 2`             |
    | %=       | Modulus and assign  | `x %= 3`             |

*/


// // = (Assign)
// let x = 5;
// console.log("=  :", x); // 5

// // += (Add and assign)
// let a = 10;
// a += 3; // a = a + 3
// console.log("+= :", a); // 13

// // -= (Subtract and assign)
// let b = 10;
// b -= 2; // b = b - 2
// console.log("-= :", b); // 8

// // *= (Multiply and assign)
// let c = 10;
// c *= 2; // c = c * 2
// console.log("*= :", c); // 20

// // /= (Divide and assign)
// let d = 10;
// d /= 2; // d = d / 2
// console.log("/= :", d); // 5

// // %= (Modulus and assign)
// let e = 10;
// e %= 3; // e = e % 3
// console.log("%= :", e); // 1





/*
  // =====================================
  // COMPARISON OPERATORS IN JAVASCRIPT
  // =====================================

  | Operator | Meaning                                 | Example     | Result  |
  | -------- | --------------------------------------- | ----------- | ------- |
  | `==`     | Equal to (checks value only)            | `5 == "5"`  | `true`  |
  | `===`    | Strict equal to (checks value and type) | `5 === "5"` | `false` |
  | `!=`     | Not equal to                            | `5 != "6"`  | `true`  |
  | `!==`    | Strict not equal to                     | `5 !== "5"` | `true`  |
  | `>`      | Greater than                            | `10 > 5`    | `true`  |
  | `<`      | Less than                               | `5 < 10`    | `true`  |
  | `>=`     | Greater than or equal to                | `10 >= 10`  | `true`  |
  | `<=`     | Less than or equal to                   | `5 <= 10`   | `true`  |

*/

// comparison-operators.js

console.log("=====================================");
console.log("COMPARISON OPERATORS IN JAVASCRIPT");
console.log("=====================================");

// Equal to (checks value only)
console.log("== Equal to (checks value only)");
console.log(5 == 5);       // true
console.log(5 == 10);      // false
console.log(5 == "5");     // true (type coercion happens)
console.log(true == 1);    // true

// Strict equal to (checks value and type)
console.log("=== Strict equal to (checks value and type)");
console.log(5 === 5);      // true
console.log(5 === "5");    // false
console.log(true === 1);   // false

// Not equal to
console.log("!= Not equal to");
console.log(5 != 5);       // false
console.log(5 != 6);       // true
console.log(5 != "5");     // false (type coercion happens)
console.log(true != 0);    // true

// Strict not equal to
console.log("!== Strict not equal to");
console.log(5 !== 5);      // false
console.log(5 !== "5");    // true
console.log(true !== 1);   // true

// Greater than
console.log("> Greater than");
console.log(10 > 5);       // true
console.log(5 > 10);       // false
console.log(5 > "3");      // true (string coerced to number)

// Less than
console.log("< Less than");
console.log(5 < 10);       // true
console.log(10 < 5);       // false
console.log("3" < 5);      // true (string coerced to number)

// Greater than or equal to
console.log(">= Greater than or equal to");
console.log(10 >= 10);     // true
console.log(10 >= 5);      // true
console.log(5 >= 10);      // false

// Less than or equal to
console.log("<= Less than or equal to");
console.log(5 <= 10);      // true
console.log(10 <= 10);     // true
console.log(10 <= 5);      // false




// logical-operators.js

console.log("=====================================");
console.log("LOGICAL OPERATORS IN JAVASCRIPT");
console.log("=====================================");

let isSunny = true;
let hasUmbrella = false;
let isWeekend = true;

// 1️⃣ AND (&&) - true only if both operands are true
console.log("AND (&&) examples:");
console.log(isSunny && isWeekend);     // true  (both true)
console.log(isSunny && hasUmbrella);   // false (one false)

// 2️⃣ OR (||) - true if at least one operand is true
console.log("OR (||) examples:");
console.log(isSunny || hasUmbrella);   // true  (one true)
console.log(hasUmbrella || false);     // false (both false)

// 3️⃣ NOT (!) - inverts the boolean value
console.log("NOT (!) examples:");
console.log(!isSunny);                  // false (inverts true)
console.log(!hasUmbrella);             // true  (inverts false)

// 4️⃣ Combining logical operators
console.log("Combined examples:");
console.log(isSunny && isWeekend || hasUmbrella);   // true
console.log((isSunny && hasUmbrella) || isWeekend); // true
console.log(!(isSunny && hasUmbrella));             // true



// ===================================================================
// Ternary Operator (condition ? exprIfTrue : exprIfFalse)
// ===================================================================

let age = 18;

// Check if a person is an adult
let canVote = (age >= 18) ? "Yes, can vote" : "No, too young";
console.log(canVote); // Output: Yes, can vote

// Another example: check even or odd
let number = 7;
let type = (number % 2 === 0) ? "Even" : "Odd";
console.log(type); // Output: Odd





