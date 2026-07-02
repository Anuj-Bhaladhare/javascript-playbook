

function name(){
    console.log("this is the function call");
} 

const another_func = () => {
    console.log("this is the another function type");
}

const async_function = async () => {
    try {
        console.log("this is not error");
    } catch (error) {
        console.log("this is the error");
    }
}

// name();
// another_func();
async_function();
