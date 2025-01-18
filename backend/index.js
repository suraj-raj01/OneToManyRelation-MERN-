const express = require("express");
const app = express();
const Port = 8000;
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const authorRoute = require("./routes/authorRoute")

mongoose.connect("mongodb://127.0.0.1:27017/oneToManyRelation").then(()=>{
    console.log("Database Connected!!");
})

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use("/author",authorRoute)

app.listen(Port,()=>{
    console.log("Server run on port 8000")
})