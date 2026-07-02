/*
    # Problem Statement - 8;
        * Write a function that findes and prints that maximum element in an array of array of numbers.
*/

const findMaximumNumberOfArray = (arr_num) => {

    if (!arr_num || !Array.isArray(arr_num)) {
        return "Please Provide me array list";
    }

    if (arr_num.length === 0) {
        return "Array list id Empty"
    }

    // let max_num = arr_num[0];
    // for (let i = 0; i < arr_num.length; i++) {
    //     if ( max_num < arr_num[i] ) {
    //         max_num = arr_num[i];
    //     }
    // }

    const max_num = Math.max(...arr_num)
    console.log(max_num);
    console.log(3 + true);


}

findMaximumNumberOfArray([5, 2, 6, 8, 9, 45, 12, 524, 33, 152, 56, 95]);
