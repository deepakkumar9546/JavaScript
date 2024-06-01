// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// all the above answers come in boolean value and till here there is no problem 

// console.log("2" > 1);  //true
// console.log("02" > 1); //true

// here there is chance of conflict that both the datatype are different

console.log(null > 0);   //false
console.log(null == 0);  //false
console.log(null >= 0);  //true

console.log(undefined == 0); //false
console.log(undefined > 0);  //false
console.log(undefined < 0);  //false

//avoid these type of conversions

// Now

// strict check ( === )

console.log("2" == 2)   //true
console.log("2" === 2)  //false

//strict check, checks the datatype also if both the datatype same then it compare and give results according to the value and if datatype are not same then it return false.


