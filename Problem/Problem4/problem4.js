

const path = require('path');


function resolvePath(...relativePath) {
    
    const absolutepath = path.resolve(...relativePath);
    console.log(absolutepath);
}
resolvePath('../project/folder/ligmajod',"file.txt");
// Expected Output: Resolved Path: /Users/username/project/folder/file.txt

resolvePath('nonexistent-folder/file.txt');
// Expected Output: Resolved Path: /Users/username/nonexistent-folder/file.txt