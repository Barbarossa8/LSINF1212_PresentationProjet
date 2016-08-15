/**
 * Created by anton on 12-08-16.
 */
var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/LeRDV');

/* import des modèles */
var user_db = require('./models/utilisateur.js').utilisateur;
var etab_db = require('./models/etablissement.js').etablissement;
var feed_db = require('./models/feedback.js').feedback;

/* Utilisateurs */
var u1 = new user_db({pseudo: 'MarcoPolo' ,email:'marco.polo@gmail.com',password:'mp'});
var u2 = new user_db({pseudo: 'JeanJass' ,email:'jean.jass@gmail.com',password:'jj'});
var u3 = new user_db({pseudo: 'MittRomney' ,email:'mitt.romney@gmail.com',password:'usa'});

/* Etablissements */
    /* Restaurants */
var e1 = new etab_db({nom:'La Galoute',description:'Taverne - restaurant, située dans le centre de Louvain - La - Neuve. Accueil sympa, souriant et chaleureuse. Vaste gamme de plats, à des prix démocratiques et service rapide. Nous mettons un point d\'honneur à la qualité et au service de nos plats et bierès spéciales.',cat:'calme',horaire:'Ouvert du lundi au samedi de 12h à 23h',type:'restaurant'});
var e2 = new etab_db({nom:'Le Rablais',description:'Une Brasserie unique dans son concept culinaire oriental et très cosmopolite, portée par un univers architectural reflétant cette découverte du monde.',cat:'gastronome',horaire:'Ouvert toute la semaine de 12h à 23h sauf le samedi',type:'restaurant'});
var e3 = new etab_db({nom:'Le Piano',description:'Restaurant cotoyé par de nombreux étudiants depuis des dizaines d\'années pour des soupers ou bien juste pour se remplir le ventre avant une bonne soirée',cat:'rapide',horaire:'Ouvert toute la semaine de 12h à 23h sauf le samedi',type:'restaurant'});
var e4 = new etab_db({nom:'Le Cellule Sush',description:'Petit restaurant louvaniste fondé par deux chaleureux étudiants amoureux des sushis',cat:'chaleureux',horaire:'Ouvert de 12h à 14h et le soir de 18h à 21h30 ',type:'restaurant'});
var e5 = new etab_db({nom:'Le Zanzibar',description:'Mini-centrale à hamburger de Louvain-la-Neuve, venez y déguster les meilleurs hamburgers du campus',cat:'rapide',horaire:'ouvert de 12h à 23h',type:'restaurant'});
    /* Bar */
var e6 = new etab_db({nom:'Le Beerbar',description:'Venez y déguster une, deux, trois, quatre... bierre du Pays entouré de bons camarades dans la joie et la bonne humeur.',cat:'musical',horaire:'Ouvert tout les jours de 12h à minuit',type:'bar'});
var e7 = new etab_db({nom:'Le Becketts',description:'Bar se situant à droite du Cinéscope vous offrant divertissement et rafraichissement tout au long de la soirée dans une ambiance tantôt latino et tantôt R&B',cat:'dansant',horaire:'Ouvert tout les jours de 14h à minuit',type:'bar'});
var e8 = new etab_db({nom:'Onlywood',description:'Dégustez seul tel un intrépide ou à plusieurs les giraffes proposées en espérant que vous finirez sur le bar entrain de chanter sans peur',cat:'karaoke',horaire:'Ouvert tout les jours de 11h à minuit',type:'bar'});
var e9 = new etab_db({nom:'Le Brasse-temps',description:'Vous voulez brasser du temps dans un endroit qui brasse? Venez au Brasse-temps ! Une sélection de bierres brassées sur place vous y attend!',cat:'relaxant',horaire:'Ouvert tout les jours de 10h à minuit',type:'bar'});
var e10 = new etab_db({nom:'La Gaudeamus',description:'Venez vous relaxer dans ce bar discret de Louvain-la-Neuve. Un service exemplaire qui dure depuis des décénnies',cat:'relaxant',horaire:'Ouvert tout les jours de 10h à minuit',type:'bar'});
    /* Sortie*/
