import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;
const jokes = [
  {
    id: 1,
    title: "first Joke",
    content: "This is the first joke",
  },
  {
    id: 2,
    title: "second Joke",
    content: "This is the second joke",
  },
  {
    id: 3,
    title: "third Joke",
    content: "This is the third joke",
  },
  {
    id: 4,
    title: "fourth Joke",
    content: "This is the fourth joke",
  },
];
app.get("/api/jokes",(req,res)=>{

    res.status(200).json(jokes);
})

app.get("/", (req, res) => {
  res.status(200).server("Server is Ready");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
