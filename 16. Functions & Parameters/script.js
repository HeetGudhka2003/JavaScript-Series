// Functions & Parameters in JavaScript

// At the time of function definition, whatever inputs we take are called parameters.

// At the time of function call, whatever arguments we pass are called arguments.

// Function definition: Declaring a function named addTwoNumbers that takes two parameters: num1 and num2.
function addTwoNumbers(num1, num2) {

    // Inside the function body, perform addition of num1 and num2 and store the result in a variable named result.

    let result = num1 + num2;

    // Return the result of the addition operation.

    return result;
}

// Call the addTwoNumbers function with arguments 10 and 20, and store the result in a constant named result.

const result = addTwoNumbers(10, 20);

// Output the result of the addition operation to the console along with a message.

console.log("The addition of two numbers is: " + result);

// Function definition: Declaring a function named loginUserMessage with a default parameter username set to "Guest".

function loginUserMessage(username = "Guest") {

    // Check if the username is falsy (empty string, undefined, null, etc.).

    if (!username) {

        // If username is falsy, output a message prompting the user to enter a username.

        console.log("Please enter a username");

        // Exit the function.

        return;
    }

    // If username is provided, return a string indicating that the user has just logged in.

    return `${username} just logged in`;
}

// Call the loginUserMessage function without providing any argument.

console.log(loginUserMessage());