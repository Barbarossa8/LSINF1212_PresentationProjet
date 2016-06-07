Feature: Invitation
  As a user of the application
  I want to invite friends
  So that I can see them in a particular place

  Scenario: Invite a friend
    Given that I want to see my friends
    	And I chose an establishment 
    When I invite a friend to that place
    Then I should see the list of my friends
    	And I could chose who I want to send invitation
    Then my friend have a notification of invitation


