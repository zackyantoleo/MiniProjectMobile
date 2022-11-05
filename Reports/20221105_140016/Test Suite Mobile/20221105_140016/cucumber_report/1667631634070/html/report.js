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
        "zackmobilegz1@gmail.com",
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
  "name": "User input zack , zackmobilegz1@gmail.com and zack123",
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
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Register new account with empty data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Negative"
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
  "name": "User failed register new account",
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
        "zackmobileee@gmail.com",
        "zack123"
      ]
    },
    {
      "cells": [
        "zack",
        "zackmobileee@gmail.com",
        ""
      ]
    },
    {
      "cells": [
        "zack",
        "",
        "zack123"
      ]
    },
    {
      "cells": [
        "",
        "zackmobileee@gmail.com",
        "zack123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register new account with empty data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Negative"
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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Object Object Repository/Register/android.widget.Button (4) not found\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.doCall(TapKeyword.groovy:79)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.call(TapKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.tap(TapKeyword.groovy:84)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.execute(TapKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.tap(MobileBuiltInKeywords.groovy:1490)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$tap$0.call(Unknown Source)\r\n\tat registersteps.Usertaponregisterlink(registersteps.groovy:48)\r\n\tat ✽.User tap on register link(C:/Users/Athif/git/MiniProjectMobile/Include/features/register.feature:21)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User input zack , zackmobileee@gmail.com and zack123",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.Userinputfullnameemailandpassword(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User failed register new account",
  "keyword": "Then "
});
formatter.match({
  "location": "registersteps.Userfailderegisternewaccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Register new account with empty data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Negative"
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
