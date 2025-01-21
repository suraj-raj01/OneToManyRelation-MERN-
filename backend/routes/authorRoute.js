const express = require("express");
const route = express.Router();
const authorController = require("../controllers/authorController")
route.post("/insert",authorController.insertData);
route.get("/displaydata",authorController.displayData);
route.post("/addbook",authorController.addBook);
route.post("/deleteBook",authorController.deleteBook);
route.post("/editdisplay",authorController.editDisplay);
route.post("/editdatasave",authorController.editdataSave);

module.exports = route;