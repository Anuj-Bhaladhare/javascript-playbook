
/*
    # Problem Statement - 10:
        * Write a function that print counts and prints the number of vowels and consonants in a given string.
        * Input: String
        * Return: Counts Vowels and Consonants
        * Vowel: a, e, i, o, u
        * Consonants: All other character
*/

const countsVowelsAndConsonants = (inputString) => {

    inputString = inputString.toLowerCase().replace(/ /g, "");

    const vowels = "aeiou";
    const consonent = "bcdfghjklmnpqrstvwxyz";

    let vowels_count = 0;
    let consonent_count = 0;

    for ( let i = 0; i < inputString.length; i++ ) {
        if (vowels.includes(inputString[i])) {
            vowels_count += 1;
        }

        if (consonent.includes(inputString[i])) {
            consonent_count += 1;
        }
    }

    return (
        {
            "vowels_count": vowels_count, 
            "consonent_count": consonent_count
        }
    );
}

console.log(countsVowelsAndConsonants("Hello World"));
