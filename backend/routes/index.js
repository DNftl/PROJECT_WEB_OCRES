var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("Affichage de la base de données");
});

module.exports = router;
