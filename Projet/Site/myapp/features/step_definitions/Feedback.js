/*  created by antoniodcb */
// features/step_definitions/Feedback.js
var assert = require('assert');

module.exports = function () {

  var user;
  var feedback;
  var etablissement;

  this.Given(/^that I went to the establishment$/, function (callback) {
    etablissement = {nom:'Le grand large', description:'Un restaurant tourné vers la mer proposant une ribambelle de poissons grillés',cat:'restaurant',horraire:'ouvert tout les jours de 13h-22h',type:'gastronome'};
    assert(etablissement !== undefined);
    callback();
  });

  this.Given(/^I'm connected$/, function (callback) {
    user = {pseudo:'MarcL', password:'LMarc'};
    assert(user !== undefined);
    callback();
  });

  this.When(/^I put a certain number of stars$/, function (callback) {
    feedback = {nomEta:etablissement.nom, note:'5', commentaire:'', date:'22-07-16'};
    assert(feedback.note == '5');
    assert(feedback.nomEta == 'Le grand large');
    callback();
  });

  this.When(/^I write a comment$/, function (callback) {
    feedback.commentaire = 'Super cool comme restaurant!';
    callback();
  });

  this.Then(/^my review appear in the list of reviews with the number of stars and my comment$/, function (callback) {
    assert(feedback !== undefined);
    callback();
  });
};