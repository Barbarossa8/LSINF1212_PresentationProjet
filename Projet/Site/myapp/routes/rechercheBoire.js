var express = require('express');
var router = express.Router();
var etablissements = require('../models/etablissement.js').etablissement;

/* GET rechercheBoire */
router.get('/', function(req, res, next) 
{
	etablissements.find({type : 'bar'}, function(error, etablissements)
	{
		res.render('rechercheBoire', {etablissements : etablissements});
	});
});

module.exports = router;
