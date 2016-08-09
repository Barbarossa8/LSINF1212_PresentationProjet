/*	created by antoniodcb */

// features/step_definitions/Sign_Up.js
var assert = require('assert');

module.exports = function () {

	var user;

	this.Given(/^that I have no account$/, function (callback) {
	  assert(user == undefined); //Utilisateur n'est pas définit
	  callback();
	});

	this.Given(/^I want to use the application$/, function (callback) {
  		callback();
	});

	this.When(/^I give my login, password and my mail$/, function (callback) {
	  user = {pseudo:'JeanJass', password:'Goldman', email:'jean-jass@gmail.com'}
	  callback();
	});

	this.Then(/^I should have an account in the application$/, function (callback) {
	  assert(user !== undefined); //Maintenant il est définit
	  callback();
	});

	this.Then(/^I could start to use all the features with my creditentials$/, function (callback) {
	  callback();
	});
};