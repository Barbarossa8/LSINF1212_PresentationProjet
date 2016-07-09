
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET login */
router.get('/', function(req, res, next) {
    res.render('login', {login_error: 0, mdp_error: 0});
});

router.post('/', function(req, res, done)
{
	utilisateur.findOne({pseudo : req.body.pseudo}, function(error, utilisateur)
	{
		if (error) {
			console.log("Erreur: Pas dans la DB inscrire d'abord");
			res.render('login', {login_error : 1, mdp_error: 0})
		}
		if (!utilisateur)
		{
			console.log("Pseudo incorrect");
			res.render('login', {login_error : 1, mdp_error: 0})
		}
		else if (utilisateur.password !== req.body.password)
		{
			console.log("Mot de passe incorrect");
			res.render('login', {login_error : 0, mdp_error: 1})
		}
		else
		{
			console.log("Connexion réussie");
			req.session.pseudo = utilisateur.pseudo;
			req.session.logged = 1;
			res.redirect('/');
		}
	})
	res.redirect('/login');
});

module.exports = router;
