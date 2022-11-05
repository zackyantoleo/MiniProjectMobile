$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Athif/git/MiniProjectMobile/Include/features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "  As a user i want to login with my registered account",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login with valid account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User navigate to homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "User tap on login button",
  "keyword": "When "
});
formatter.step({
  "name": "Input \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User success login and navigate to homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "zackmobile@gmail.com",
        "zack123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with valid account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User navigate to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "loginsteps.Usernavigatetohomepage()"
});
