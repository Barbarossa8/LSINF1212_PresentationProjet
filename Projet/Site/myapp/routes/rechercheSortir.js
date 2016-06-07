var express = require('express');
var router = express.Router();

/* GET rechercheSortir. */
router.get('/', function(req, res, next) {
    res.render('rechercheSortir', {});
});

module.exports = router;
