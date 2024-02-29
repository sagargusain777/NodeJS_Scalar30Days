import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;

const userInformation = [{"id":1,"first_name":"Krisha","email":"klaraway0@github.com","gender":"Male"},
{"id":2,"first_name":"Addie","email":"abeakes1@walmart.com","gender":"Female"},
{"id":3,"first_name":"Lidia","email":"lhaldenby2@telegraph.co.uk","gender":"Female"},
{"id":4,"first_name":"Hewet","email":"hfforde3@bluehost.com","gender":"Genderqueer"},
{"id":5,"first_name":"Bessie","email":"bbenaharon4@hao123.com","gender":"Female"},
{"id":6,"first_name":"Lynelle","email":"lcoad5@cbsnews.com","gender":"Female"},
{"id":7,"first_name":"Adrianna","email":"ahanselmann6@ibm.com","gender":"Female"},
{"id":8,"first_name":"Tudor","email":"tneely7@noaa.gov","gender":"Male"},
{"id":9,"first_name":"Abel","email":"ahaughian8@google.ca","gender":"Male"},
{"id":10,"first_name":"Tracie","email":"tjedrzejkiewicz9@comsenz.com","gender":"Female"}]

app.get('/api/user',(request,response)=>{
    response.status(200).json(userInformation)
})

app.get('/api/user/:id',(request,response)=>{
    const userId = parseInt(request.params.id);
    //If user give non numeric value like asdaddasd ,dds ,daddasd
    if(!Number.isInteger(userId)){
        response.status(400).send("Bad Request");
    }
    
    //Finding the user with the given ID

    const userData = userInformation.find((user)=>(user.id ===userId))
    if(!userData){
        response.status(404).send("User Not Found");
    }
    else{
        response.status(200).json(userData);
    }

}
    )


//Creating a express Server
app.listen(PORT,()=>{
    console.log(`Server is Running on PORT ${PORT}`);
})