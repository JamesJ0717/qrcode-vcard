var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.use(logger("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var vcardsjs = require("vcards-js");

/* GET home page. */
app.get("/", function (req, res, next) {
  var vCard = vcardsjs();
  vCard.firstName = "James";
  vCard.lastName = "Johnson";
  vCard.cellPhone = "631-495-0416";
  vCard.email = "james@jamesjohnson.io";
  vCard.url = "https://www.jamesjohnson.io";

  res.set("Content-Type", 'text/vcard; name="jjohnson.vcf"');
  res.set("Content-Disposition", 'inline; filename="jjohnson.vcf"');
  res.send(vCard.getFormattedString());
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
