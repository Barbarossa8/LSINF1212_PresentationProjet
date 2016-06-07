testcase('I check if the number of stars is correct', 
{
	'I test with two stars' : function()
	{
		assert('2 stars should return 2', feedback(2,"Je n'ai pas énormément aimé l'endroit.").notes === 2);
	},
	'I test with zero stars' : function()
	{
		assert('0 stars should return 0', feedback(0,"Service déplorable et aucune climatisation").notes === 0);
	},
	'I test with four stars' : function()
	{
		assert('4 stars should return 4', feedback(4,"Wunderbar").notes === 4);
	}
})

testcase('I check if the comment is the same', 
{
	'I test for liked' : function()
	{
		assert('liked should return liked', feedback(3,"Bon dressing, bonne ambiance").comment === "Bon dressing, bonne ambiance");
	},
	'I test for loved a lot' : function()
	{
		assert('loved a lot should return loved a lot', feedback(5,"I loved a lot").comment === "I loved a lot");
	},
	"I test for didn't like" : function()
	{
		assert("didn't like should return didn't like", feedback(1,"Service déplorable et aucune climatisation").comment === "Service déplorable et aucune climatisation");
	} 
})

testcase('I try to post some stars without comment', 
{
	'I try with comment=null' : function()
	{
		var message;
		try
		{
			feedback(2,null)
		}			
		catch(Error)
		{
			message = Error;
		}
		assert('post some stars without comment should throw Error', message === 'You have to post some stars AND an comment');
	}
})
