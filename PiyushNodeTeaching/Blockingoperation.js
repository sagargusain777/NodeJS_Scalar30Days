
// Blocking operations in Node js 
//Synchronous Tast
///By Default thread pool size is 4
//Maximum thread pool size is equal to total number of cpu threads

const  fs = require ('fs');
const os =require('os');
console.log(os.cpus().length)


fs.writeFileSync("exampleblocking.txt","I have been executed using a thread or worker")
console.log("File has been written succesfully");
let result = fs.readFileSync("exampleblocking.txt","utf8")
console.log(result);