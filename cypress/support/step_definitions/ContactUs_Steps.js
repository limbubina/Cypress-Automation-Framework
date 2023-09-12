///<reference types = "cypress"/>
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactUs_PO from "../page_objects/ContactUs_PO";

const contactUsPage = new ContactUs_PO();

When(`I type a first name`, () => {
  contactUsPage.type_firstName("Joe");
});

When(`I type a last name`, () => {
  contactUsPage.type_lastName("Doe");
});

When(`I enter an email address`, () => {
  contactUsPage.type_emailAddress("Joe@test.com");
});

When(`I type a comment`, () => {
  contactUsPage.type_comment("Test comment Practice");
});

When(`I click on the Submit button`, () => {
  contactUsPage.clickOn_submit_Button();
});

Then(`I should be presented with a successful contact us submission message`,() => {
    //cy.get('h1').should('have.text','Thank You for your Message!');
   contactUsPage.validate_Submission_Header('Thank You for your Message!');

});

Then(`I should be presented with an unsuccessful contact us submission message`,() => {
    //cy.get('body').contains('Error: Invalid email address');
    contactUsPage.validate_Submission_Header('Error: Invalid email address');
});

//Dynamic
When("I type a specific first name {string}", (firstName) => {
  //cy.get('[name="first_name"]').type(firstName);
  contactUsPage.type_firstName(firstName);
});

When("I type a specific last name {string}", (lastName) => {
  contactUsPage.type_lastName(lastName);
});

When("I type a specific email address {string}", (emailAddress) => {
  contactUsPage.type_emailAddress(emailAddress);
});

//Specific keyword scenario
When("I type a specific word {string} and number {int} within the comment input field", (word, number) => {
    //cy.get('textarea[name="message"]').type(word + " " + number);
    contactUsPage.type_comment(word + " " + number);
  }
);

When("I type a first name {word} and a last name {string}", (firstName, lastName) => {
    // cy.get('[name="first_name"]').type(firstName);
    // cy.get('[name="last_name"]').type(lastName);
    contactUsPage.type_firstName(firstName);
    contactUsPage.type_lastName(lastName);
  }
);

When("I enter an email address {string} and a comment {string}", (emailAddress, comment) => {
    // cy.get('[name="email"]').type(emailAddress);
    // cy.get('textarea[name="message"]').type(comment);
    contactUsPage.type_emailAddress(emailAddress);
    contactUsPage.type_comment(comment)
  }
);

Then("I should be presented with header text {string}", (message) => {
  //cy.xpath("//h1 | //body").contains(message);
  contactUsPage.validate_Submission_Header(message);
});
