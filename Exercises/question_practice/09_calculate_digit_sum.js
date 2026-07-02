/*
    # Problem Statement - 8
        * Write a function that calculate and print the sum of the digit of a give number
        * Input: A number, positive integer -> 12, 34, 123, 1234
        * Return: Sum of all digits
        * Example:
            - 12    : 1 + 2 = 3
            - 34    : 3 + 4 = 7
            - 123   : 1 + 2 + 3 = 6
            - 1234  : 1 + 2 + 3 + 4 = 10
*/

const calculateSumOfDigits = (digit) => {
    
    if (!typeof digit === "number" || !Number.isInteger(digit) ) {
        return "Please provide integer number";
    }

    if ( digit < 0 ) {
        return "Dont provide negitive value";
    }

    // let result = 0;
    // let numArray = Array.from(String(digit), Number);
    // for ( let i = 0; i < numArray.length; i++ ) {
    //     result += numArray[i];
    // }
    // return result;

    const numString = digit.toString();
    const splitString = numString.split('');
    let sumOfDigit = 0;
    splitString.forEach( num => {
        sumOfDigit += parseInt(num);
    });
    return sumOfDigit;

}

console.log(calculateSumOfDigits(458));
