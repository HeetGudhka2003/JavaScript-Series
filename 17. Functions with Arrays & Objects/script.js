// Define a function named calculateCartPrice with a rest parameter (...totalCartPrice)

function calculateCartPrice(...totalCartPrice) {

    // Return the received arguments as an array

    return totalCartPrice;
}

// Call calculateCartPrice function with three arguments: 200, 400, and 500

console.log(calculateCartPrice(200, 400, 500));

// Call calculateCartPrice function with four arguments: 200, 400, 500, and 2000

console.log(calculateCartPrice(200, 400, 500, 2000));

// Define an object named JSUser with properties username and price

const JSUser = {

    username: "hitesh",

    price: 300,
}

// Define a function named handleObject with a parameter named anyObject

function handleObject(anyObject) {

    // Log a message with the values of username and price properties of the provided object

    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// Call handleObject function with JSUser object as an argument

handleObject(JSUser);