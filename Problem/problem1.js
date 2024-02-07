

// Problem 1: File Reader
// Problem Statement: Create a function readFileContent(filePath) that takes the path to a file as input and 
// reads its content asynchronously using the fs module. The function should print the content to the console

const fs = require('fs');


function readFileContent(filepath){

    fs.readFile(filepath,'utf-8',(error,data)=>{

        if(error){
            console.log("Error :",error);

        }
        else{
            console.log("File Content \n",data);
        }

    })

}

readFileContent("C:\\Users\\verti\\Desktop\\Scalar30DaysNodeJS\\Problem\\test-files\\file1.txt")
readFileContent("C:\\Users\\verti\\Desktop\\Scalar30DaysNodeJS\\Problem\\test-files\\empty-file.txt")
readFileContent("C:\\Users\\verti\\Desktop\\Scalar30DaysNodeJS\\Problem\\test-files\\nonexistent-file.txt")
