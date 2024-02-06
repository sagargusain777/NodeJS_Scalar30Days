//The Path module helps us to work with specific folders and files
//The Path module provides  a way to work with directories and file paths.


const path = require('path');


//Extension of file 
let ext = path.extname('C:\\Users\\verti\\Desktop\\Scalar30DaysNodeJS\\NodeModuleSystem\\example.txt');
console.log(ext);
console.log(path.extname('C:\\verti\\Desktop\\Scalar30DaysNodeJS\\NodeModuleSystem\\02childprocessexample.js'))

//Provides the name of file
//Remember to add backlash not forward slash  Or Use double forward slash
let name = path.basename('C:\\User\\verti\\Desktop\\Scalar30DaysNodeJS\\NodeModuleSystem\\example.txt')
console.log(name);

//Path of actual file you are working
console.log(__filename);
//Provides the directory  of working file
console.log(__dirname);