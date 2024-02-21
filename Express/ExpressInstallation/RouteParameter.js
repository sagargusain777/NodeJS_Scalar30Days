const express = require ('express');
const app = express();


const courses=[
    { id:1 ,name:"Javascript"},
    { id:2 ,name:"Java"},
    { id:3 ,name:"Python"},

];
//Verifying on the basis of id 

app.get('/courses/:courseid',(request,response)=>{
    const courseId = request.params.courseid;
    const parsedCourseId = parseInt(courseId)
    //Finding the correct course in database
    const findCourse = courses.find((course)=>course.id===parsedCourseId);
     response.send(findCourse);
     

    
});
//Verifying on the basis of Coursename
app.get('/courses/:coursename',(request,response)=>{
     const findCourse = courses.find((courseName)=>courseName.name===request.params.coursename);

     response.status(200).send(findCourse);
})


app.listen(3000,()=> console.log("Server is running"))


