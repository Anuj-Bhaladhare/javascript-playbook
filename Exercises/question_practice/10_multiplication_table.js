/*
    Proble Statement - 8;
        * Write a function that generates and prints a multiplication table for a given number up to specified range

*/

const generateMultiplicationTable = (num, table_to) => {
    for (let i = 1; i <= table_to; i++) {
        console.log(`${num} X ${i} = ${num*i}`);
    }
}


generateMultiplicationTable(8, 55);
