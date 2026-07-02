
const answer = Number(prompt("What is your age ? "));

if (isNaN(answer)) {

    console.log("This is not an Valid Input...!");

} else if (answer >= 18) {

    console.log("You can Vote");

} else {

    console.log("You can Not Vote");

}

