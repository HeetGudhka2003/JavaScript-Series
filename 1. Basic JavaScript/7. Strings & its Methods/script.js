// Declare a constant variable 'Name' and assign the string "hitesh" to it.

const Name = "hitesh";

// Print the data type of 'Name' using console.log.

console.log("The typeof Name is: " + typeof Name);

// Declare a constant variable 'repoCount' and assign the numeric value 50 to it.

const repoCount = 50;

// Print a message using string interpolation to display the values of 'Name' and 'repoCount'.

console.log(`My name is ${Name} and I have ${repoCount} repositories.`);

// Create a new string object 'gameName' using the String constructor.

const gameName = new String("hitesh-hc");

// Print the newly created string using console.log.

console.log("The new string created is: " + gameName);

// Print the data type of 'gameName' using console.log.

console.log("The type of gameName is " + typeof gameName);

// Print the length of the string 'gameName'.

console.log("The length of gameName is: " + gameName.length);

// Print the uppercase version of 'gameName'.

console.log("The uppercase of gameName is: " + gameName.toUpperCase());

// Print the character at index 3 in 'gameName'.

console.log("The character at index 3 is: " + gameName.charAt(3));

// Print the index of the first occurrence of 'h' in 'gameName'.

console.log("The index of h in gameName is: " + gameName.indexOf('h'));

// Print the last index of the last occurrence of 'h' in 'gameName'.

console.log("The last index of h in gameName is: " + gameName.lastIndexOf('h'));

// Create a new string 'newString' by extracting a substring from 'gameName'.

const newString = gameName.substring(0, 4);

// Print the substring 'newString'.

console.log("The substring of gameName is: " + newString);

// Create another string 'anotherString' by using the slice method on 'gameName'.

const anotherString = gameName.slice(-8, 4);

// Print the sliced 'anotherString'.

console.log("The slice of gameName is: " + anotherString);

// Print the trimmed version of 'gameName'.

console.log("The trim of gameName is: " + gameName.trim());

// Check if the string 'gameName' includes the character 'i' and print the result.

console.log("The includes of gameName is: " + gameName.includes('i'));

// Split the string 'gameName' using ',' as the delimiter and print the result as an array.

console.log("The split of gameName is: " + gameName.split(','));

// Declare a constant variable 'concatString' and assign the string "Chai Aur Code" to it.

const concatString = "Chai Aur Code";

// Concatenate 'gameName' and 'concatString' and print the result.

console.log("The concat of gameName and concatString is: " + gameName.concat(" and " + concatString));