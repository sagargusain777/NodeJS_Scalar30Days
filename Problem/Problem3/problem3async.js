
const {exec}= require ('child_process');

function executeCommand(command){


   exec(command,(error,stdout,stderr)=>{

        if(error){
            console.log(`Error : ${error.message}`);

        }
        if(stderr){
            console.log(`Std Error : ${stderr}`)
        }
        console.log(stdout);

    })
}


executeCommand('dir');
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!