require("dotenv").config({ path: "./config.env" });
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const dbo = require("./db/conn");
const mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/recipe");
var usersRouterSearch = require("./routes/search");
const generateData = require("./db/generate-data");

var app = express();

// // perform a database connection when the server starts
// dbo.connectToServer(function (err) {
//   if (err) {
//     console.error(err);
//     process.exit();
//   }
// });
//async
const dbURI =
  "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.60z77iw.mongodb.net/myDB?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/recipe", usersRouter);
app.use("/recipe/edit", usersRouter);
app.use("/search", usersRouterSearch);

module.exports = app;
