const express = require("express");
const app = express();
require("dotenv").config();
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const authorRoute = require("./routes/authorRoute")
const Port = process.env.PORT || 8000;

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Database Connected!!");
})

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use("/author",authorRoute)

app.listen(Port,()=>{
    console.log("Server run on port 8000")
})