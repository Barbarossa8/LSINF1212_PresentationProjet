
var express = require('express');
var router = express.Router();

/* GET rechercheBoire. */
router.get('/', function(req, res, next) {
    res.render('rechercheBoire', {});
});

module.exports = router;
