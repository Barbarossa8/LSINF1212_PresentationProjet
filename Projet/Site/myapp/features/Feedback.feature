Feature: Feedback
	As a user of the application
	I want to give a feedback of a place that I went
	So that other people can have access to reviews 
	And the manager can improve the quality of his establishment

	Scenario: Make a review
		Given that I went to the establishment
		And I'm connected
		When I put a certain number of stars 
		And I write a comment
		Then my review appear in the list of reviews with the number of stars and my comment
