@watch
Feature: Logout

  As a logged in user
  I want to logout of the application
  So that I can make sure my data is secure

  Scenario: Log out should take me to the sign in page
    Given I am logged in and on the Dashboard page.
    When I click on Logout
    Then I see "Sign In"
