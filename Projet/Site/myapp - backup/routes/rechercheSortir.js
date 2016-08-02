var express = require('express');
var router = express.Router();
var etablissements = require('../models/etablissement.js').etablissement;

/* GET rechercheSortir. */
router.get('/', function(req, res, next) {
    etablissements.find({type : 'sortie'}, function(error, etablissements)
	{
		res.render('rechercheSortir', {etablissements : etablissements});
	});
});

module.exports = router;
