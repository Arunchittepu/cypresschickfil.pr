import EmployeeMentOppurtunities from "../POM/Employee_Oppurtunities.js";
const ChickfilEmployee_OppurtunitiesPage = new EmployeeMentOppurtunities();
describe('visit Employment Oppurtunities Page Url', () => {
 
  before('should visit the chickfil Home page', () => {
    cy.visit('/'); // Cypress will automatically prepend the base URL
  })

    it('Navigate EmployeeMent Oppurtunities Page', () => {
    ChickfilEmployee_OppurtunitiesPage.EmployeementOppurtunities();
    ChickfilEmployee_OppurtunitiesPage.viewoportunidades_de_empleo_Url();
    ChickfilEmployee_OppurtunitiesPage.viewInside_oportunidades_de_empleo();
   })
   it('check the Image displayed in page',() =>{
    ChickfilEmployee_OppurtunitiesPage.visitUrl();
    ChickfilEmployee_OppurtunitiesPage.EmployeementOppurtunities();
    ChickfilEmployee_OppurtunitiesPage.EmployeeImg1();
   })
   it('check the Chick fil A Plaza del sol in Employment Oppurtunities page',() =>{
    ChickfilEmployee_OppurtunitiesPage.visitUrl();
    ChickfilEmployee_OppurtunitiesPage.clickonPlaza_Del_Sol();
    cy.wait(5000);
    // ChickfilEmployee_OppurtunitiesPage.CheckPlazzaUrl();
    // ChickfilEmployee_OppurtunitiesPage.checkJobBannerImg();
   })
   it('check the Chick fil A the Filters in Employment Oppurtunities page',() =>{
    ChickfilEmployee_OppurtunitiesPage.visitUrl();
   // cy.go('back');
    ChickfilEmployee_OppurtunitiesPage.ClickOnlossFiltros();
    // ChickfilEmployee_OppurtunitiesPage.checklossFiltrosUrl();
   })
   it('check the Chick fil A Humacao in Employment Oppurtunities page',() =>{
    ChickfilEmployee_OppurtunitiesPage.visitUrl();
    ChickfilEmployee_OppurtunitiesPage.checkHumako();
   })
    it('check the Chick fil A Hatillo in Employment Oppurtunities page',() =>{
    ChickfilEmployee_OppurtunitiesPage.visitUrl();
    ChickfilEmployee_OppurtunitiesPage.CheckHatillo();
    //ChickfilEmployee_OppurtunitiesPage.checkHatilloUrl();
    })
    it('check the Chick fil A Queen of the south in Employment Oppurtunities page',() =>{
    ChickfilEmployee_OppurtunitiesPage.visitUrl();
    ChickfilEmployee_OppurtunitiesPage.check_Reina_del_Sur();
 })
})