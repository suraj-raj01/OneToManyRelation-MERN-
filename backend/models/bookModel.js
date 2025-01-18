const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    booktitle:String ,
    bookprice:Number,
    authorid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"author"
    }
})

module.exports = mongoose.model("book",bookSchema);