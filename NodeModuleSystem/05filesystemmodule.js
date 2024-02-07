//The file system module in node js allows you to  work with files on your system
//Common use of files system module are create ,update, modify,rename ,delete

const { log } = require('console');
const fs = require('fs');


//Reading a file Synchronously
 const filecontent = fs.readFileSync('f1.txt','utf-8');
 console.log("Data of File 1 =>"+filecontent);
 console.log(filecontent);

 
 //Writing a file
 fs.writeFileSync('f2.txt','I have written this content using writeFileSync method ');
 //This will also delete the previous data on the file
 //if the file name that is passed doesn't exist it will create a new file with the passed name


 //Append on a file  => Addding data to the file also the previous data won't be affected or deleted
 //appendFileSync method is used to add new data to previously written file
 fs.appendFileSync('f2.txt',"  New Data has been uploaded")
 console.log("Data is appended to the file");
 
 
 //Deleting a file 
 fs.unlinkSync('f3.txt')
 console.log("File has been deleted successfully")