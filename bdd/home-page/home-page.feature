Feature: Home Page
  As a user
  I want to see a list of characters
  So that I can explore the Dragon Ball universe

  Scenario: User views available characters on home page
    Given the user opens the home page
    When the page has finished loading
    Then a list of characters should be displayed
    And the list should not be empty
    And each character should have a name and image
    And the user can navigate to the next page
