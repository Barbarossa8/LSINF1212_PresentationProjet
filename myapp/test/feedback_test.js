var expect = require('chai').expect;
var should = require('should');
var mongoose = require('mongoose');
var feedback_db = require('../models/feedback.js').feedback;
mongoose.connect('mongodb://localhost:27017/Site');


describe('Test on feedback', function () {
	var success;

	beforeEach(function() {
		feedback_test = new feedback_db({
    		nomEta : 'Ritz',
	      	note : '5',
	      	commentaire : 'Un restaurant très chic',
	     	pseudo : 'antoniodcb'
		});
	});

	describe('Add a new feedback',function(){
		it('should be saved on the database',function(){
			feedback_test.save(function(err) {
				if(err){
					success = false;
				}
				else{
					success = true;
				}
				expect(success).to.be.true;
			});
		});
	});

	describe('Search a specific feedback',function(){
		it('should find a existing feedback', function(){
			feedback_db.findOne({pseudo : 'antoniodcb'}, function(err){
				if(err){
					success = false;
				}
				else{
					success = true;
				}
				expect(success).to.be.true;
			});
		});
		it('should find nothing for a not existing feedback', function(){
			feedback_db.findOne({pseudo : 'not_antoniodcb'}, function(err,feed){
				if(!feed){
					success = false;
				}
				else{
					success = true;
				}
				expect(success).to.be.false;
			});
		});
	});

	describe('Remove a specific feedback', function() {
		it('should remove without error', function() {
			feedback_db.remove({pseudo : 'antoniodcb'}, function(err) {
				
				if(err){
					success = false;
				}
				else{
					success = true;
				}
				expect(success).to.be.true;
			});

		});
	});
});