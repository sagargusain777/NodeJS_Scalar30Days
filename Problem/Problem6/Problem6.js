
// Problem: Express Route Handling

// Problem Statement: You are building a web application using Express in Node.js. 
// Create an Express route to handle GET requests to the endpoint "/greet" that takes a query parameter "name" and 
// returns a personalized greeting. 
// If the name parameter is not provided, the default greeting should be "Hello, Guest!".
const express = require('express');
const app =  express();

function greetHandler(request,response){
    const name = request.query.value;
    if(name){
         response.send(`Hello ! ${name}`)

    }
    else{
        response.send(`Hello ! Guest`)
    }
    

    response.send(`Hello ! ${name}`)

}
app.get ('/greet',greetHandler)

//Starting the server
app.listen(3000,()=>console.log("Server is working"))


