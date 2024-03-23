class aboutUs{
  
    chickfil_Logo(){
        return cy.get('[href="/"]').should('be.visible').click();
    }
    Locations(){
        return cy.findByRole('link', {  name: 'Ubicaciones'}).click();
    }
    checkLocationsUrl(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/locations')
    }
    VisitoneLocation(){
        return cy.findByRole('heading', {  name: 'Ubicaciones'}).should('be.visible');
    }
    visitsobre_nosotros(){
    return cy.get('[title="Sobre nosotros"]').should('be.visible').click();
    }
    sobre_nosotrosUrl(){
        return cy.url().should('eq',Cypress.config().baseUrl  + '/sobre-nosotros')
    }
    checksobre_nosotrosPge(){
    return cy.get('[class="article-details"]').should('be.visible');
    }
    checkImg1(){
        return cy.findByRole('img', {  name: 'Who We Are'}).should('be.visible');
    }
    checkFooter(){
        return cy.findByRole('navigation', {  name: 'footer navigation'}).should('be.visible')
    }

    
}
export default aboutUs;
