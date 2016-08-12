// Inclusion de Mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Création du schéma pour les établissements
var etablissementSchema = new mongoose.Schema({
    nom: String,
    description: String,
    cat: String,	//catégories = si resto: calme, rapide, gastronome,...
    horaire: String,
    type: String	//Type si c'est un bar, un restaurant ou une sortie
});

exports.etablissement = mongoose.model('etablissement', etablissementSchema);