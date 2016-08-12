var express = require('express');
var router = express.Router();
var utilisateur = require('../models/utilisateur.js').utilisateur;
var mongoose = require('mongoose');

/* GET login */
router.get('/', function(req, res, next) {
    res.render('login', {login_error: 0, mdp_error: 0});
});

/* POST connection */
router.post('/', function(req, res, done)
{
    var username = req.body.pseudo;
    var password = req.body.password;
    
	utilisateur.findOne({pseudo : username, password: password}, function(err, utilisateur)
	{
		if (err) //error
        {
			console.log(err);
			res.render('login', {login_error : 0, mdp_error: 0});
		}
		if (!utilisateur) //not found
		{
			res.render('login', {login_error : 1, mdp_error: 0});
		}
		else //found
		{
			req.session.user = username;
			req.session.logged = 1;
			res.redirect('/');
		}
	});
});

module.exports = router;
