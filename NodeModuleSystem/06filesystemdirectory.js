

const fs = require('fs');


// Creating a directory
// mkdirSync method is used to create a new folder or directory

fs.mkdirSync('Sagardirectory')
console.log("New Directory or filder has been created")

fs.mkdirSync('C:\\Users\\verti\\Desktop\\Scalar30DaysNodeJS\\NodeModuleSystem\\Dhruvdirectory')

// Check the content of directory
// readdirSync

let folderpath = "C:\\Users\\verti\\Desktop\\Scalar30DaysNodeJS\\NodeModuleSystem";

const folderContent = fs.readdirSync(folderpath);

console.log("Contet of Folder : " , folderContent);



//Check wheter a directory exist or not
//Return the boolean value

let directoryexist = fs.existsSync("C:\\Users\\verti\\Desktop\\Scalar30DaysNodeJS\\NodeModuleSystem")
console.log(directoryexist);
let directoryexistnot = fs.existsSync("C:\\Users\\verti\\Desktop\\Scalar30DaysNodeJS\\NodeModuleSystem\\Noobnhk")
console.log(directoryexistnot)

//removing a directory
//Before deleteing a directory it should be empty or it will give error
fs.rmdirSync("C:\\Users\\verti\\Desktop\\Scalar30DaysNodeJS\\NodeModuleSystem\\Dhruvdirectory")