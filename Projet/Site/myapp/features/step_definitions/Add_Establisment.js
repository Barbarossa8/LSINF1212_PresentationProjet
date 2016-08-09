/*  created by antoniodcb */
// features/step_definitions/Add_establisment.js
var assert = require('assert');

module.exports = function () {

  var etablissement;
  var gerant;

  this.Given(/^that I'm the owner of an establishment$/, function (callback) {
    gerant = {pseudo:'MarcL', password:'LMarc'}; //Les informations de connections
    callback();
  });

  this.Given(/^I want to add my establishment$/, function (callback) {
    assert(gerant !== undefined); //Doit être enregistré et connecté
    callback();
  });

    this.When(/^I give all the informations about my buisness$/, function (callback) {
    etablissement = {nom:'Le grand large', description:'Un restaurant tourné vers la mer proposant une ribambelle de poissons grillés',cat:'restaurant',horraire:'ouvert tout les jours de 13h-22h',type:'gastronome'};
    callback();
  });

  this.Then(/^My establishment is added on the list$/, function (callback) {
    assert(etablissement !== undefined); //On ajoute un etablissement qui est définit

    callback();
  });

  this.Then(/^I could access to the informations about my buisness$/, function (callback) {
   callback();
  });
};