///<reference types = "cypress"/>
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

const loginPage = new Login_PO();
let stub;

Given(`I navigate to the webdriveruniversity login page`,()=>{
    loginPage.navigateTo_Login_Page();
})

When(`I type a {string} and a {string}`, (username, password) => {
  loginPage.type_Username(username);
  loginPage.type_Password(password);
});

When(`I click on the login button`, () => {
  //initialise stub
  stub = cy.stub();
  cy.on("window:alert", stub); //Use stub when window alert is fired. Using stub to capture the event
  loginPage.clickOn_Login_Button();
});

//display alert box with message
Then(`I should be presented with an alertbox with text {string}`, (message) => {
  expect(stub).to.be.calledWith(message);

  // cy.on('window:alert',(str)=>{
  // expect(str).to.equal(message)//chai
  // })
});
