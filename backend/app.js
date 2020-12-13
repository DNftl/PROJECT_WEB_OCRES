var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require('cors')

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var graphLineRouter = require("./routes/graphLine");
var graphPieRouter = require("./routes/graphPie");

var app = express();

//Connexion à la bdd
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/dashboard', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we re connected!")
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/graphLine", graphLineRouter);
app.use("/graphPie", graphPieRouter);


module.exports = app;