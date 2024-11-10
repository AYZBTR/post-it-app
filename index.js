const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4: uuidv4} = require("uuid");


app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "CodeNinja42",
    content: "Just deployed my first full-stack project! The feeling of seeing it live is incredible! 🚀"
  },

  {
    id: uuidv4(),
    username: "StarGazer_99",
    content: "Today's sunset was absolutely breathtaking. Nature's canvas never disappoints. Anyone else catch that amazing orange sky? 🌅✨"
  },

  {
    id: uuidv4(),
    username: "WanderlustPro",
    content: "Backpacking through Europe right now! Currently in Prague - the architecture here is mind-blowing! 🏰 Any must-visit recommendations?"
  },
];

//First api /posts this shows all the posts available!
app.get("/posts", (req, res) => {
  res.render("index.ejs", {posts});
});


//let user to create new posts with the form
app.get("/posts/new", (req,res)=>{
    res.render("new.ejs")
})
app.post("/posts", (req,res)=>{
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content})
    res.redirect("/posts")
})

// displaying posts of users with their id
app.get("/posts/:id", (req,res)=>{
  let {id}= req.params;
  let post = posts.find((p)=> id === p.id);
  
  if (!post){ // if post is not found, post will be undefined
    return res.render("error.ejs")
  }
  res.render("show.ejs", {post})
  
})


app.listen(port, () => {
  console.log("Listening to port : 8080");
});
