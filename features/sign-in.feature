@watch
Feature: Sign In

  As a human
  I want to sign into the application
  So that I can start collecting sign ins

  Scenario: Email is required in sign in
    Given I have visited the Home Page.
    When I sign in with "", "test", "1"
    Then I see the following error: "Email is required"

  Scenario: Password is required in sign in
    Given I have visited the Home Page.
    When I sign in with "test@test.com", "", "1"
    Then I see the following error: "Password is required"

  Scenario: Team ID is required in sign in
    Given I have visited the Home Page.
    When I sign in with "test@test.com", "test", ""
    Then I see the following error: "Team ID is required"

  Scenario: Sign In with Test Credentials
    Given I have visited the Home Page.
    When I sign in with "test@test.com", "test", "1"
    Then I see "Start Gathering Sign Ins"