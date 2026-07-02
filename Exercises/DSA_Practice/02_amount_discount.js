/*
    Amount          |    Discount
    0 - 5000        :   0 %
    5001 - 7000     :   5 %
    7001 - 9000     :   10 %
    more than 9001  :   20 %

*/

// calculate percentage
const calcPercentage = (amount, percent) => {

    const percentage = Math.floor((amount * percent)/100);

    return percentage;

}

// calculate discount
const calculateDiscountPercentage = (amount) => {

    let discount = 0;

    if ( amount > 0 && amount <= 5000 ) {

        console.log(amount);

    } else if ( amount >= 5001 && amount <= 7000 ) {

        discount = 5;

    } else if ( amount >= 7001 && amount <= 9000 ) {

        discount = 10;

    } else if ( amount > 9001) { 

        discount = 20;

    }

    console.log(amount - calcPercentage(amount, discount));

}

// Call function
calculateDiscountPercentage(12000);
