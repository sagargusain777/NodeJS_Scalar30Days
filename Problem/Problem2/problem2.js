// Problem Statement: Create a function writeToFile(filePath, content) that takes the path to a file and user input content as input. 
// The function should write the content to the specified file using the fs module.


const fs = require("fs")
const path =require("path")

function writeToFile(filePath,content){

    const filename= path.basename(filePath)


    fs.writeFile(filePath,content,'utf-8',(error)=>{

        if(error){
            console.log("Error",error.message);
        }
        else {
            console.log(`Data has been written to ${filename}`)
        }
        

        
    });
}


writeToFile('C:\\Users\\verti\\Desktop\\Scalar30DaysNodeJS\\Problem\\Problem2\\test-files\\output1.txt',"Sample content.")
writeToFile('C:\\Users\\verti\\Desktop\\Scalar30DaysNodeJS\\Problem\\Problem2\\test-files\\non-existentfolder\\output1.txt',"Sample content.")
