///<reference types = "cypress"/>

import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO {
    navigateToHomepage(){
        super.navigate("");//uses method stored inside basepage
    }

    clickOn_ContactUs_button(){
        cy.clickAndOpenLink_InSameTab("#contact-us"); //using the custom command
    }

    clickOn_Login_button(){
        cy.clickAndOpenLink_InSameTab("#login-portal"); //using the custom command
    }
}
export default Homepage_PO;