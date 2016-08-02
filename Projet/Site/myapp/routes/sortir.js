
var express = require('express');
var router = express.Router();
var feedback = require('../models/feedback.js').feedback;
var etablissement = require('../models/etablissement.js').etablissement;
var mongoose = require('mongoose');

/* GET sortir */
router.get('/', function(req, res, next) {
	res.redirect('rechercheSortir', {}); // choose smth first
});

router.get('/:nom', function(req, res, next) {
	var nom = req.params.nom;
	etablissement.findOne({nom : nom}, function(err, etab)
	{
		if (err) //error
		{
			console.log(err);
			res.render('rechercheSortir', {});
		}

		if (!etab) //not found
		{
			console.log("Etablissement non trouvé");
			res.render('rechercheSortir', {});
		}

		else //found
		{
			console.log("Etablissement trouvé");
			res.render('sortir',{etablissement : etab });
		}
	});
});

router.post('/', function(req, res, next) 
{
	var current = new feedback({});
	current.nomEta = req.body.nomEta;
	current.note = req.body.note;
	current.commentaire = req.body.commentaire;
	current.pseudo = req.body.pseudo;

	current.save(function(err, sortir) 
	{
		if(err) console.log('error');
		else console.log("Création du feedback réussie" + sortir);
		res.redirect('/sortir');
	});
});

module.exports = router;