/* 

1. Write code to get array of names from the array of users.
2. Get back only active users.
3. Sort users by age (ascending & descending order).

*/

// Important Points to be remembered:

/*

1. The map() function returns a new array, whereas forEach() doesn't return anything.

2. The forEach() method is similar to for loop but it doesn't require an index value and it doesn't return anything.

3. The map() method is similar to forEach() but it returns a new array.

4. The filter() method is used to filter out the elements of an array. It returns a new array.

5. The sort() method is used to sort the elements of an array. It returns a new array.
It behaves different in the case of numbers and strings.

6. The push() method is used to modify the original array. It returns the new length of the array. It doesn't create a new array.

*/

// Define an array of user objects

const users = [
    {
        id: 1,
        name: "Ajay Suneja",
        isActive: true,
        age: 30
    },

    {
        id: 2,
        name: "Mohammad Fraz",
        isActive: true,
        age: 26
    },

    {
        id: 3,
        name: "Manohar Batra",
        isActive: true,
        age: 35
    },

    {
        id: 4,
        name: "Anshika Gupta",
        isActive: false,
        age: 23
    }
]

// Solution 1 - Level 1

// For Loop

// Create an empty array to store names.

const names = [];

// Loop through the users array.

for (let i = 0; i < users.length; i++) {

    // Check if the user is active.

    if (users[i].isActive) {

        // If active, push the name to the names array.

        names.push(users[i].name);
    }
}

// Print the result

console.log(names);

// Solution 2 - Level 2

// For Each Loop

// Create an empty array to store names.

const finalNames = [];

// Use forEach to iterate over each user in the users array. The callback function is used to check if the user is active.

users.forEach((user) => {

    // Check if the user is active.

    if (user.isActive) {

        // If active, push the name to the finalNames array.

        finalNames.push(user.name);
    }
});

// Print the result

console.log(finalNames);

// Solution 3 - Level 3

// Map and Filter

// Use filter to get only active users, then use map to extract the names. The callback function is used to check if the user is active. It is also called as method chaining.

const finalNames2 = users.filter((user) => user.isActive).map((user) => user.name);

// Print the result

console.log(finalNames2);

// Sort

// Sort the users array in ascending order based on age using sort method. The callback function is used to compare two users based on their age.

users.sort((a, b) => a.age - b.age);

// Print the result

console.log(users);

// Sort the users array in descending order based on age using sort method. The callback function is used to compare two users based on their age.

users.sort((a, b) => b.age - a.age);

// Print the result

console.log(users);