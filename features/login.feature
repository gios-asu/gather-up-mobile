Feature: Login

  As a human
  I want to login to the application
  So that I can start collecting sign ins

  Scenario: Email is required in login
    Given I have visited the Home Page.
    When I login with "", "test", "1"
    Then I see the following error: "Email is required"

  Scenario: Password is required in login
    Given I have visited the Home Page.
    When I login with "test@test.com", "", "1"
    Then I see the following error: "Password is required"

  Scenario: Team ID is required in login
    Given I have visited the Home Page.
    When I login with "test@test.com", "test", ""
    Then I see the following error: "Team ID is required"

  Scenario: login with Test Credentials
    Given I have visited the Home Page.
    When I login with "test@test.com", "test", "1"
    Then I see "Start Gathering Sign Ins"