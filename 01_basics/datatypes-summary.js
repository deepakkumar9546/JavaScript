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
