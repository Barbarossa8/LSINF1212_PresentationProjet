// Inclusion de Mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Création du schéma pour les utilisateurs
var utilisateurSchema = new Schema({
    pseudo: { type : String, match: /^[a-zA-Z0-9-_]+$/ },
    password: String,
    email: String
});

exports.utilisateur = mongoose.model('utilisateur', utilisateurSchema);