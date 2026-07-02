
const calculateCurrencyDivider = (inputAmount) => {

    if (inputAmount >= 500) {
        console.log(`500rs => ${Math.floor(inputAmount/500)} || Remaning => ${inputAmount%500}`);
        inputAmount = inputAmount%500;
    } // 500rs
    
    if (inputAmount >= 200) {
        console.log(`200rs => ${Math.floor(inputAmount/200)} || Remaning => ${inputAmount%200}`);
        inputAmount = inputAmount%200;
    } // 200rs

    if (inputAmount >= 100) {
        console.log(`100rs => ${Math.floor(inputAmount/100)} || Remaning => ${inputAmount%100}`);
        inputAmount = inputAmount%100;
    } // 100rs

    if (inputAmount >= 50) {
        console.log(`50rs => ${Math.floor(inputAmount/50)} || Remaning => ${inputAmount%50}`);
        inputAmount = inputAmount%50;
    } // 50rs

    if (inputAmount >= 20) {
        console.log(`20rs => ${Math.floor(inputAmount/20)} || Remaning => ${inputAmount%20}`);
        inputAmount = inputAmount%20;
    } // 20rs

    if (inputAmount >= 10) {
        console.log(`10rs => ${Math.floor(inputAmount/10)} || Remaning => ${inputAmount%10}`);
        inputAmount = inputAmount%10;
    } // 10rs

    if (inputAmount >= 5) {
        console.log(`5rs => ${Math.floor(inputAmount/5)} || Remaning => ${inputAmount%5}`);
        inputAmount = inputAmount%5;
    } // 5rs

    if (inputAmount >= 2) {
        console.log(`2rs => ${Math.floor(inputAmount/2)} || Remaning => ${inputAmount%2}`);
        inputAmount = inputAmount%2;
    } // 2rs 

    // 1rs
    console.log(`1rs => ${Math.floor(inputAmount/1)} || Remaning => ${inputAmount%1}`);
}

let amount = 4832;
calculateCurrencyDivider(amount);
