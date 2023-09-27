export class registerPage {
    
    // locators
    weblocators = {
        firstName: "#input-firstname",
        lastName: "#input-lastname",
        email: "#input-email",
        telephone: "#input-telephone",
        password: "#input-password",
        passwordConfirm: "#input-confirm",
        policyCheckbox: "input[type='checkbox']",
        continueBtn: ".btn.btn-primary"
    }

    // methods
    openURL() {
        cy.visit(Cypress.env("URL"));
    }

    enterFirstName(fName) {
        cy.get(this.weblocators.firstName).type(fName);
    }

    enterLastName(lName) {
        cy.get(this.weblocators.lastName).type(lName);
    }

    enterEmail(email) {
        cy.get(this.weblocators.email).type(email);
    }

    enterTelephone(phoneNo) {
        cy.get(this.weblocators.telephone).type(phoneNo);
    }

    enterPassword(password) {
        cy.get(this.weblocators.password).type(password);
        cy.get(this.weblocators.passwordConfirm).type(password);
    }

    selectCheckbox() {
        cy.get(this.weblocators.policyCheckbox).check();
    }

    clickOnContinue() {
        cy.get(this.weblocators.continueBtn).click();
    }
}