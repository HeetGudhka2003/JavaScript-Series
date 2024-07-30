// Declaration of variable 'a' with value 300

let a = 300

// Start of an if statement

if (true) {

    // Declaration of a new block-scoped variable 'a' with value 10, shadows the outer 'a'

    let a = 10

    // Declaration of a constant 'b' with value 20

    const b = 20

    // This console.log is commented out, so it won't execute

    // console.log("INNER: ", a);
}

// Declaration of a function named 'one'
function one() {

    // Declaration of a constant 'username' with value "hitesh"

    const username = "hitesh"

    // Declaration of a nested function named 'two'

    function two() {

        // Declaration of a constant 'website' with value "youtube"

        const website = "youtube"

        // Log 'username', which is accessible here due to lexical scoping
        
        console.log(username);
    }

    // This console.log is commented out, so it won't execute

    // console.log(website);

    // Calling the nested function 'two'

    two()
}

// Start of an if statement

if (true) {

    // Declaration of a constant 'username' with value "hitesh"

    const username = "hitesh"

    // Start of an inner if statement

    if (username === "hitesh") {

        // Declaration of a constant 'website' with value "youtube"

        const website = " youtube"

        // This console.log concatenates 'username' and 'website', then logs the result

        console.log(username + website);
    }

    // This console.log is commented out, so it won't execute

    // console.log(website);
}

// This console.log would throw an error since 'username' is not defined in this scope

// console.log(username);

//  interesting example

// This console.log calls the function 'addone' with argument 5 and logs the return value
console.log(addone(5))

// Declaration of function 'addone' with parameter 'num', returns 'num + 1'
function addone(num) {

    return num + 1
}

// Attempt to call function 'addTwo' before its declaration, this would throw a ReferenceError

addTwo(5)

// Declaration of constant 'addTwo' as an anonymous function expression, which adds 2 to the input number

const addTwo = function (num) {

    return num + 2
}