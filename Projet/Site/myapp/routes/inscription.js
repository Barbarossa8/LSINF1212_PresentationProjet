
var express = require('express');
var router = express.Router();

/* GET inscription */
router.get('/', function(req, res, next) {
    res.render('inscription', {});
});

module.exports = router;
