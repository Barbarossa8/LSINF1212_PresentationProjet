
var express = require('express');
var router = express.Router();
var utilisateur = require('../models/utilisateur.js').utilisateur;
var mongoose = require('mongoose');

/* GET inscription */
router.get('/', function(req, res, next) {
    res.render('inscription', {});
});

router.post('/', function(req, res, next) 
{
	var error = 0;
	var current = new utilisateur({});
	current.pseudo = req.body.pseudo;
	current.email = req.body.email;
	current.password = req.body.password;

	current.save(function(err, inscription) 
	{
		if(err) console.log('error');
		else console.log("Création de l'utilisateur réussie" + inscription);
		res.redirect('/');
	});
});


module.exports = router;
