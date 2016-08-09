
var express = require('express');
var router = express.Router();
var feedback = require('../models/feedback.js').feedback;
var etablissement = require('../models/etablissement.js').etablissement;
var mongoose = require('mongoose');

/* GET boire */
router.get('/:nom', function(req, res, next) {
	if(!req.session.user){
		res.redirect('login');
	}
	var nom = req.params.nom;
	var current;
	if (!nom)
	{
		res.redirect('rechercheBoire', {}); // choose smth first
	}
	etablissement.findOne({nom : nom}, function(err, etab)
	{
		if (err) //error
		{
			console.log(err);
			res.render('rechercheBoire', {});
		}

		if (!etab) //not found
		{
			res.render('rechercheBoire', {});
		}

		else //found
		{
			current = etab;
		}
	});
	feedback.find({nomEta : nom}, function(err, feed)
	{
		if (err) //error
		{
			console.log(err);
			res.render('rechercheBoire', {});
		}
		else //found
		{
			res.render('boire',{etablissement : current, feedback: feed });
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

	current.save(function(err, boire)
	{
		if(err)
		{
			console.log(err);
		}
		else
		{
			console.log("Création du feedback réussie" + boire);
			res.redirect(req.get('referer'));
		}
	});
});


module.exports = router;