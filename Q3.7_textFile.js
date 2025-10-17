// File: Q3.7_textFile.js
// Description: Write a textfile.
// Author: Roongroj Chumpon
// Date: 17/10/25
// Version: 1.0.0

// Import the ‘fs’ (File System) module from Node.js.
const fs = require('node:fs');

// Create the string data to be written.
const data = "I am creating a text file.";

// Display a message before starting the write process.
console.log("Writing to file...")

// Use fs.writeFile() function to write data to a file.
// This function takes in 4 parameters
// The file name
// The data being written.
// Any options(Optional)
// A callback function
fs.writeFile('output.txt', data, (err) => {
  // Check if we have an error.
  if(err){
    console.error(err);
  } else {
    // log the file was successfully written.
    console.log("File has been successfully written.");
  }
});
// End of program