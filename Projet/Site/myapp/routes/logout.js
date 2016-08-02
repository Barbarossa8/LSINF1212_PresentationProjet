var express = require('express');
var router = express.Router();

router.get('/',function (req, res) {
    req.session.destroy();
    res.redirect('login');
    return res.status(200).send();
});

module.exports = router;