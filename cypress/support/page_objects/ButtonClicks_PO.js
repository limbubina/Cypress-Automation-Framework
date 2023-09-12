///<reference types = "cypress"/>

import Base_PO from "./Base_PO";

class ButtonClicks_PO extends Base_PO {
  elements = {
    webElement_Click_Button: () => cy.get("#button1"),
    javaScript_Click_Button: () => cy.get("#button2"),
    actionMove_Click_Button: () => cy.get("#button3")
  };
  navigateTo_ButtonClicks_Page() {
    super.navigate("/Click-Buttons/index.html");
  }
  clickOn_WebElement() {
   this.elements.webElement_Click_Button().click();

  }
  clickOn_JavaScript() {
    javaScript_Click_Button().click();
  }
  clickOn_ActionMove() {
    actionMove_Click_Button().click();
  }
 
}
export default ButtonClicks_PO;
