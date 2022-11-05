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
  "status": "passed"
});
formatter.step({
  "name": "User input zack , zackmobileee@gmail.com and zack123",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.Userinputfullnameemailandpassword(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User failed register new account",
  "keyword": "Then "
});
formatter.match({
  "location": "registersteps.Userfailderegisternewaccount()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "User input zack , zackmobileee@gmail.com and ",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.Userinputfullnameemailandpassword(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User failed register new account",
  "keyword": "Then "
});
formatter.match({
  "location": "registersteps.Userfailderegisternewaccount()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "User input zack ,  and zack123",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.Userinputfullnameemailandpassword(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User failed register new account",
  "keyword": "Then "
});
formatter.match({
  "location": "registersteps.Userfailderegisternewaccount()"
});
formatter.result({
  "status": "passed"
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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to start app with application ID: \u0027com.example.frontend_mobile\u0027 (Root cause: java.io.IOException: GetExitCodeProcess error\u003d6, The handle is invalid\r\n\tat com.kms.katalon.core.appium.driver.AppiumDriverManager.isAppiumServerStarted(AppiumDriverManager.java:194)\r\n\tat com.kms.katalon.core.appium.driver.AppiumDriverManager.startAppiumServerJS(AppiumDriverManager.java:258)\r\n\tat com.kms.katalon.core.appium.driver.AppiumDriverManager.startAppiumServerJS(AppiumDriverManager.java:412)\r\n\tat com.kms.katalon.core.appium.driver.AppiumDriverManager.ensureServicesStarted(AppiumDriverManager.java:244)\r\n\tat com.kms.katalon.core.appium.driver.AppiumDriverManager.createMobileDriver(AppiumDriverManager.java:478)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory.startMobileDriver(MobileDriverFactory.java:417)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory$startMobileDriver.call(Unknown Source)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartExistingApplicationKeyword$_startApplication_closure1.doCall(StartExistingApplicationKeyword.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartExistingApplicationKeyword$_startApplication_closure1.doCall(StartExistingApplicationKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartExistingApplicationKeyword.startApplication(StartExistingApplicationKeyword.groovy:43)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartExistingApplicationKeyword.execute(StartExistingApplicationKeyword.groovy:34)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.startExistingApplication(MobileBuiltInKeywords.groovy:113)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$startExistingApplication.call(Unknown Source)\r\n\tat loginsteps.Usernavigatetohomepage(loginsteps.groovy:47)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat Feature Test.run(Feature Test:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:445)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:436)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:415)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:407)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:284)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:144)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1667627710262.run(TempTestSuite1667627710262.groovy:36)\r\n)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartExistingApplicationKeyword.startApplication(StartExistingApplicationKeyword.groovy:43)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartExistingApplicationKeyword.execute(StartExistingApplicationKeyword.groovy:34)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.startExistingApplication(MobileBuiltInKeywords.groovy:113)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$startExistingApplication.call(Unknown Source)\r\n\tat loginsteps.Usernavigatetohomepage(loginsteps.groovy:47)\r\n\tat ✽.User navigate to homepage(C:/Users/Athif/git/MiniProjectMobile/Include/features/register.feature:19)\r\nCaused by: java.io.IOException: GetExitCodeProcess error\u003d6, The handle is invalid\r\n\tat com.kms.katalon.core.appium.driver.AppiumDriverManager.isAppiumServerStarted(AppiumDriverManager.java:194)\r\n\tat com.kms.katalon.core.appium.driver.AppiumDriverManager.startAppiumServerJS(AppiumDriverManager.java:258)\r\n\tat com.kms.katalon.core.appium.driver.AppiumDriverManager.startAppiumServerJS(AppiumDriverManager.java:412)\r\n\tat com.kms.katalon.core.appium.driver.AppiumDriverManager.ensureServicesStarted(AppiumDriverManager.java:244)\r\n\tat com.kms.katalon.core.appium.driver.AppiumDriverManager.createMobileDriver(AppiumDriverManager.java:478)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory.startMobileDriver(MobileDriverFactory.java:417)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory$startMobileDriver.call(Unknown Source)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartExistingApplicationKeyword$_startApplication_closure1.doCall(StartExistingApplicationKeyword.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartExistingApplicationKeyword$_startApplication_closure1.doCall(StartExistingApplicationKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartExistingApplicationKeyword.startApplication(StartExistingApplicationKeyword.groovy:43)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartExistingApplicationKeyword.execute(StartExistingApplicationKeyword.groovy:34)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.startExistingApplication(MobileBuiltInKeywords.groovy:113)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$startExistingApplication.call(Unknown Source)\r\n\tat loginsteps.Usernavigatetohomepage(loginsteps.groovy:47)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat Feature Test.run(Feature Test:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:445)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:436)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:415)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:407)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:284)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:144)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1667627710262.run(TempTestSuite1667627710262.groovy:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User tap on login button",
  "keyword": "When "
});
formatter.match({
  "location": "loginsteps.Usertaponloginbutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap on register link",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.Usertaponregisterlink()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User input  , zackmobileee@gmail.com and zack123",
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
});