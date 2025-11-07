var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("about", { page_title: "About Me" });
});

module.exports = router;
