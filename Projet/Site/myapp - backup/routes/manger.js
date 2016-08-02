var express = require('express');
var router = express.Router();
var feedback = require('../models/feedback.js').feedback;
var mongoose = require('mongoose');

//RESTE: - mettre les intent
//		 - afficher les commentaires

/* access to manger */
router.get('/', function(req, res, next) {
    res.render('manger', {});
	return res.status(200).send(); // everything is ok
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