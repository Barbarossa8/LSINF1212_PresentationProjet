var express = require('express');
var router = express.Router();

/* GET rechercheManger. */
router.get('/', function(req, res, next) {
    res.render('rechercheManger', {});
});

module.exports = router;