var e11 = new etab_db({nom:'Casa',description:'Endroit mythique de Louvain où vous pourrez faire de drôles de rencontre en y croisant peut-être un de vos professeurs!',cat:'gratuit',horaire:'Ouvert tout le temps',type:'sortie'});
var e12 = new etab_db({nom:'Le Maska',description:'Vous avez toujours eu envie d\'arriver en soirée pour profiter un maximum sans que les gens vous reconnaissent ? Alors notre établissement vous attends !',cat:'deguise',horaire:'Ouvert tout les week-end de 20H à 23H',type:'sortie'});
var e13 = new etab_db({nom:'Le Bouddha',description:'Soirée calme rythmée par de la chillstep pour se détendre le week-end.',cat:'calme',horaire:'Ouvert tout les week-end de 18H à minuit',type:'sortie'});
var e14 = new etab_db({nom:'Le Mezzo',description:'Boîte de nuit avec soirées à thème où vous pourrez danser au rythme de nos meilleurs DJ.',cat:'groupe',horaire:'Ouvert tout les week-end de 21H à 03H',type:'sortie'});
var e15 = new etab_db({nom:'Le Marschmallow',description:'Venez vous amusez dans des soirées complètement décalées au rythme de Drum n\'Bass jusqu\'au bout de la nuit',cat:'groupe',horaire:'Ouvert de 22h à 5h du matin ',type:'sortie'});


/* Feedback */
    /* Restaurants */
var f1 = new feed_db({ nomEta:'Le Zanzibar', note:'4/5', commentaire:'J\'avais une réunion et je devais vite manger ce petit snack m\'a bien aidé, j\'y retournerai.', pseudo:'MarcoPolo'});
var f2 = new feed_db({ nomEta:'Le Rablais', note:'3/5', commentaire:'Il faut aimer le épicé! L\'ambiance du restaurant est au top!', pseudo:'MittRomney'});
var f3 = new feed_db({ nomEta:'Le Piano', note:'5/5', commentaire:'Le plat que j\'ai le plus mangé sur Louvain? Poulet croustillant sauce fine champagne! Un délice!', pseudo:'MarcoPolo'});
var f4 = new feed_db({ nomEta:'Le Cellule Sush', note:'5/5', commentaire:'Super ambiance, magnifique déco et en plus les sushis sont originaux et bons! Lekker!', pseudo:'JeanDeLaFontaine'});
var f5 = new feed_db({ nomEta:'La Galoute', note:'2/5', commentaire:'Pas trés bon et beaucoup, beaucoup trop cher', pseudo:'JeanJass'});
    /* Bar */
var f6 = new feed_db({ nomEta:'Le Beerbar', note:'4/5', commentaire:'Un jour je les goutterai toutes! Je parle des bierres évidemment!', pseudo:'JeanJass'});
var f7 = new feed_db({ nomEta:'Le Becketts', note:'3/5', commentaire:'Cher pour une bierre mais bonnes terrasses', pseudo:'JeanJass'});
var f8 = new feed_db({ nomEta:'Onlywood', note:'2/5', commentaire:'Aucune ambiance mais très peu cher!', pseudo:'JeanJass'});
var f9 = new feed_db({ nomEta:'Le Brasse-temps', note:'5/5', commentaire:'Bonne Cuvée des Trolls brassée sur place en plus!', pseudo:'Romane'});
var f10 = new feed_db({ nomEta:'Le Gaudeamus', note:'2/5', commentaire:'Renfermé et peu lumineux', pseudo:'JeanJass'});
    /* Sortie */
var f11 = new feed_db({ nomEta:'Le Marschmallow', note:'2/5', commentaire:'Bonne boîte dans l\'ensemble à part quelques videurs trop peu qualifiés d\'après moi.', pseudo:'Pierre'});
var f12 = new feed_db({ nomEta:'Le Maska', note:'4/5', commentaire:'Pleins de bons souvenirs dans cet endroit!', pseudo:'Jean'});
var f13 = new feed_db({ nomEta:'Casa', note:'4/5', commentaire:'Un peu sale mais super!', pseudo:'Marie'});
var f14 = new feed_db({ nomEta:'Le Bouddha', note:'3/5', commentaire:'Super relaxant comme endroit mais les prix sont exhorbitants', pseudo:'Foucaut'});
var f15 = new feed_db({ nomEta:'Le Mezzo', note:'4/5', commentaire:'Super soirée passée au Mezzo avec mes amis!', pseudo:'jojoBernard'});

/* Ajout dans la BDD */
var element_to_add = [u1,u2,u3,e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15];
var count = 1;
for (var i=0 ; i < element_to_add.length ;i++)
{
    element_to_add[i].save(function(err, page){
        if(err) console.log(err);
        console.log("Ajout " + count + " sur "+ element_to_add.length);
        count++;
    });
}

setTimeout(function(){
    throw( "Pas d'erreur, arrêt du script JS" );
}, 5000);
