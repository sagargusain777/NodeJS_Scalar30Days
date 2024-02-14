//Importing express since it is a package
const express = require('express')
 
const app = express()

//get ,post ,put,delete

app.get('/',(request,response)=>{
    response.send("Hello From SAGAR")
})

app.get('/about',(request,response)=>{
    response.send("We creat an impact")
})


app.listen(3000,()=>console.log("Port is running on 3000"))