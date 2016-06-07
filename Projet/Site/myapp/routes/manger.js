var express = require('express');
var router = express.Router();

/* GET manger */
router.get('/', function(req, res, next) {
    res.render('manger', {});
});

module.exports = router;