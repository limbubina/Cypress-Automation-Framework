///<reference types = "cypress"/>
import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/Base_PO";
import Homepage_PO from "../page_objects/Homepage_PO";

//const url = "http://www.webdriveruniversity.com/";

const  basePage = new Base_PO(); //initialising base page
const homePage = new Homepage_PO();  //initialising homepage

Before(() => {
  cy.log("Executing commands inside Homepage steps");
});

Given(`I navigate to the webdriveruniversity homepage`, () => {
  //cy.visit(url);
  //basePage.navigate("");
  //basePage.getPageTitle();
  homePage.navigate("");
});

When(`I click on the contact us button`, () => {
  //cy.get("#contact-us").invoke("removeAttr", "target").click();
  //cy.clickAndOpenLink_InSameTab("#contact-us"); //using the custom command
  homePage.clickOn_ContactUs_button();
});

When(`I click on the Login Portal button`, () => {
  //cy.get("#login-portal").invoke("removeAttr", "target").click();
  homePage.clickOn_Login_button();
});
