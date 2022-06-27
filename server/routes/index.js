var express = require("express");
var router = express.Router();
const dbo = require("../db/conn");
const mongoose = require("mongoose");
const generateData = require("../db/generate-data");
/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("index.js");
  mongoose.connect("mongodb://localhost:27017/sandbox");
  generateData();
  // res.render("index", { title: "Express11" });
  res.send("recipe");
});

module.exports = router;
