var express = require('express');
var router = express.Router();
var etablissements = require('../models/etablissement.js').etablissement;

/* GET rechercheManger */
router.get('/', function(req, res, next) 
{
    etablissements.find({type : 'restaurant'}, function(error, etablissements)
	{
		res.render('rechercheManger', {etablissements : etablissements});
	});
});

module.exports = router;
