$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BankManager.feature");
formatter.feature({
  "line": 2,
  "name": "Bank manager should add customer successfully and open account successfully.",
  "description": "",
  "id": "bank-manager-should-add-customer-successfully-and-open-account-successfully.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BankManagerAddCustomer"
    }
  ]
});
formatter.before({
  "duration": 7583776000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Bank manager should login and add customer successfully",
  "description": "",
  "id": "bank-manager-should-add-customer-successfully-and-open-account-successfully.;bank-manager-should-login-and-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter firstame \u003c\"BK\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enter lastname \u003c\"Patel\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter postcode \u003c\"HA0 3EH\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should see customer added successfully message",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should accept alert",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 624873300,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 364170900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 388849000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BK",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterFirstame(String)"
});
formatter.result({
  "duration": 666647700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterLastname(String)"
});
formatter.result({
  "duration": 129852100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA0 3EH",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterPostcode(String)"
});
formatter.result({
  "duration": 116839700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 79359600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userShouldSeeCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 18900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userShouldAcceptAlert()"
});
formatter.result({
  "duration": 34327200,
  "status": "passed"
});
formatter.after({
  "duration": 830449900,
  "status": "passed"
});
formatter.before({
  "duration": 4148553800,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Customer should login and logout successfully",
  "description": "",
  "id": "bank-manager-should-add-customer-successfully-and-open-account-successfully.;customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@Sanity,"
    },
    {
      "line": 35,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enter firstame \u003c\"James\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enter lastname \u003c\"Bond\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User enter postcode \u003c\"SU38UN\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User should see customer added successfully message",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User should accept alert",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User click on home button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User clicks on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "User search for customer from dropdown \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User should see logout button and logout successfully\u003c\"James Bond\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 20300,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 713838000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 482896100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterFirstame(String)"
});
formatter.result({
  "duration": 415005600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bond",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterLastname(String)"
});
formatter.result({
  "duration": 116992300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SU38UN",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterPostcode(String)"
});
formatter.result({
  "duration": 139121200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 97624000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userShouldSeeCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 16600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userShouldAcceptAlert()"
});
formatter.result({
  "duration": 43760300,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnHomeButton()"
});
formatter.result({
  "duration": 101833400,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClicksOnCustomerLoginTab()"
});
formatter.result({
  "duration": 77877300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 41
    }
  ],
  "location": "CustomerActions.userSearchForCustomerFromDropdown(String)"
});
formatter.result({
  "duration": 629658800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnLoginButton()"
});
formatter.result({
  "duration": 78659400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James Bond",
      "offset": 55
    }
  ],
  "location": "CustomerActions.userShouldSeeLogoutButtonAndLogoutSuccessfully(String)"
});
formatter.result({
  "duration": 444365000,
  "status": "passed"
});
formatter.after({
  "duration": 761567400,
  "status": "passed"
});
formatter.before({
  "duration": 4641927800,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Customer should deposit money successfully",
  "description": "",
  "id": "bank-manager-should-add-customer-successfully-and-open-account-successfully.;customer-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "Given User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User enter firstame \u003c\"James\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User enter lastname \u003c\"Bond\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User enter postcode \u003c\"SU38UN\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User should see customer added successfully message",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User should accept alert",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User click on home button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User clicks on open account tab",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User select customer search \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User select currency \u003c\"pound\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User should see customer account details \u003c\"Account created successfully with account Number :1016\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "User click on home button",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "User clicks on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "User search for customer from dropdown \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User click on deposit money tab",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User enter amount \u003c\"100\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User click on deposit amount button",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User should see money deposited successfully message",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerActions.givenUserIsOnHomepage()"
});
formatter.result({
  "duration": 40700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 458861500,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 380511900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterFirstame(String)"
});
formatter.result({
  "duration": 410997000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bond",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterLastname(String)"
});
formatter.result({
  "duration": 276447300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SU38UN",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterPostcode(String)"
});
formatter.result({
  "duration": 126694200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 101733100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userShouldSeeCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 23600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userShouldAcceptAlert()"
});
formatter.result({
  "duration": 16545000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnHomeButton()"
});
formatter.result({
  "duration": 131580400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 71044700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClicksOnOpenAccountTab()"
});
formatter.result({
  "duration": 67880200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 30
    }
  ],
  "location": "BankManagerSteps.userSelectCustomerSearch(String)"
});
formatter.result({
  "duration": 592510500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pound",
      "offset": 23
    }
  ],
  "location": "BankManagerSteps.userSelectCurrency(String)"
});
formatter.result({
  "duration": 221039800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnProcessButton()"
});
formatter.result({
  "duration": 75446500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully with account Number :1016",
      "offset": 43
    }
  ],
  "location": "BankManagerSteps.userShouldSeeCustomerAccountDetails(String)"
});
formatter.result({
  "duration": 15883900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnHomeButton()"
});
formatter.result({
  "duration": 59205500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClicksOnCustomerLoginTab()"
});
formatter.result({
  "duration": 61045100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 41
    }
  ],
  "location": "CustomerActions.userSearchForCustomerFromDropdown(String)"
});
formatter.result({
  "duration": 525719700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnLoginButton()"
});
formatter.result({
  "duration": 78041600,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnDepositMoneyTab()"
});
formatter.result({
  "duration": 368657400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 20
    }
  ],
  "location": "CustomerActions.userEnterAmount(String)"
});
formatter.result({
  "duration": 357333800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnDepositAmountButton()"
});
formatter.result({
  "duration": 70617600,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userShouldSeeMoneyDepositedSuccessfullyMessage()"
});
formatter.result({
  "duration": 40568300,
  "status": "passed"
});
formatter.after({
  "duration": 821344600,
  "status": "passed"
});
formatter.before({
  "duration": 4388068300,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Customer should withdraw money successfully",
  "description": "",
  "id": "bank-manager-should-add-customer-successfully-and-open-account-successfully.;customer-should-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 79,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "Given User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "User click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "User enter firstame \u003c\"James\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "User enter lastname \u003c\"Bond\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User enter postcode \u003c\"SU38UN\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "User should see customer added successfully message",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "User should accept alert",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "User click on home button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User clicks on open account tab",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User select customer search \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User select currency \u003c\"pound\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User should see customer account details \u003c\"Account created successfully with account Number :1016\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "User click on home button",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "User clicks on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "User search for customer from dropdown \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "User click on deposit money tab",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "User enter amount \u003c\"100\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "User click on deposit amount button",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "User should see money deposited successfully message",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "User should click on withdrawal tab",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "User enter withdraw amount \u003c\"50\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User click on withdraw button",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User should see withdrawal successful message",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerActions.givenUserIsOnHomepage()"
});
formatter.result({
  "duration": 26600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 666220800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 350595600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterFirstame(String)"
});
formatter.result({
  "duration": 582548400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bond",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterLastname(String)"
});
formatter.result({
  "duration": 180390400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SU38UN",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterPostcode(String)"
});
formatter.result({
  "duration": 123119500,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 87668600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userShouldSeeCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 27800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userShouldAcceptAlert()"
});
formatter.result({
  "duration": 35346600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnHomeButton()"
});
formatter.result({
  "duration": 107528500,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 69630600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClicksOnOpenAccountTab()"
});
formatter.result({
  "duration": 96115400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 30
    }
  ],
  "location": "BankManagerSteps.userSelectCustomerSearch(String)"
});
formatter.result({
  "duration": 516104500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pound",
      "offset": 23
    }
  ],
  "location": "BankManagerSteps.userSelectCurrency(String)"
});
formatter.result({
  "duration": 293863000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnProcessButton()"
});
formatter.result({
  "duration": 113846300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully with account Number :1016",
      "offset": 43
    }
  ],
  "location": "BankManagerSteps.userShouldSeeCustomerAccountDetails(String)"
});
formatter.result({
  "duration": 14906100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnHomeButton()"
});
formatter.result({
  "duration": 87512200,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClicksOnCustomerLoginTab()"
});
formatter.result({
  "duration": 89725800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 41
    }
  ],
  "location": "CustomerActions.userSearchForCustomerFromDropdown(String)"
});
formatter.result({
  "duration": 519565400,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnLoginButton()"
});
formatter.result({
  "duration": 69861700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnDepositMoneyTab()"
});
formatter.result({
  "duration": 407427000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 20
    }
  ],
  "location": "CustomerActions.userEnterAmount(String)"
});
formatter.result({
  "duration": 364651700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnDepositAmountButton()"
});
formatter.result({
  "duration": 80894400,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userShouldSeeMoneyDepositedSuccessfullyMessage()"
});
formatter.result({
  "duration": 39492100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userShouldClickOnWithdrawalTab()"
});
formatter.result({
  "duration": 77329600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 29
    }
  ],
  "location": "CustomerActions.userEnterWithdrawAmount(String)"
});
formatter.result({
  "duration": 2104003100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnWithdrawButton()"
});
formatter.result({
  "duration": 241321500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userShouldSeeWithdrawalSuccessfulMessage()"
});
formatter.result({
  "duration": 43067000,
  "status": "passed"
});
formatter.after({
  "duration": 751063500,
  "status": "passed"
});
});