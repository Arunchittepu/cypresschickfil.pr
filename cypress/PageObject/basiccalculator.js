class calculator{
weblocators={
    txtselectBuild:'#selectBuild',
    txtNumber1:'#number1Field',
    txtNumber2:'#number2Field',
    txtOperationDropDown:'#selectOperationDropdown',
    txtcaluculatebtn:'#calculateButton',
    txtnoAnswerField:'#numberAnswerField',
    txtIntegerCheckBox:'#integerSelect',
    txtClearbtn:'#clearButton',
    txterrorMsg:'#errorMsgField'
}
// calc(){
//     cy.fixture('example').then(function(data){
//         this.data=data;
//         cy.log(data.value)
//         cy.log(this.data.value)
//         cy.get(this.txtselectBuild).select(this.data.value)
//     })

   selectBuild(value) {
   return cy.get(this.weblocators.txtselectBuild).select(value)
    }
    firstNumber(firstNumber) {
    return cy.get(this.weblocators.txtNumber1).clear().type(firstNumber)
    }
    secondNumber(secondNumber){
    return cy.get(this.weblocators.txtNumber2).clear().type(secondNumber)
    }
    operation(operationdrpdwn){
    return cy.get(this.weblocators.txtOperationDropDown).select(operationdrpdwn)
    }
    calculateBtn(){
    return cy.get(this.weblocators.txtcaluculatebtn).click()
    }
    answer(){
    return cy.get(this.weblocators.txtnoAnswerField)
    }
    integerCheckbox(){
    return cy.get(this.weblocators.txtIntegerCheckBox).check()
    }
    clearButton(){
        return cy.get(this.weblocators.txtClearbtn).click()
    }
    errorMsgField(){
        return cy.get(this.weblocators.txterrorMsg).click()
    }
}
 

    // selectBuild(value) {
    //     return cy.get(this.txt).select(value)
    // }
    // firstNumber(Fnumber) {
    //     return cy.get('#number1Field').type(Fnumber)
    // }
    // secondNumber(){
    //     return cy.get('#number2Field')
    // }
    // operation(value){
    //     return cy.get('#selectOperationDropdown').select(value)
    // }
    // calculateBtn(){
    //     return cy.get('#calculateButton')
    // }
    // answer(){
    //     return cy.get('#numberAnswerField')
    // }
    // pageText () {
    //     return cy.get('.col-lg-12 > :nth-child(3)')
    //  }
    
     

export default calculator;