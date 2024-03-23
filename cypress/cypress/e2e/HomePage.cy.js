import homePage from "../POM/HomePage.js";
const ChickfilhomePage = new homePage();
describe('visit Home Page Url', () => {
  before('should visit the chickfil Home page', () => {
    cy.visit('/', { failOnStatusCode: false }); // Cypress will automatically prepend the base URL
  })

  it('Check Logo and Locations Icons are working or not in Home Page', () => {
     ChickfilhomePage.chickfil_Logo();
     ChickfilhomePage.Locations();
     ChickfilhomePage.checkLocationsUrl();
     cy.wait(3000);
     ChickfilhomePage.VisitoneLocation();
     cy.go('back');
    })
  it('Navigate and check Index Icons are working Propely in Home Page', () =>{
    ChickfilhomePage.Visit_Homepage_Url();
     ChickfilhomePage.visitsobre_nosotros();
     ChickfilhomePage.checksobre_nosotrosPge();
     cy.go('back');
     ChickfilhomePage.Visitcomida();
     ChickfilhomePage.checkcomidaUrl();
     ChickfilhomePage.checkinsideMenu();
     cy.go('back');
     ChickfilhomePage.clickOnoportunidades_de_empleo();
     ChickfilhomePage.viewoportunidades_de_empleo_Url();
     ChickfilhomePage.viewInside_oportunidades_de_empleo();
     cy.go('back');
    })
    it('check Home Page cover Image and heading', () =>{
     ChickfilhomePage.Visit_Homepage_Url();
     ChickfilhomePage.mangoPassionImg();
     ChickfilhomePage.checkCoverText();
    })
    it('while cliking on Explore menu weather the page is opening or nor', () =>{
     ChickfilhomePage.Visit_Homepage_Url();
     ChickfilhomePage.ClickOnNuestroMenu();
     ChickfilhomePage.visitExploreMenu();
     ChickfilhomePage.seeMenuchickFil();
     cy.go('back');
     cy.wait(3000);
    })
    it('Check All stories are visible and able to Navigate', () =>{
     ChickfilhomePage.Visit_Homepage_Url();
     ChickfilhomePage.Visit2Img();
     ChickfilhomePage.Visit2ImgURL();
     ChickfilhomePage.check2ImgUrl();
     ChickfilhomePage.InsideMenu();
     cy.go('back');
     ChickfilhomePage.clickonLeemass();
     cy.go('back');
     ChickfilhomePage.Visit3Img();
     ChickfilhomePage.clickOn3Imglink();
     ChickfilhomePage.seeInsideImg3heading();
     cy.go('back');
     ChickfilhomePage.clickon2Leemass();
     cy.go('back');
     ChickfilhomePage.visit4Img();
     ChickfilhomePage.clickon4Img();
     ChickfilhomePage.check4Url();
     ChickfilhomePage.seeInsideImg4heading();
     cy.go('back');
     ChickfilhomePage.clickon3Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visitImg5();
     ChickfilhomePage.visitImg5link();
     ChickfilhomePage.viewImg5heading();
     cy.go('back');
     ChickfilhomePage.clickon4Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visitImg6();
     ChickfilhomePage.visitImg6link();
     ChickfilhomePage.viewImg6heading();
     cy.go('back');
     ChickfilhomePage.clickon5Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visitImg7();
     ChickfilhomePage.clickonImg7link();
     ChickfilhomePage.viewImg7heading();
     cy.go('back');
     ChickfilhomePage.clickon6Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit8Img();
     ChickfilhomePage.clickonImg8link();
     ChickfilhomePage.viewImg8heading();
     cy.go('back');
     ChickfilhomePage.clickon7Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit9Img();
     ChickfilhomePage.clickonImg9link();
     ChickfilhomePage.viewImg9heading();
     cy.go('back');
     ChickfilhomePage.clickon8Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit10Img();
     ChickfilhomePage.clickonImg10link();
     ChickfilhomePage.viewImg10heading();
     cy.go('back');
     ChickfilhomePage.clickon9Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit11Img();
     ChickfilhomePage.clickonImg11link();
     ChickfilhomePage.viewImg11heading();
     cy.go('back');
     ChickfilhomePage.clickon10Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit12Img();
     ChickfilhomePage.clickonImg12link();
     ChickfilhomePage.viewImg12heading();
     cy.wait(3000);
     cy.go('back');
     ChickfilhomePage.clickon11Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit13Img();
     ChickfilhomePage.clickonImg13link();
     ChickfilhomePage.viewImg13heading();
     cy.go('back');
     ChickfilhomePage.clickon12Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit14Img();
     ChickfilhomePage.clickonImg14link();
     ChickfilhomePage.viewImg14heading();
     cy.go('back');
     ChickfilhomePage.clickon13Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit15Img();
     ChickfilhomePage.clickonImg15link();
     ChickfilhomePage.viewImg15heading();
     cy.go('back');
     ChickfilhomePage.clickon14Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit16Img();
     ChickfilhomePage.clickonImg16link();
     ChickfilhomePage.viewImg16heading();
     cy.go('back');
     ChickfilhomePage.clickon15Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit17Img();
     ChickfilhomePage.clickonImg17link();
     ChickfilhomePage.viewImg17heading();
     cy.go('back');
     ChickfilhomePage.clickon16Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit18Img();
     ChickfilhomePage.clickonImg18link();
     ChickfilhomePage.viewImg18heading();
     cy.go('back');
     ChickfilhomePage.clickon17Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit19Img();
     ChickfilhomePage.clickonImg19link();
     ChickfilhomePage.viewImg19heading();
     cy.go('back');
     ChickfilhomePage.clickon18Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit20Img();
     ChickfilhomePage.clickonImg20link();
     ChickfilhomePage.viewImg20heading();
     cy.go('back');
     ChickfilhomePage.clickon19Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit21Img();
     ChickfilhomePage.clickonImg21link();
     ChickfilhomePage.viewImg21heading();
     cy.go('back');
     ChickfilhomePage.clickon20Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit22Img();
     ChickfilhomePage.clickonImg22link();
     ChickfilhomePage.viewImg22heading();
     cy.wait(3000);
     cy.go('back');
     ChickfilhomePage.clickon21Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit23Img();
     ChickfilhomePage.clickonImg23link();
     ChickfilhomePage.viewImg23heading();
     cy.wait(3000);
     cy.go('back');
     ChickfilhomePage.clickon22Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit24Img();
     ChickfilhomePage.clickonImg24link();
     ChickfilhomePage.viewImg24heading();
     cy.go('back');
     ChickfilhomePage.clickon23Leemass();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.visit25Img();
     ChickfilhomePage.clickonImg25link();
     cy.wait(3000);
     ChickfilhomePage.viewImg25heading();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.clickon24Leemass();
     cy.wait(3000);
     cy.go('back');
     ChickfilhomePage.visit26Img();
     ChickfilhomePage.clickonImg26link();
     ChickfilhomePage.viewImg26heading();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.clickon25Leemass();
     cy.wait(3000);
     cy.go('back');
     ChickfilhomePage.visit27Img();
     ChickfilhomePage.clickonImg27link();
     ChickfilhomePage.viewImg27heading();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.clickon26Leemass();
     cy.wait(3000);
     cy.go('back');
     ChickfilhomePage.visit28Img();
     ChickfilhomePage.clickonImg28link();
     ChickfilhomePage.viewImg28heading();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.clickon27Leemass();
     cy.wait(3000);
     cy.go('back');
     ChickfilhomePage.visit29Img();
     ChickfilhomePage.clickonImg29link();
     ChickfilhomePage.viewImg29heading();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.clickon28Leemass();
     cy.wait(3000);
     cy.go('back');
     ChickfilhomePage.visit30Img();
     ChickfilhomePage.clickonImg30link();
     ChickfilhomePage.viewImg30heading();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.clickon29Leemass();
     cy.wait(3000);
     cy.go('back');
     ChickfilhomePage.visit31Img();
     ChickfilhomePage.clickonImg31link();
     ChickfilhomePage.viewImg31heading();
     cy.go('back');
     cy.wait(3000);
     ChickfilhomePage.clickon30Leemass();
     cy.wait(3000);
     cy.go('back');
  })
});