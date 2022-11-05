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
  "name": "Input zackmobile@gmail.com and zack123",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Inputemailandpassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User success login and navigate to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.Usersuccessloginandnavigatetohomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login with false data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
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
  "name": "User failed login",
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
        "aaaaaaa",
        "zack123"
      ]
    },
    {
      "cells": [
        "zackmobile@gmail.com",
        "..x.xz"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with false data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
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
  "name": "Input aaaaaaa and zack123",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Inputemailandpassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User failed login",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.Userfailedloginandnavigatetohomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with false data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
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
  "name": "Input zackmobile@gmail.com and ..x.xz",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Inputemailandpassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User failed login",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.Userfailedloginandnavigatetohomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login with empty data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag3"
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
  "name": "User failed login",
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
        ""
      ]
    },
    {
      "cells": [
        "",
        "zack123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with empty data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag3"
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
  "name": "Input zackmobile@gmail.com and ",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Inputemailandpassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User failed login",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.Userfailedloginandnavigatetohomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with empty data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag3"
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
  "name": "Input  and zack123",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Inputemailandpassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User failed login",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.Userfailedloginandnavigatetohomepage()"
});
formatter.result({
  "status": "passed"
});
});