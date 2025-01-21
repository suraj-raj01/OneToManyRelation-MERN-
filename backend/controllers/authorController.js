const AuthorModel = require("../models/authorModel");
const BookModel = require("../models/bookModel");
const insertData = async (req, res) => {
    const { authorname, booktitle, bookprice } = req.body;
    try {
        const authorData = await AuthorModel.create({
            authorname: authorname
        })

        const bookData = await BookModel.create({
            booktitle: booktitle,
            bookprice: bookprice,
            authorid: authorData._id
        })

        await AuthorModel.findByIdAndUpdate(authorData._id, { $push: { books: bookData._id } });

    } catch (error) {
        res.status(400).send({ msg: "something went wrong!!" });
    }
}

const displayData = async (req, res) => {
    try {
        const Data = await AuthorModel.find().populate("books");
        res.status(200).send(Data);
    } catch (error) {
        res.status(400).send({ msg: "something went wrong!!" })
    }
}

const addBook = async (req, res) => {
    const { id, booktitle, bookprice } = req.body;
    const Book = await BookModel.create({
        booktitle: booktitle,
        bookprice: bookprice,
        authorid: id

    })
    await AuthorModel.findByIdAndUpdate(id, { $push: { books: Book._id } });
    res.send("OK");
}

const deleteBook = async(req,res)=>{
    const {id} = req.body;
    console.log(id);
    try {
        await BookModel.findByIdAndDelete(id);
        res.status(200).send({msg:"data delete success!!!"});
    } catch (error) {
        res.status(400).send({msg:"somethig went wrong!!!"});
    }
}

const editDisplay=async(req,res)=>{
    let {id} =  req.body;
    try {
        const Data = await BookModel.findById(id);
        console.log(Data);
        res.status(200).send(Data);
    } catch (error) {
        res.status(400).send({msg:"something went wrong!!"});
    }
}

const editdataSave=async(req,res)=>{
    const {id,booktitle,bookprice}= req.body;
    try {

        await BookModel.findByIdAndUpdate(id,{
            booktitle:booktitle,
            bookprice:bookprice
        });
        res.status(200).send({msg:"data update success!!"});
    } catch (error) {
        res.error(400).send({msg:"something went wrong!!"});
    }
}

module.exports = {
    insertData,
    displayData,
    addBook,
    deleteBook,
    editDisplay,
    editdataSave
}