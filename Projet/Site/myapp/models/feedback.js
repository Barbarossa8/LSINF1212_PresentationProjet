// Inclusion de Mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Création du schéma pour les feedback
var feedbackSchema = new mongoose.Schema({
	nomEta: String,		//Le nom de l'établissements où il y a la note
    note: String,	//Note du feedback
    description: String,	//sa description
    pseudo: { type : String, match: /^[a-zA-Z0-9-_]+$/ },	//Utilisateur qui l'a postée
    date: { type : Date, default : Date.now }	//La date du post
});

exports.feedback = mongoose.model('feedback', feedbackSchema);