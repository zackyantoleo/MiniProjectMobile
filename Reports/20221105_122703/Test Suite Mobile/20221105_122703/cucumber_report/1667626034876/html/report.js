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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: No driver found\r\n\tat com.kms.katalon.core.mobile.helper.MobileScreenCaptor.getAnyAppiumDriver(MobileScreenCaptor.java:82)\r\n\tat com.kms.katalon.core.mobile.helper.MobileScreenCaptor.take(MobileScreenCaptor.java:49)\r\n\tat com.kms.katalon.core.helper.screenshot.ScreenCaptor.takeScreenshotAndGetAttributes(ScreenCaptor.java:37)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.PressBackKeyword.pressBack(PressBackKeyword.groovy:67)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.PressBackKeyword.execute(PressBackKeyword.groovy:62)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.pressBack(MobileBuiltInKeywords.groovy:155)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$pressBack$4.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:120)\r\n\tat registersteps.Usersuccessregisternewaccount(registersteps.groovy:77)\r\n\tat ✽.User success register new account(C:/Users/Athif/git/MiniProjectMobile/Include/features/register.feature:11)\r\n",
  "status": "failed"
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
