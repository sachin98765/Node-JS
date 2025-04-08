const fs = require('fs');

/*------- Write File ---------*/
/*
//Sync....
fs.writeFileSync('./test.txt','This is File  Handling in Node.js');

//Async...
fs.writeFile('./test.txt','This is File  Handling in Node.js--- Async', (err) => {})
*/


/*------- Access File ---------*/
//Read File Sync
// const result= fs.readFileSync('./contacts.txt', 'utf-8');
// console.log(result);

//Read File Async
// fs.readFile("./contacts.txt", 'utf-8', (err, result) => {
//     if(err){
//         console.log("Err",err)
//     }else{
//         console.log(result)
//     }
// })


/*------------Append File---------*/
fs.appendFileSync('./test.txt', `This is Append File Handling in Node.js\n`);

/*---copy file---*/
fs.cpSync('./test.txt', './copy.txt')


/*--- file Details---*/
console.log(fs.statSync("./test.txt"))