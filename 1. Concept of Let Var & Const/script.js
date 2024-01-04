// Concept of Let, Var & Const in JavaScript

// Using const for a constant value, which cannot be reassigned

const accountId = 144553

// Using let for a variable that can be reassigned

let accountEmail = "hitesh@google.com"

// Using var for a variable that can be reassigned, but not recommended due to scope issues

var accountPassword = "12345"

// If you don't use any keyword (const, let, var), JavaScript assumes it's a global variable

accountCity = "Jaipur"

// Declaring a variable with let, but not assigning a value yet

let accountState;

// Attempting to reassign a value to a constant (will result in an error)

// accountId = 2 // not allowed

// Modifying the values of the variables

accountEmail = "hc@hc.com"

accountPassword = "21212121"

accountCity = "Bengaluru"

// Outputting the value of accountId to the console

console.log(accountId);

/*

Prefer not to use var because of issues related to block scope and functional scope.

*/

// Displaying the values of the variables in a table format

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/*

const = can't be re-assigned a value and can't be declared again  (block scope)

let = can be re-assigned a value but can't be declared again (block scope)

var = it can be re-assigned a value and it can also be declared again  (Global scope)

*/