
var express = require('express');
var router = express.Router();
var etablissement = require('../models/etablissement.js').etablissement;
var utilisateur = require('../models/utilisateur.js').utilisateur;
var mongoose = require('mongoose');

/* GET profil */
router.get('/', function(req, res, next) {
    var mail;
	utilisateur.findOne({pseudo : req.session.user}, function(err, utilisateur)
	{
		if (err) //error
		{
			console.log(err);
			res.render('/login', {login_error : 0, mdp_error: 0});
			req.session.destroy();
			return res.status(500).send(); //internal error
		}

		if (!utilisateur) //not found
		{
			console.log("Utilisateur non trouvé");
			res.render('/login', {login_error : 0, mdp_error: 0});
			req.session.destroy();
			return res.status(404).send(); // malformed request
		}

		else //found
		{
			console.log("Utilisateur trouvé");
			mail = utilisateur.email;
			res.render('profil', {pseudo:req.session.user, mail:mail});
			return res.status(200).send(); // ok
		}
	});

});

/*  Ajout d'un établissement  */
router.post('/', function(req, res, next) 
{
	var current = new etablissement({});
	current.nom = req.body.nom;
	current.description = req.body.description;
	current.cat = req.body.cat;
	current.horaire = req.body.horaire;
	current.type = req.body.type;

	current.save(function(err, profil) 
	{
		if(err) console.log('error');
		else console.log("Création de l'établissement réussie" + profil);
		res.redirect('/profil');
	});
});

module.exports = router;
