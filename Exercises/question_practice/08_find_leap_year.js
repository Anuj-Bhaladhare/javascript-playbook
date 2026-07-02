/*
    # Problem Statement - 7
        * Write a function that tells if provided year is a leap year or not
        * Input: A number, positive integer -> 1900, 2023, 2033
        * Return: true if leap year, false if not leap year
        * Leap year:
            - Every 4th year is a leap year
            - Leap year has 366 days
            - Normal year has 365 days
            - February has 28 days or 29 days
            - ignoring has 28 days or 29 days
            - Ignoring the exception of 1700, 1800 and 1900 is leap year
        * Example:
            - 2000 - leap year - true
            - 2023 - not a leap year - false
            - 2024 - leap year - true

*/

const findLeapYear = (year) => {

    if (!typeof year === "number" || Number.isInteger(year) ) {
        return "Please Provide Number";
    }

    if (year % 4 === 0) {
        return true;
    }
    return false;
    
}


console.log("is 2023 leap year: ", findLeapYear(2023));
console.log("is 2024 leap year: ", findLeapYear(2024));
