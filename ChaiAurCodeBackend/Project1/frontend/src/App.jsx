import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  return (
    <>
      <h1> Connecting a Frontend and Backend</h1>
      <h2> Jokes {jokes.length}</h2>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.id}</h3>
          <h4>{joke.title}</h4>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
