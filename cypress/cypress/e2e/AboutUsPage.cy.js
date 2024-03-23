import aboutUs from "../POM/About_us.js";
const ChickfilAboutusPage = new aboutUs();
describe('visit Home Page Url', () => {
  before('should visit the chickfil Home page', () => {
    cy.visit('/', { failOnStatusCode: false }); // Cypress will automatically prepend the base URL
  })

  it('Navigate About us Page', () => {
    ChickfilAboutusPage.visitsobre_nosotros();
    ChickfilAboutusPage.sobre_nosotrosUrl();
    ChickfilAboutusPage.checksobre_nosotrosPge();
     ChickfilAboutusPage.chickfil_Logo();
     ChickfilAboutusPage.Locations();
     ChickfilAboutusPage.checkLocationsUrl();
     cy.wait(3000);
     ChickfilAboutusPage.VisitoneLocation();
     cy.go('back');
     ChickfilAboutusPage.visitsobre_nosotros();
     ChickfilAboutusPage.checkImg1();
     ChickfilAboutusPage.checkFooter();
  })
})