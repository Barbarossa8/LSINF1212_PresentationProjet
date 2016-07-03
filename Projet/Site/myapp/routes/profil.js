
var express = require('express');
var router = express.Router();

/* GET profil */
router.get('/', function(req, res, next) {
    res.render('profil', {});
});

module.exports = router;
