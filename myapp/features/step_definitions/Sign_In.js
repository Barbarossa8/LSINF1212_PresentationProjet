/*  created by antoniodcb */
// features/step_definitions/Sign_In.js
var assert = require('assert');

module.exports = function () {

  var user;

  this.Given(/^that I have an account$/, function (callback) {
    callback();
  });

  this.When(/^I give my login and my password$/, function (callback) {
    user = {pseudo:'JeanJass', password:'Goldman', email:'jean-jass@gmail.com'}
    callback();
  });

  this.Then(/^I should access to the application$/, function (callback) {
    assert(user !== undefined);
    callback();
  });

};