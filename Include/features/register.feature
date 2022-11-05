@tag
Feature: Register
  As a user i want to register new account

  @tag1
  Scenario Outline: Register new account
    Given User navigate to homepage
    When User tap on login button
    And User tap on register link
    And User input <fullname> , <email> and <password>
    Then User success register new account

    Examples: 
      | fullname | email                  | password |
      | zack     | zackmobilegz1@gmail.com | zack123  |

  @Negative
  Scenario Outline: Register new account with empty data
    Given User navigate to homepage
    When User tap on login button
    And User tap on register link
    And User input <fullname> , <email> and <password>
    Then User failed register new account

    Examples: 
      | fullname | email                  | password |
      | zack     | zackmobileee@gmail.com |          |
      | zack     |                        | zack123  |
      |          | zackmobileee@gmail.com | zack123  |
