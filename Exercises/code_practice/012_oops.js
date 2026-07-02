
// // =====================================================
// // OOPS IN JAVASCRIPT
// // =====================================================


// /*
//     # JavaScript and Classes:

//     ## OOPs:

//     ## Object:
//         - collection of properties and method
//         - toLowerCase

//     ## why use OOPs:

//     ## parts of OOPs:
//         - Object literal
//             * Cunstructor function
//             * Prototypes
//             * Classes
//             * Instances (new, this)
            
//     ## 4 Pillars:
//         - Abstraction
//         - Inheritance
//         - polimorphisum
//         - incapsulation

// */



// const user = {
//     name: "Anuj",
//     age: 25,
//     loggedInCount: 8,
//     activeUser: true,

//     getUserName: function() {
//         console.log(`Username: ${this.name}`)
//     },

//     getUserDetails: function() {
//         console.log("got use details form the user when have in database");
//     },

//     anotherFunc: () => {
//         console.log("this is the another function");
//     }

// }

// // console.log(`User Name => ${user.name}`);
// // console.log(`User Age => ${user.age}`);
// // console.log(`User Login Time => ${user.loggedInCount}`);
// // console.log(`User is Active => ${user.activeUser}`);

// // user.getUserDetails()
// // user.anotherFunc()
// // user.getUserName()


// function newUsers(username, loginCount, isLoggedIn) {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;
    
//     this.greeting = function() {
//         console.log("Greeting to ", this.username)
//     }


//     return this;
// }


// let name = new newUsers("Anuj", 55, true);
// let name_525 = new newUsers("Sakaratmak", 11, false);

// console.log(name);
// console.log(name_525);

// name_525.greeting()


const user_obj = {
    name: "Anuj",
    head_name: "Bhaladhare",
    clollege: "TGPCET",

}

class AnotherUserObj {

    constructor(name, surname, college, addr, age) {
        this.name = name;
        this.surname = surname;
        this.college = college;
        this.addr = addr;
        this.age = age;
    }
    
}

let student_1 = new AnotherUserObj("asd", "asdf", "TGPCET", "Gondiya", 78);
let student_2 = new AnotherUserObj("sdf", "sdfsd", "TGPCET", "Gondiya", 55);

console.log(student_1);
console.log(student_2);
