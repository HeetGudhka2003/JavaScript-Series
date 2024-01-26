// Date & Time in JavaScript

// Creating a new Date object representing the current date and time.

let myDate = new Date();

// Printing the string representation of the date using toString().

console.log(myDate.toString());

// Printing the date part of the date using toDateString().

console.log(myDate.toDateString());

// Printing the date and time in a localized format using toLocaleString().

console.log(myDate.toLocaleString());

// Printing the type of the variable myDate.

console.log(typeof myDate);

// Creating a new Date object for a specific date (January 23, 2023).

let myCreatedDate = new Date(2023, 0, 23);

// Creating a new Date object for a specific date and time (January 23, 2023, 5:03 AM).

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);

// Printing the date part of myCreatedDate using toDateString().

console.log(myCreatedDate.toDateString());

// Printing the localized date and time of myCreatedDate2 using toLocaleString().

console.log(myCreatedDate2.toLocaleString());

// Creating a new Date object from a string representation of a date ("2023-01-14").

let myCreatedDate3 = new Date("2023-01-14");

// Printing the localized date and time of myCreatedDate3 using toLocaleString().

console.log(myCreatedDate3.toLocaleString());

// Getting the current timestamp using Date.now().

let myTimeStamp = Date.now();

// Printing the current timestamp.

console.log(myTimeStamp);

// Getting the timestamp of myCreatedDate using getTime().

console.log(myCreatedDate.getTime());

// Getting the current timestamp using Date.now().

console.log(Date.now());

// Getting the current timestamp in seconds (rounded down).

console.log(Math.floor(Date.now() / 1000));

// Creating a new Date object representing the current date and time.

let newDate = new Date();

// Getting the current month (January is represented as 0, so adding 1 to get the actual month).

console.log(newDate.getMonth() + 1);

// Getting the day of the week (0 for Sunday, 1 for Monday, etc.).

console.log(newDate.getDay());

// Printing the full weekday name in the 'Asia/Kathmandu' time zone.

newDate.toLocaleString('default', {

    weekday: 'long',

    timeZone: 'Asia/Kathmandu',
});

// Printing the current date and time.

console.log(newDate);