Feature: Sign up
  As a new user of that application
  I want to sign up
  So that I can access to the application

  Scenario: New account
    Given that I have no account
    And I want to use the application
    When I give my login, password and my mail
    Then I should have an account in the application
    And I could start to use all the features with my creditentials