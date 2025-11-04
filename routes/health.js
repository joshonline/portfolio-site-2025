var express = require("express");
var router = express.Router();

/*Health Check*/
router.get("/", function (req, res, next) {
  res.send("App is healthy");
});

module.exports = router;
