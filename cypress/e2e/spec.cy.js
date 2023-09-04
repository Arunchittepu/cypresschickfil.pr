//   Cypress.on('uncaught:exception', (err, runnable) => {
//    // returning false here prevents Cypress from
//  // failing the test
//    return false
//    })

import calculator from "../PageObject/BasicCalculator";
const cal=new calculator();
import example from "../fixtures/example.json";
describe('template spec', () => {
 
 beforeEach('passes', () => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
    cal.selectBuild(example.addition.value);
    
    // cal.calc();
    // cy.fixture('example').then(function (data){
    // this.data=data;
    // cy.log(data.value)
    // cy.log(this.data.value)
    // })
    // // cy.get('#selectBuild').select('Prototype')
    // cy.get('#number1Field').clear().type(1)
    // cy.get('#number2Field').clear().type(2)
    // cy.get('#selectOperationDropdown').select('Add')
    // cy.get('#calculateButton').click()
    // cy.get('#numberAnswerField').should('have.value',3)
    //cy.get('integerSelect').check()
  })
  it('check url',() => {
    cy.url().should('contains','BasicCalculator')

   });
  it('addition of two Numbers',() =>{
    cal.firstNumber(example.addition.firstNumber)
    cal.secondNumber(example.addition.secondNumber)
    cal.operation(example.addition.operationdrpdwn)
    cal.calculateBtn()
    cal.answer(example.addition.expected)
   })
   
  it('subtraction of two Numbers',() =>{
    cal.firstNumber(example.subtraction.firstNumber)
    cal.secondNumber(example.subtraction.secondNumber)
    cal.operation(example.subtraction.operationdrpdwn)
    cal.calculateBtn()
    cal.answer(example.subtraction.expected)
    })
 
  it('Multiplication of two Numbers',() =>{
      cal.firstNumber(example.Multiplication.firstNumber)
      cal.secondNumber(example.Multiplication.secondNumber)
      cal.operation(example.Multiplication.operationdrpdwn)
      cal.calculateBtn()
      cal.answer(example.Multiplication.expected)
      })


  it('Division of two Numbers',() =>{
      cal.firstNumber(example.Division.firstNumber)
      cal.secondNumber(example.Division.secondNumber)
      cal.operation(example.Division.operationdrpdwn)
      cal.calculateBtn()
      cal.answer(example.Division.expected)
      })
   
  it('Concatination of two Numbers',() =>{
      cal.firstNumber(example.Concatenation.firstNumber)
      cal.secondNumber(example.Concatenation.secondNumber)
      cal.operation(example.Concatenation.operationdrpdwn)
      cal.calculateBtn()
      cal.answer(example.Concatenation.expected)
      })
   

  it('Decimal add of two Numbers',() =>{
      cal.firstNumber(example.Decimal.firstNumber)
      cal.secondNumber(example.Decimal.secondNumber)
      cal.operation(example.Decimal.operationdrpdwn)
      cal.calculateBtn()
      cal.answer(example.Decimal.expected)
      })
    
  it('Add Integer of two Numbers',() =>{
      cal.firstNumber(example.IntegerAdd.firstNumber)
      cal.secondNumber(example.IntegerAdd.secondNumber)
      cal.operation(example.IntegerAdd.operationdrpdwn)
      cal.integerCheckbox()
      cal.calculateBtn()
      cal.answer(example.IntegerAdd.expected)
      })
  it('Add Long Number of two Numbers',() =>{
      cal.firstNumber(example.Long.firstNumber)
      cal.secondNumber(example.Long.secondNumber)
      cal.operation(example.Long.operationdrpdwn)
      cal.calculateBtn()
      cal.answer(example.Long.expected)
      })
  it('Divide by 0',() =>{
      cal.firstNumber(example.errormsge.firstNumber)
      cal.secondNumber(example.errormsge.secondNumber)
      cal.operation(example.errormsge.operationdrpdwn)
      cal.calculateBtn()
      cal.answer(example.errormsge.expected)
    })



//   cal.forEach(cals =>{
//   it(cals.title, () => {
//     cal.firstNumber(cals.firstNumber);
//     cal.secondNumber(cals.secondNumber);
//     cal.operation(cals.operationdrpdwn);
//     cal.calculateBtn();
//     cal.answer()

// if(cals.title === 'addition'){
//     cal.answer().should('have.text', cals.expected)
// }else{
//   cal.answer.errorMessage().should('have.text',cals.expected)
// }
//   })

  // it('text check',()=>{
  //  cy.fixture('example').then((Data)=>{
  //  cal.pageText().should('have.text',Date.text)
  //  })
  //  })
  // it('basic Adddition',()=>{
  //   cy.operation(3,4,"Add")
  //   cal.answer().should('have.value',7)
  //   });
  });