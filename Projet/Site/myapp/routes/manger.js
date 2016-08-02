var express = require('express');
var router = express.Router();
var feedback = require('../models/feedback.js').feedback;
var etablissement = require('../models/etablissement.js').etablissement;
var mongoose = require('mongoose');

//RESTE: - mettre les intent
//		 - afficher les commentaires

/* access to manger */
router.get('/', function(req, res, next) {
	res.redirect('rechercheManger', {}); // choose smth first
});

router.get('/:nom', function(req, res, next) {
	var nom = req.params.nom;
	etablissement.findOne({nom : nom}, function(err, etab)
	{
		if (err) //error
		{
			console.log(err);
			res.render('rechercheManger', {});
		}

		if (!etab) //not found
		{
			console.log("Etablissement non trouvé");
			res.render('rechercheManger', {});
		}

		else //found
		{
			console.log("Etablissement trouvé");
			res.render('manger',{etablissement : etab });
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

	current.save(function(err, manger) 
	{
		if(err)
		{
			console.log(err);
			return res.status(500).send(); // internal error
		}
		else 
		{
			console.log("Création du feedback réussie" + manger);
			return res.status(201).send(); //new ressource created
		}
	});
});

module.exports = router;