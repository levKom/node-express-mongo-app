//
// const PORT = process.env.PORT || 3000;
const express = require("express");
const mongoose = require("mongoose");

const app = express();
//mongodb+srv://komd:1q2w3e4r@cluster0.nisvf.mongodb.net/rest

//ROUTES
app.get("/", (req, res) => {
  res.send("we are on home");
});

app.get("/posts", (req, res) => {
  res.send("we are on posts");
});

//Connect to DB
mongoose.connect("mongodb+srv://komd:1q2w3e4r@cluster0.nisvf.mongodb.net/rest", () => console.log("Connected to DB"));

//listening to the server
app.listen(3000);
