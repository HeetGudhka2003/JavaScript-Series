// Define a constant variable indicating whether the user is logged in

const isUserLoggedIn = true;

// Define a constant variable representing the temperature

const temperature = 41;

// Check if the temperature is exactly 40

if (temperature === 40) {

    console.log("less than 50");
}

else {

    console.log("temperature is greater than 50");
}

// Output "Execute" regardless of the temperature condition

console.log("Execute");

// Define a constant variable representing the score

const score = 200;

// Check if the score is greater than 100

if (score > 100) {

    // If so, declare and assign a value to the local variable "power"

    let power = "fly";

    // Output the power

    console.log(`User power: ${power}`);
}

// Output the value of "power" outside the previous block (will result in an error since "power" is not accessible here)

console.log(`User power: ${power}`);

// Define a constant variable representing the balance

const balance = 1000;

// Check various conditions related to the balance

if (balance > 500) {

    console.log("test");
}

if (balance < 500) {

    console.log("less than 500");
} 

else if (balance < 750) {

    console.log("less than 750");
} 

else if (balance < 900) {

    console.log("less than 750");
} 

else {

    console.log("less than 1200");
}

// Define multiple boolean variables

const userLoggedIn = true;

const debitCard = true;

const loggedInFromGoogle = false;

const loggedInFromEmail = true;

// Check conditions involving boolean variables

if (userLoggedIn && debitCard && 2 == 3) {

    console.log("Allow to buy course"); 
    
    // This condition will not be met since 2 is not equal to 3
}

if (loggedInFromGoogle || loggedInFromEmail) {

    console.log("User logged in"); 
    
    // This condition will be met since at least one of the variables is true
}