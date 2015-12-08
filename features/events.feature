Feature: Setup Event

  As a logged in user
  I want to create an event
  So that I can start colleting sign ins

  Background:
    Given I initially visit the site
    And I am logged in
    And I am on the dashboard page

  Scenario: Clicking on the Start button takes me to a Event form
    When I click on Start Gathering Sign Ins
    Then I see "Gather Sign Ins"

Feature: Gather Sign In
  
  As a logged in user
  I want to gather sign ins for an event
  So that I can keep track of attendees

  Background:
    Given I initially visit the site
    And I am logged in
    And I am on the dashboard page

  Scenario:
    When I click on Start Gathering Sign Ins
      And I fill out the event form with "My Event Title", "2015-12-03", "12:00 AM", "wow"
    Then I see "Sign In for My Event Title"

  Scenario:
    When I click on Start Gathering Sign Ins
      And I fill out the event form with "My Event Title", "2015-12-03", "12:00 AM", "wow"
    Then I fill out the sign in form with "First", "Last", "email@wow.com", "2015-12-03"
