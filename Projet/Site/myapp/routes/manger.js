var express = require('express');
var router = express.Router();
var feedback = require('../models/feedback.js').feedback;
var etablissement = require('../models/etablissement.js').etablissement;
var mongoose = require('mongoose');


/* GET manger */
router.get('/:nom', function(req, res, next) {
	if(!req.session.user){
		res.redirect('login');
		return res.status(401).send();
	}
	var nom = req.params.nom;
	var current;
	if (!nom) 
	{
		res.redirect('rechercheManger', {}); // choose smth first
	}
	etablissement.findOne({nom : nom}, function(err, etab)
	{
		if (err) //error
		{
			console.log(err);
			res.render('rechercheManger', {});
		}

		if (!etab) //not found
		{
			res.render('rechercheManger', {});
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
			res.render('rechercheManger', {});
		}
		else //found
		{
			res.render('manger',{etablissement : current, feedback: feed });
		}
	});
});


/* POST new commentaire*/
router.post('/:etablissement', function(req, res, next)
{
	var current = new feedback({});	//On recupere les informations
	current.nomEta = req.params.etablissement;
	current.note = req.body.note;
	current.commentaire = req.body.commentaire;
	current.pseudo = req.session.user;

	current.save(function(err, manger) //ajout a la bdd
	{
		if(err)
		{
			console.log(err);
		}
		else 
		{
			console.log("Création du feedback réussie" + manger);
			res.redirect(req.get('referer'));
		}
	});
});

module.exports = router;