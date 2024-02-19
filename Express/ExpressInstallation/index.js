//Importing the express module
const express =require('express')
//This express module will give alot of functions
const app = express();

app.get('/',(request,response)=>{

    response.send("Hey I am working goood")

})
app.get('/about',(request,response)=>{
    response.send("We creat an impact")
})

app.listen(3005,()=>console.log("Hey I am from the server "))

