// Inclusion de Mongoose
var mongoose = require('mongoose');

// On se connecte à la base de données
// N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
mongoose.connect('mongodb://localhost/Site', function(err){
	if (err) { throw err; }
});


//////////////////////////////
/*	CRÉATION DES SCHÉMAS	*/
//////////////////////////////

// Création du schéma pour les utilisateurs
var utilisateurSchema = new mongoose.Schema({
    pseudo: { type : String, match: /^[a-zA-Z0-9-_]+$/ }	//Juste un pseudo pour le moment
});

// Création du schéma pour les établissements
var etablissementSchema = new mongoose.Schema({
    nom: String,
    description: String,
    cat: String,	//catégories = si resto: calme, rapide, gastronome,...
    horaire: String,
    type: String	//Type si c'est un bar, un restaurant ou une sortie
});

// Création du schéma pour les feedback
var feedbackSchema = new mongoose.Schema({
	nomEta: String,		//Le nom de l'établissements où il y a la note
    note: String,	//Note du feedback
    description: String,	//sa description
    pseudo: { type : String, match: /^[a-zA-Z0-9-_]+$/ },	//Utilisateur qui l'a postée
    date: { type : Date, default : Date.now }	//La date du post
});


//////////////////////////////
/*	CRÉATION DES MODÈLES	*/
//////////////////////////////


// Création du Model pour les utilisateurs
var utilisateurModel = mongoose.model('utilisateur', utilisateurSchema);

// On crée une instance du Model
var uti1 = new utilisateurModel({ pseudo:'Antonio'});
//On pourrait aussi faire: uti1.pseudo = 'Bouli';

// On le sauvegarde dans MongoDB !
uti1.save(function (err) {
	if (err) { throw err; }
	console.log('Utilisateur ajouté avec succès !');
	// On se déconnecte de MongoDB
	//mongoose.connection.close();
});


// Création du Model pour les établissements
var etablissementModel = mongoose.model('etablissements', etablissementSchema);

// On crée une instance du Model
var eta1 = new etablissementModel({ nom:'Manger-moi', description:'Chouette restaurant où on mange de tout', cat:'gastronome', horaire:'Ouvert tout les jours de 12H à 23H', type:'restaurant'});
//On pourrait aussi faire: eta1.description = 'Voila voila';

// On le sauvegarde dans MongoDB !
eta1.save(function (err) {
	if (err) { throw err; }
	console.log('Etablissement ajouté avec succès !');
	// On se déconnecte de MongoDB
	//mongoose.connection.close();
});


// Création du Model pour les feedback
var feedbackModel = mongoose.model('feedback', feedbackSchema);

// On crée une instance du Model
var feed1 = new feedbackModel({ nomEta:'Manger-moi', note:'4/5', description:'Très bon resto je vous le conseil', pseudo:'Antonio'});	//Ici nous laisons la date par défaut qui sera celle du moment où le post a été envoyé
//On pourrait aussi faire: uti1.pseudo = 'Bouli';

// On le sauvegarde dans MongoDB !
feed1.save(function (err) {
	if (err) { throw err; }
	console.log('Feedback ajouté avec succès !');
	// On se déconnecte de MongoDB
	mongoose.connection.close();
});

