var express = require('express');
var router = express.Router();
var etablissements = require('../models/etablissement.js').etablissement;
var mongoose = require('mongoose');

/* GET rechercheBoire */
router.get('/', function(req, res, next) 
{
	if(!req.session.user){
		res.redirect('login');
		return res.status(401).send();
	}
	var filtre = req.query.filtre;
	if (!filtre) //si pas de filtre -> affiche tout
	{
		etablissements.find({type : 'bar'}, function(error, etablissements)
		{
			res.render('rechercheBoire', {etablissements : etablissements});
		});
	}
	else //si filtre -> on filtre
		etablissements.find({type : 'bar', cat : filtre }, function(error, etablissements)
		{
			res.render('rechercheBoire', {etablissements : etablissements});
		});
});

module.exports = router;
