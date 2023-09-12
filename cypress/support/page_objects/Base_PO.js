//houses all page objects
//storing common login

///<reference types = "cypress"/>

class Base_PO {
    //baseUrl = "http://www.webdriveruniversity.com/"; already in config.json file under fixture folder

    navigate(path){
        cy.fixture("config.json").then((data) => {
            cy.visit(data.baseUrl + path);
        })
    }

    getPageTitle(){
        return cy.title();
    }
}

export default Base_PO; //always need to be added when using Page objects
