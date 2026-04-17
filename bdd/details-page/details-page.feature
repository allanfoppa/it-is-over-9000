Feature: Details Page
  As a user
  I want to see a character details
  So that I can know more about the character

  Scenario: User views a character details
    Given the user opens the details page
    When the page has finished loading
    Then the character details should be displayed
    And the character should have a character attributes
