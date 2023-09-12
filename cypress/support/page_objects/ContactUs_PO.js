///<reference types = "cypress"/>

import Base_PO from "./Base_PO";

class ContactUs_PO extends Base_PO {
  elements = {
    firstName_Textfield: () => cy.get('[name="first_name"]'),
    lastName_Textfield: () => cy.get('[name="last_name"]'),
    emailAddress_Textfield: () => cy.get('[name="email"]'),
    comment_Textfield: () => cy.get('textarea[name="message"]'),
    submit_button: () => cy.get('[type="submit"]'),
    submission_Header_Text: () => cy.xpath("//h1 | //body")
  };
  navigateTo_ContactUs_Page() {
    super.navigate("/Contact-Us/contactus.html");
  }
  type_firstName(firstName) {
    this.elements.firstName_Textfield().type(firstName);
  }

  type_lastName(lastName) {
    this.elements.lastName_Textfield().type(lastName);
  }

  type_emailAddress(emailAddress) {
    this.elements.emailAddress_Textfield().type(emailAddress);
  }

  type_comment(comment) {
    this.elements.comment_Textfield().type(comment);
  }

  clickOn_submit_Button() {
    this.elements.submit_button().click();
  }

  validate_Submission_Header(expectedText){
    this.elements.submission_Header_Text().contains(expectedText);//validate expected text
    //this.elements.submission_Header_Text().invoke('text').should('include', expectedText); //does the same thing as above

  }
}
export default ContactUs_PO;
