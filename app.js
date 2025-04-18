const express = require("express");
const app = express();
const path = require("path");
const sweetalert = require("sweetalert");
const mongoose = require("mongoose");

//const Data = require("./models/data.js");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));


 main()
   .then((res) => console.log("connected successfully"))
   .catch((err) => console.log(err));

 async function main() {
   await mongoose.connect("mongodb+srv://amitkumarit28:jmuSuD9T6EvTKkmu@cluster0.epba4nr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
 }

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
})

app.get("/landing-beach",(req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'landing-beach.html'));
})

app.listen(8080,()=>{
    console.log("listing to the port 8080");
})