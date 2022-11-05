$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Athif/git/MiniProjectMobile/Include/features/register.feature");
formatter.feature({
  "name": "Register",
  "description": "  As a user i want to register new account",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Register new account",
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
  "name": "User tap on register link",
  "keyword": "And "
});
formatter.step({
  "name": "User input \u003cfullname\u003e , \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User success register new account",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fullname",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "zack",
        "zackmobile1e@gmail.com",
        "zack123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register new account",
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
  "name": "User tap on login button",
  "keyword": "When "
});
formatter.match({
  "location": "loginsteps.Usertaponloginbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap on register link",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.Usertaponregisterlink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input zack , zackmobile1e@gmail.com and zack123",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.Userinputfullnameemailandpassword(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User success register new account",
  "keyword": "Then "
});
formatter.match({
  "location": "registersteps.Usersuccessregisternewaccount()"
});
