

const cp = require('child_process')


//Opening command to open calculator
cp.execSync('calc')
//Starting command to open Chrome
cp.execSync('start chrome')
//Starting command to open my twitter
cp.execSync('start chrome "https://twitter.com/V3RTICUSE"')

//Starting command to open my Brave browser
cp.execSync('start Brave')


