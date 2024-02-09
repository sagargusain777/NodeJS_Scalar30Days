
const cp = require('child_process')


function executeCommand(command){

    try{
        let result =cp.execSync(command,{encoding :'utf8'});
        console.log(result);

    }
    catch(error){
        console.log(error.message)

    }

     
     

}


executeCommand('dir');
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!