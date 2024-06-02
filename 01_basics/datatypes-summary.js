// primitive

// it is of 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

//const bigNumber = 34343434343433232n


// Reference (Non-primitive)

// Array, Object, Functions

const heroes = ["shaktiman", "nagaraj", "doga"]     // array

let myObj = {          // object
    name: "deepak",
    age: 21,
}         

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);


// link to study

//  https://262.ecma-international.org/5.1/#sec-11.4.3




// ***********************************************************

// Stack (Primitive), Heap (Non-Primitive)

// In stack the copy value is passed (pass by value) whereas in heap the original value is passed(pass by reference)

let myYoutubeName = "deepakkumardotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName)
console.log(anotherName)

// above two console statement print the different as copy of the value is passed so it will change the copied value of variable but it will not change the original value of the variable so this is called pass by value

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "deepak@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

// above two console statement print the same as original value is passed so it will change the original value of the variable and so this is called pass by reference. 





