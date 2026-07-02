
/*
    # Proble Statement - 5
    
    * Write a function that return reverse of string
        - `input: A string
        - return: reverse string
        - Example: 
            * "Ashish" -> "hsihsA"   
            * "Software Development" -> "tnempoleveD erawtfoS"
              
*/

const reverseString = (str) => {

    if (typeof str === "string") {
        // let reversedStr = "";
        // for (let i = str.length - 1; i >= 0; i--) {
        //     reversedStr += str[i];
        // }
        // return reversedStr;

        return str.split("").reverse().join([,]);


    } else {
        console.log("please give me string input");
        return;
    }

}

let string = "Software Development";
console.log(reverseString(string));
