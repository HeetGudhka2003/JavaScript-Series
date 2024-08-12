// Define a simple function named `multiplyBy5` that takes a number as an argument and returns that number multiplied by 5.

function multiplyBy5(num) {

    return num * 5;
}

// Adding a property `power` to the `multiplyBy5` function itself.

// This demonstrates that in JavaScript, functions are first-class objects, meaning you can add properties to them.

multiplyBy5.power = 2;

// Calling the `multiplyBy5` function with the argument `5`.

// The function returns 25 because 5 * 5 = 25.

console.log(multiplyBy5(5)); // Output: 25

// Accessing the `power` property that was added to the `multiplyBy5` function.

// This will log `2`.

console.log(multiplyBy5.power); // Output: 2

// Accessing the prototype of the `multiplyBy5` function.

// Since it's a regular function and not a constructor function, the prototype is empty.

console.log(multiplyBy5.prototype); // Output: {}


// Define a constructor function `createUser` that takes two parameters, `username` and `price`.
function createUser(username, price) {

    this.username = username;

    this.price = price;
}

// Adding a method `incrementScore` to the prototype of `createUser`.

// This method increments the `price` property of the object.

createUser.prototype.incrementScore = function () {

    this.price++;
}

// Creating two new instances of `createUser` using the `new` keyword.

// `user1` has a `username` of 'sachin' and a `price` of 10.

// `user2` has a `username` of 'rahul' and a `price` of 20.

const user1 = new createUser('sachin', 10);

const user2 = new createUser('rahul', 20);

// Adding a method `printPrice` to the prototype of `createUser`.

// This method logs the `username` and the current `price` of the object.

createUser.prototype.printPrice = function () {

    console.log("The score of " + this.username + " is " + this.price + ".");
}

// Calling the `printPrice` method on `user1` and `user2`.

// It logs the `username` and `price` for each instance.

user1.printPrice(); // Output: The score of sachin is 10.

user2.printPrice(); // Output: The score of rahul is 20.


// Explanation of what happens behind the scenes when the `new` keyword is used.

/*

1. A new empty object is created: The `new` keyword initiates the creation of a new JavaScript object.

2. A prototype is linked: The new object gets linked to the prototype property of the constructor 
function. This means that it has access to the properties and methods defined on the constructor's 
prototype.

3. The constructor is called: The constructor function is called with the specific arguments, and `this` is bound to the newly created object. If no explicit return value is specified, the constructor 
returns the newly created object.

4. The newly created object is returned: After the constructor function is called, if it doesn't return 
a non-primitive value (like an array, object, or function), the newly created object is returned.

*/


// Define an array `myHeroes` containing three superhero names.

let myHeroes = ["Superman", "Batman", "Spiderman"];

// Define an object `heroPower` that maps superhero names to their corresponding power levels.

// It also includes a method `getSpiderPower` to log Spiderman's power.

let heroPower = {

    "Superman": 100,

    "Batman": 200,

    "Spiderman": 300,

    // Method to log Spiderman's power using `this`.

    getSpiderPower: function () {

        console.log(`Spiderman's power is ${this.Spiderman}.`);
    }
}

// Call the `getSpiderPower` method of `heroPower`.

// It logs Spiderman's power by accessing the `Spiderman` property within the object.

heroPower.getSpiderPower(); // Output: Spiderman's power is 300.


// Adding a method `heet` to the `Object.prototype`.

// This makes it available to every object in JavaScript, as all objects inherit from `Object`.

Object.prototype.heet = function () {

    console.log("Hey, I'm heet. I am present in each and every object.");
}

// Call the `heet` method on the `myHeroes` array.

// Since arrays are objects in JavaScript, they inherit from `Object.prototype`.

myHeroes.heet(); // Output: Hey, I'm heet. I am present in each and every object.

// Call the `heet` method on the `heroPower` object.

// Since `heroPower` is also an object, it has access to the `heet` method.

heroPower.heet(); // Output: Hey, I'm heet. I am present in each and every object.


// Create an object `user3` with `name` and `email` properties.

const user3 = {

    name: "chai",

    email: "bLqPv@example.com",
}

// Create an object `teacher` with a property `makeVideos`.

const teacher = {

    makeVideos: true
}

// Create an object `teachingSupport` with a property `isAvailable`.

const teachingSupport = {

    isAvailable: false
}

// Create an object `TASupport` with properties `makeAssignment` and `fullTime`.

// The `__proto__` property is used to set `teachingSupport` as the prototype of `TASupport`.

const TASupport = {

    makeAssignment: "Javascript Assignment",

    fullTime: true,

    __proto__: teachingSupport
}

// Set `user3` as the prototype of `teacher` using the `__proto__` property.

teacher.__proto__ = user3;

// Set `teacher` as the prototype of `TASupport` using `Object.setPrototypeOf`.

Object.setPrototypeOf(TASupport, teacher);


// Define a string `anotherUserName` with some trailing spaces.

let anotherUserName = "ChaiAurCode    ";

// Adding a method `trueLength` to the `String.prototype`.

// This method logs the original string and its true length after trimming the whitespace.

String.prototype.trueLength = function () {

    console.log(`${this}`);

    console.log(`True length is: ${this.trim().length}`);
}

// Call the `trueLength` method on `anotherUserName`.

// It logs the original string and its length after trimming the trailing spaces.

anotherUserName.trueLength(); // Output: "ChaiAurCode    " and "True length is: 11".