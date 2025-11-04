var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("contact", {
    title: "Contact Me",
    Email: "masanzajoshua@gmail.com",
    GitHub: "https://github.com/joshonline",
    LinkedIn: "www.linkedin.com/in/joshua-masanza-49499a1b3",
  });
});

module.exports = router;
