var express = require('express');
var router = express.Router();
var utilisateur = require('../models/utilisateur.js').utilisateur;
var mongoose = require('mongoose');

/* access to inscription */
router.get('/', function(req, res, next) {
    res.render('inscription', {});
	return res.status(200).send(); // everything is ok
});

/* add new user */
router.post('/', function(req, res, next) 
{
	var newUser = new utilisateur({});	//get informations of the new user
	newUser.pseudo = req.body.pseudo;
	newUser.email = req.body.email;
	newUser.password = req.body.password;

	newUser.save(function(err, inscription) // save it into the db!
	{
		if(err)
		{
			console.log(err); //oh bad news
			return res.status(500).send(); //internal error
		}
		else
		{
			console.log("Création de l'utilisateur réussie" + inscription);
			res.redirect('/');
			return res.status(201).send(); //new ressource created
		}
	});
});


module.exports = router;
