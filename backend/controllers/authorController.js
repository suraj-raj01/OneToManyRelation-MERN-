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

module.exports = {
    insertData,
    displayData,
    addBook
}