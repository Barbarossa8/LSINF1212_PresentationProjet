var express = require('express');
var router = express.Router();
var etablissements = require('../models/etablissement.js').etablissement;

/* GET rechercheSortir. */
router.get('/', function(req, res, next) {

	if(!req.session.user){
		res.redirect('login');
	}
	var filtre = req.query.filtre;
	if (!filtre) //si pas de filtre -> affiche tout
	{
		etablissements.find({type : 'sortie'}, function(error, etablissements)
		{
			res.render('rechercheSortir', {etablissements : etablissements});
		});
	}
	else //si filtre -> on filtre
		etablissements.find({type : 'sortie', cat : filtre}, function(error, etablissements)
		{
			res.render('rechercheSortir', {etablissements : etablissements});
		});
});

module.exports = router;
