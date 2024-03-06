
import './App.css'
import {useState} from 'react'
function App() {

  const [jokes,setJokes]= useState([]);
  

  return (
    <>
      <h1> Connecting a Frontend and Backend</h1>
      <h2> Jokes {jokes.length}</h2>
      {
        jokes.map((joke,index)=>(
          <div key={index}>
            <h3>joke.id</h3>
            <h4>joke.title</h4>
            <p>joke.content</p>
          </div>
        ))
      }
      
    </>
  )
}

export default App
