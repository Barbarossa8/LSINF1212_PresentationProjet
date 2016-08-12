var Feedback_Step = function()
{
	this.givenAppreciation = '';
	this.givenStar = 0;
	this.givenComment='';

	this.Given(/^that I went to the establishment And I (\d+) the place$/, function (appreciation, next) 
	{
		this.givenAppreciation = appreciation;
		next();
	});

	this.When(/^I put (\d+) stars And I write a comment$/, function (number,comment,next) 
	{
		this.givenStar = parseInt(number);
		this.givenComment=comment;
		next();
	});

	this.Then(/^Then my review appear in the list of reviews And the manager have a notification about it$/, function (number, appreciation, next) 
	{
		if(this.givenStar != parseInt(number))
			throw(
				new Error("This test didn't pass, givenStar is " + this.givenStar + " expected "+ parseInt(number)));
		if (this.givenAppreciation != appreciation)
			throw(
				new Error("This test didn't pass, givenAppreciation is " + this.givenAppreciation + "expected "+ appreciation )));
		if (this.givenComment != comment)
			throw(
				new Error("This test didn't pass, givenComment is " + this.givenComment + "expected "+ comment )));
		next();
	});
};

module.exports = Feedback_Step;