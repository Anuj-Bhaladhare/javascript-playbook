
/*
    # Problem Statement - 10:
        * Write a function that returns the result of raising a given number to a specified power.
        * Input: Two Number
            - Base
            - Exponent
        * Return: Base to the power of exponent
        * Example: 
            - 2, 3: 2 * 2 * 2 = 8
            - 5, 4: 5 * 5 * 5 * 5 = 625
        * Do not use Math.pow()
*/

const calculatePowerValue = (base, exponent) => {

    if ( !base || !exponent ) {
        return "Value is not present";
    }

    if ( !Number.isInteger(base) || !Number.isInteger(exponent) ) {
        return "please provide me integer value";
    }

    let result = 1;
    for ( let i = 1; i <= exponent; i++ ) {
        result = result * base;
    }
    return result;

}

console.log(calculatePowerValue(2, 5));
