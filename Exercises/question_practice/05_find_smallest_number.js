/*
    # Proble Statement - 5
    
    * Write a function that finds and prints the smallest number among three given numbers.
        - `input: 3 numbers
        - Return: Smallest number
        - Example: 
            * 3, 1, 6  -->  1
            * -1, -6,  -->  -6
        - Math.min is not allowed`
*/

// ===> ARRAY <====
// const findSmallestNumber = (array) => {

//     // Check is array
//     if (!Array.isArray(array)) {
//         console.log("Please give me array");
//         return;
//     }

//     // is array empty ?
//     if (array.length === 0) {
//         console.log("Array is empty");
//         return;
//     }

//     // find smallest number
//     let smallest = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < smallest) {
//             smallest =  array[i]
//         }
//     }
//     console.log(smallest);
//     return smallest;
// }

// const num_array = [5, 6, 8, 9, 3, 1, 0, -5];
// findSmallestNumber(num_array);




// ====> NUMBER <====
const smallestOfThree = (a, b, c) => {
    
    // ------> LOGIC 1 <------
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else if (c < a && c < b) {
        return c;
    }

    // // ------> LOGIC 2 <------
    // let smallest = a;
    // if ( b < smallest ) {
    //     smallest = b;
    // } else if (c < smallest) {
    //     smallest = c;
    // }
    // return smallest;
}

console.log(smallestOfThree(1, 2, 3));
