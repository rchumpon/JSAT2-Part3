// File: Q3.8_readFile.js
// Description: Reading a text file.
// Author: Roongroj Chumpon
// Date: 17/10/25
// Version: 1.0.0

// Import the ‘fs’ (File System) module from Node.js.
const fs = require('node:fs');

// Display a message before starting the read process.
console.log("Reading the file...");

// Use the fs.readFile() function to read the contents of the file.
// Add the following parameters to the fs.readFile() function:
// The file name
// The file encoding (utf8 ensures the content is read as text.)
// A callback function
fs.readFile('output.txt', 'utf8',(err, fileText) => {
  // Check for errors
  if(err) {
    console.error(err);
    return;
  }
  // Display the read file to the console.
  console.log("The file contents are: ");
  console.log(fileText.toString());
})
// End of program.