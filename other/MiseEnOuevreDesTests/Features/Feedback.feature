Feature: Feedback
	As a user of the application
	I want to give a feedback of a place that I went
	So that other people can have access to reviews
	And the manager can improve the quality of his establishment

	Scenario Outline: Make a review
		Given that I went to the establishment
			And I <appreciation> the place
		When I put <number> stars 
			And I write a comment
		Then my review appear in the list of reviews 
			And the manager have a notification about it


	Examples:
	|number|appreciation|
	|  0   |hated       |
	|  1   |didn't like |
	|  2   |appreciated |
	|  3   |liked       |
	|  4   |loved       |
	|  5   |loved a lot |
