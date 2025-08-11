const os = require("os")
console.log(os.hostname())

// synchronous and asynchronous file handling in Node.js

const fs = require('fs');
// synchronous  OR blocking 
console.log("1")
const result = fs.readFileSync("Contacts.txt", "utf-8" );
console.log(result)
console.log("2")

//Asynchronous OR Non-Blocking
console.log("1");
fs.readFile("test.txt", "utf-8", (err, result) => {
    console.log(result);
});

console.log("2");
console.log("3");
console.log("4");
console.log("4");
