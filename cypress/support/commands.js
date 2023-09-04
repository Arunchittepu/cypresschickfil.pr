// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//import '@testing-library/cypress/add-commands';
 import './commands'
// Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from failing the test
//   return false
// });
// import calculator from "../PageObject/BasicCalculator";
// const calculators = new calculator ();
// cypress.Commands.add('operation',(firstNumber,secondNumber,operation) =>{
// {
//     // cy.get(txtselectBuild).select('value')
    // cy.get(txtNumber1).clear().type('firstNumber')
    // cy.get(txtNumber2).clear().type('secondNumber')
    // cy.get(txtOperationDropDown).select('operationdrpdwn')
    // cy.get(txtcaluculatebtn).click()
    // cy.get(txtnoAnswerField).should('have.value',3)
//     calculators.firstNumber().clear().type(firstNumber)
//     calculators.secondNumber().clear().type(secondNumber)
//     calculators.operation(operation)
//     calculators.calculateBtn().click()
// }

// }
// )

// cy.fixture('example').then(function (data){
//     this.data=data;
//     cy.log(data.value)
//     cy.log(this.data.value)
  //   })