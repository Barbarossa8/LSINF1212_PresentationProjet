
var express = require('express');
var router = express.Router();
var etablissement = require('../models/etablissement.js').etablissement;
var mongoose = require('mongoose');

/* GET profil */
router.get('/', function(req, res, next) {
    res.render('profil', {});
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
