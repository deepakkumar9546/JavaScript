let score="deepak"

//console.log(typeof score)
//console.log(typeof(score))

let valueInNumber=Number(score) //converted in number

//console.log(typeof valueInNumber)
//console.log(valueInNumber)

// "33" => 33 (easily converted into number)

// "33abc" => NaN (Not a Number)
// true => 1, false => 0

let isLoggedIn = ""

let booleanIsLoggedIn=Boolean(isLoggedIn) // to convert in boolean 

// console.log(booleanIsLoggedIn)

// 1 => true, 0 => false
// "" => false
// "deepak" => true

let someNumber=33

let stringNumber=String(someNumber) // to convert in string
// console.log(stringNumber)
// console.log(typeof stringNumber) // to check whether that number really converted in string or not 

// *****************************operations*************************************** 

let value=3
let negValue = -value
//console.log(negValue)  // -3

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2/3);
//console.log(2**3);
//console.log(2%3);

let str1="hello"
let str2=" deepak"

let str3=str1+str2 // addition/concatenation of string
// console.log(str3)

// console.log("1" + 2)     //12

// console.log(1 + "2")     //12

// console.log ("1" + 2 + 2) //122  (if string comes first then all the numbers gets converted into string and gets attached one after)

// console.log (1 + 2 + "2") //32  (if string is at the last then firstly all the operations gets performed and at last string is get attached)

//console.log((3+4) * 5 % 3);

// console.log(+true);  //1 (return 1 as it is true)

// console.log(+"");    //0 (empty string so return false)

let num1,num2,num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter); //101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


