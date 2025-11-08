var express = require("express");
var router = express.Router();
var siteConfig = require("../public/javascripts/site")

/*GET contact page.*/
router.get("/", function (req, res, next) {
  res.render("contact", {
    title: "Contact Me",
    contacts: siteConfig.contacts
  });
});

module.exports = router;
