 //Syntax for Os module
 
 const os = require('os');

 //Architecture of operating System 32 or 64
 console.log("architecture:"+os.arch());

//Platform of operating System Win or MacOs or Linux
console.log("Platform:"+os.platform());


//Network Interfaces  that have network address
const value =os.networkInterfaces()
console.log(value);

//Returns Array about cpus information
console.log(os.cpus())

//Total Memory in the system
console.log("Total Memory:"+os.totalmem());
//Free Memory in the system
console.log("Free Memory:"+os.freemem());