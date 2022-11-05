$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Athif/git/MiniProjectMobile/Include/features/logout.feature");
formatter.feature({
  "name": "Logout",
  "description": "  As a user i want to logout after login with my account",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Logout from logged in account",
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
  "name": "User already logged in with account",
  "keyword": "When "
});
formatter.step({
  "name": "User tap logout button on homepage",
  "keyword": "And "
});
formatter.step({
  "name": "User success logout",
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
  "name": "Logout from logged in account",
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
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User already logged in with account",
  "keyword": "When "
});
formatter.match({
  "location": "logoutsteps.Useralreadyloggedinwithaccount()"
});
