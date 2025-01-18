const express = require("express");
const route = express.Router();
const authorController = require("../controllers/authorController")
route.post("/insert",authorController.insertData);
route.get("/displaydata",authorController.displayData);
route.post("/addbook",authorController.addBook);

module.exports = route;