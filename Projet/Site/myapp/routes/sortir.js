
var express = require('express');
var router = express.Router();
var feedback = require('../models/feedback.js').feedback;
var etablissement = require('../models/etablissement.js').etablissement;
var mongoose = require('mongoose');

/* GET sortir */
router.get('/:nom', function(req, res, next) {
	if(!req.session.user){
		res.redirect('login');
		return res.status(401).send();
	}
	var nom = req.params.nom;
	var current;
	if (!nom)
	{
		res.redirect('rechercheSortir', {}); // choose smth first
	}
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
			current = etab;
		}
	});
	feedback.find({nomEta : nom}, function(err, feed)
	{
		if (err) //error
		{
			console.log(err);
			res.render('rechercheSortir', {});
		}
		else //found
		{
			console.log("Commentaire trouvé");
			res.render('sortir',{etablissement : current, feedback: feed });
		}
	});
});

router.post('/:etablissement', function(req, res, next)
{
	var current = new feedback({});
	current.nomEta = req.params.etablissement;
	current.note = req.body.note;
	current.commentaire = req.body.commentaire;
	current.pseudo = req.session.user;

	current.save(function(err, sortir)
	{
		if(err)
		{
			console.log(err);
			return res.status(500).send(); // internal error
		}
		else
		{
			console.log("Création du feedback réussie" + sortir);
			res.redirect(req.get('referer'));
			return res.status(201).send(); //new ressource created
		}
	});
});


module.exports = router;