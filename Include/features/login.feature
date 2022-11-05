	@tag
Feature: Login
  As a user i want to login with my registered account

  @tag1
  Scenario Outline: Login with valid account
    Given User navigate to homepage
    When User tap on login button
    And Input <email> and <password>
    Then User success login and navigate to homepage

    Examples: 
      | email                | password |
      | zackmobile@gmail.com | zack123  |

  @tag2
  Scenario Outline: Login with false data
    Given User navigate to homepage
    When User tap on login button
    And Input <email> and <password>
    Then User failed login

    Examples: 
      | email                | password |
      | aaaaaaa              | zack123  |
      | zackmobile@gmail.com | ..x.xz   |

  @tag3
  Scenario Outline: Login with empty data
    Given User navigate to homepage
    When User tap on login button
    And Input <email> and <password>
    Then User failed login

    Examples: 
      | email                | password |
      | zackmobile@gmail.com |          |
      |                      | zack123  |
