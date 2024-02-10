

// Non -Blocking Operations (Asycnchronous Task)

const fs = require('fs');

console.log(" I am the statement above asynchronous");
 fs.readFile('exampleblocking.txt',{encoding : 'utf8'},(error,data)=>{
    if(error){
        console.log(error.message);
    }
    else{
        console.log(data);
    }
 })
 console.log(" I am the statement below asynchronous");