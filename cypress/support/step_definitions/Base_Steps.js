//store centralise hooks
//scenarios where we need to perform specific actions before our tests are executes - like clearing local storage

/// <reference types="cypress" />
import {
  When,
  Then,
  Before,
  After,
} from "@badeball/cypress-cucumber-preprocessor";

//executes before each out scenario
Before(() => {
  cy.log("Executes before each scenario/Tests");
  cy.clearLocalStorage();
});

//applying Tags to hook, so that it only runs before the specified tags
Before({ tags: "@smoke" }, () => {
  cy.log("Executes before each scenario/Tests.123");
});

After(() => {
  cy.log("Executes after each scenario/Test");
});

// When("I wait for {int} seconds", (seconds) => {
//   cy.wait(seconds * 1000); //uses milliseconds so multiply by 1000
// });
