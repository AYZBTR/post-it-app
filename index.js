const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "Aayush001",
    content: "Good Morning!"
  },

  {
    username: "Daabh001",
    content: "Good Afternoon:)"
  },

  {
    username: "XayzbtrX",
    content: "Welcome to Nokia"
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", {posts});
});

app.listen(port, () => {
  console.log("Listening to port : 8080");
});
