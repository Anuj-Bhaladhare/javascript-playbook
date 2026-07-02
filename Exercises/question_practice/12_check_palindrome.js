/*
    # Problem Statement - 9;
        * Write a function that checks if a string is palindrome or not.
        * Return: true || false
        * Example:
            - madam
            - level
            - abba
*/


const checkPalindromString = (string) => {

    if (!string || !typeof string === "string") {
        return "Please Provide String value";
    }
    
    string = string.toLowerCase();
    for ( let i = 0; i <= string.length / 2; i++ ) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;

}

// console.log(checkPalindromString("madadam"));



const checkPalindromString2 = (string) => {

    if (!string || !typeof string === "string") {
        return "Please Provide String value";
    }
    
    string = string.toLowerCase();
    const reverse_str = string.split("").reverse().join([,]);

    for ( let i = 0; i <= string.length / 2; i++ ) {
        if (string[i] !== reverse_str[i]) {
            return false;
        }
    }

    return true;

}

console.log(checkPalindromString2("madam"));
