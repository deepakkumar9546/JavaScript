const accountId=14432
let accountEmail="deepak@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;   /*if we print this then it will show the 'undefined' */

// accountId=2 // not allowed as it is declared from const

accountEmail="hello@gmail.com"
accountPassword="21212121"
accountCity="Bengaluru"


console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])  // all the values are in tabular form




