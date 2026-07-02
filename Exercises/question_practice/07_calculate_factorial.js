/*
    # Problem Statement - 6
        * Write a function that calculate factorial fo a given number
        * input: A number, positive integer -> 0, 1, 4, 7...
        * Return: Factorial of that number
        * Factorial: Multiplication of all positive integers from 1 to given number
        * Example:
            - 1!: 1
            - 2!: 2 * 1 = 2 
            - 3!: 3 * 2 * 1 = 6 
            - 4!: 4 * 3 * 2 * 1 = 24
            - 0!: 1 
*/

const calculateFactorial = (number) => {

    // check is number ?
    if ( !typeof number === "number" || !Number.isInteger(number) ) {
        return "Please provide integer number";
    }

    // check for less then 0
    if ( number < 0 ) {
        return "number should be gretter then 0";
    }

    // condition for 1 and 0
    if ( number === 1 || number === 0 ) {
        return 1;
    }

    // calculate factorial
    // let factorial = 1;
    // for (let i = 1; i <= number; i++) {
    //     factorial = factorial * i;
    // }
    // return factorial;

    return number * calculateFactorial(number - 1)

}

console.log(`5!: ${calculateFactorial(5)}`);
// console.log(`0!: ${calculateFactorial(0)}`);
// console.log(`32!: ${calculateFactorial(32)}`);




// const calculateFactorialUsingRecursion = (number) => {

//     // Check is an interger
//     if ( !typeof number === "number" || !Number.isInteger(number) ) {
//         return "Please Provide Integer Number";
//     }

//     // check gretter then 0
//     if ( number < 0 ) {
//         return "inputNumber should be gretter than or equal to zero";
//     }

//     // return 1 for (1, 0)
//     if (number === 0 || number === 1) {
//         return 1;
//     }

//     // Recursive calculation
//     return number * calculateFactorialUsingRecursion(number - 1);

// }

// console.log(`5!: ${calculateFactorialUsingRecursion(5)}`);



    // if ( !typeof number === "number" || !Number.isInteger(number) ) {
    //     return "Please give me an integer number";
    // }

    // if (number < 0) {
    //     return "decimal integer is not supported";
    // }

    // let result = 1;
    // for ( let i = 1; i <= number; i++) {
    //     result = result * i;
    // }
    // return result;