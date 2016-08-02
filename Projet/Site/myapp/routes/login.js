
var express = require('express');
var router = express.Router();
var utilisateur = require('../models/utilisateur.js').utilisateur;
var mongoose = require('mongoose');

/* access to login */
router.get('/', function(req, res, next) {
    res.render('login', {login_error: 0, mdp_error: 0});
});

/* connection */
router.post('/', function(req, res, done)
{
    var username = req.body.pseudo;
    var password = req.body.password;
    
	utilisateur.findOne({pseudo : username, password: password}, function(err, utilisateur)
	{
		if (err) //error
        {
			console.log(err);
			res.render('/login', {login_error : 0, mdp_error: 0});
		}

		if (!utilisateur) //not found
		{
			console.log("Echec d'identification");
			res.render('/login', {login_error : 1, mdp_error: 0});
		}

		else //found
		{
			console.log("Connexion réussie");
			req.session.user = username;
			req.session.logged = 1;
			res.redirect('/');
            return res.status(200).send(); // ok
		}
	});
});

module.exports = router;
