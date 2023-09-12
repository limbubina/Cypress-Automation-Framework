///<reference types = "cypress"/>
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ButtonClicks_PO from "../page_objects/ButtonClicks_PO";

const buttonClickPage = new ButtonClicks_PO();

When(`I click on WebElement Click Me! Button`, () => {
 //initialise stub
        stub = cy.stub();
        cy.on("window:alert", stub); //Use stub when window alert is fired. Using stub to capture the event
        buttonClickPage.clickOn_WebElement();
      
});

//display alert box with message
Then(`I should be presented with a message`,() => {
    expect(stub).to.be.calledWith('Congratulations!');
  });

// When(`I click on JavaScript Click Me! Button`, () => {
//     buttonClickPage.clickOn_JavaScript();
// });
// When(`I click on ActionMove Click Me! Button`, () => {
//     buttonClickPage.clickOn_JavaScript();
// });

