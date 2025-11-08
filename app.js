// Import middleware
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var expressLayouts = require("express-ejs-layouts");

//Import site.js config module
var siteConfig = require("./public/javascripts/site");

//Import routes
var indexRouter = require("./routes/index");
var aboutRouter = require("./routes/about");
var projectRouter = require("./routes/projects");
var contactRouter = require("./routes/contact");

//Import test routes
var usersRouter = require("./routes/users");
var healthRouter = require("./routes/health");

var app = express();

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(expressLayouts);
app.set("layout", "layout");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Site config
app.use(function (req, res, next) {
  res.locals.contacts = siteConfig.contacts;
  res.locals.projects = siteConfig.projects;
  next();
});

// Routes
app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/projects", projectRouter);
app.use("/contact", contactRouter);

app.use("/users", usersRouter);
app.use("/health", healthRouter);

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
