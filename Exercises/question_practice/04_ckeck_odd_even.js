
const checkOddEven = (number) => {

    if (number == null) {
        console.log("Please Give me value OR Positive Value");
        return;
    } else {
        return number % 2 === 0 ? "event" : "odd";
    }

    // if (number % 2 === 0) {
    //     console.log("This is Even Number");
    //     return "event"
    // } else {
    //     console.log("This is Odd Number");
    //     return "odd"
    // }

}

console.log(checkOddEven(4))
