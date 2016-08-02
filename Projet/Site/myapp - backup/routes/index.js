var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  if(!req.session.user){
    res.redirect('login');
    return res.status(401).send();
  }
  else 
  {
    res.render('index', {});
  }
});

module.exports = router;