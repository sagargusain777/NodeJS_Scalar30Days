

const fs = require('fs');


//Creating a directory
//mkdirSync method is used to create a new folder or directory

// fs.mkdirSync('Sagardirectory')
// console.log("New Directory or filder has been created")

// fs.mkdirSync('C:\\Users\\verti\\Desktop\\Scalar30DaysNodeJS\\NodeModuleSystem\\Dhruvdirectory')

//Check the content of directory
//readdirSync

let folderpath = "C:\\Users\\verti\\Desktop\\Scalar30DaysNodeJS\\NodeModuleSystem";

const folderContent = fs.readdirSync(folderpath);

console.log("Contet of Folder : " , folderContent);