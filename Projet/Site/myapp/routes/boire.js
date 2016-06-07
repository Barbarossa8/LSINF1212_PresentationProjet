var express = require('express');
var router = express.Router();

/* GET boire */
router.get('/', function(req, res, next) {
    res.render('boire', {});
});

module.exports = router;