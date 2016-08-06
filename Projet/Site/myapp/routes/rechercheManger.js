var express = require('express');
var router = express.Router();
var etablissements = require('../models/etablissement.js').etablissement;

/* GET rechercheManger */
router.get('/', function(req, res, next) 
{
	if(!req.session.user){
		res.redirect('login');
		return res.status(401).send();
	}
	var filtre = req.query.filtre;
	if (!filtre) //si pas de filtre -> affiche tout
	{
		etablissements.find({type : 'restaurant'}, function(error, etablissements)
		{
			res.render('rechercheManger', {etablissements : etablissements});
		});
	}
	else //si filtre -> on filtre
		etablissements.find({type : 'restaurant', cat : filtre }, function(error, etablissements)
		{
			res.render('rechercheManger', {etablissements : etablissements});
		});
});

module.exports = router;
