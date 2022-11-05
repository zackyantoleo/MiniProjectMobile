@tag
Feature: Logout
  As a user i want to logout after login with my account

  @tag1
  Scenario Outline: Logout from logged in account
    Given User navigate to homepage
    When User already logged in with account 
    And User tap logout button on homepage
    Then User success logout 

    Examples: 
      | email                |password|
      | zackmobile@gmail.com |zack123 |     