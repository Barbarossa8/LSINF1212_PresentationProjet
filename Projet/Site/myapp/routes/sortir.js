var express = require('express');
var router = express.Router();

/* GET sortir */
router.get('/', function(req, res, next) {
    res.render('sortir', {});
});

module.exports = router;