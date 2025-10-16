// File: Q3.5_utilityMethods.js
// Description: Use various utility methods to create new strings.
// Author: Roongroj Chumpon
// Date: 17/10/25

// Use the concat method to join the hello string and myName string
// Declare variables to store two strings
let hello = "Hello there";
let myName = "Roongroj";

// Use the concat() method to join the two strings together.
// Add a space between them for readability.
let greetings = hello.concat(" ", myName);
// Display the result.
console.log(greetings);

// Declare a variable with three blank spaces at the beginning.
let anotherString = "   Another string"

// Use the trim method to remove the spaces in anotherString.
let trimmedString = anotherString.trim();
//Display the result.
console.log(trimmedString);

// Declare a variable.
let myString = "This is a string";

// Use the replace method to change "is a" to an empty space in myString.
let newString = myString.replace("is a", "");
// Display the output
console.log(newString);

// Use the split method on myString using the spaces to break the string
const myArray = myString.split(" ");
console.log(myArray);
