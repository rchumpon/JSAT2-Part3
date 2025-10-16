// File: Q3.3_SliceAndSubstring.js
// Description: Use the functions slice and substring to create new strings
// Author: Roongroj Chumpon
// Date: 17/10/25

// Define two strings.
const myString = "This is a string"
const anotherString = "   Another string" // note there are 3 blank spaces at the beginning)

// Use slice() to extract characters from index 5 and up to, but not including index 9.
newStr1 = myString.slice(5, 9);
// Use substring() to extract characters from index 6 up to, but not including index 9.
newStr2 = anotherString.substring(6, 9);

// Display the results.
console.log(newStr1);
console.log(newStr2);