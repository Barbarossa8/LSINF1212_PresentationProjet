
var express = require('express');
var router = express.Router();

/* GET login */
router.get('/', function(req, res, next) {
    res.render('login', {});
});

module.exports = router;
