class EmployeeMentOppurtunities{

    EmployeementOppurtunities(){
       return cy.get('[href="/oportunidades-de-empleo"]').eq(0).should('be.visible').click()
    }
    visitUrl(){
      cy.visit(Cypress.config().baseUrl  + '/oportunidades-de-empleo')
    }
    viewoportunidades_de_empleo_Url(){
          return cy.url().should('eq',Cypress.config().baseUrl  + '/oportunidades-de-empleo')
        }
    viewInside_oportunidades_de_empleo(){
           return cy.findByRole('heading', { Name: 'Oportunidades de empleo'}).should('be.visible')
        }
    EmployeeImg1(){
       return cy.findByRole('img', { name: 'Yareli' }).should('be.visible')
    }
    clickonPlaza_Del_Sol(){
       return cy.findByRole('link', { name: 'Chick-fil-A Plaza del Sol' }).click()
    }
    CheckPlazzaUrl(){
       return cy.url().should('eq','https://www.careers-page.com/ser-leader-llc')
    }
    checkJobBannerImg(){
       return cy.get("#jobs-banner-img").should('be.visible')
    }
    ClickOnlossFiltros(){
       return cy.findByRole('link', { name: 'Chick-fil-A Los Filtros' }).should('be.visible').click();
    }
    checklossFiltrosUrl(){
       return cy.url().should('eq','https://cfalosfiltros.hrmdirect.com/employment/index.php')
    }
    ImgofLossFiltros(){
       return cy.findByRole('img', { name: 'logo' })
    }
    checkHumako(){
       return cy.findByRole('link', { name: 'Chick-fil-A Humacao' }).should('be.visible').click();
    }
    CompanyReviewofHumaco(){
       return cy.get('[data-testid="cmp-CoverImage"]').should('be.visible');
    }
    checknameofHumako(){
       return cy.get('[class="css-19rjr9w e1wnkr790"]').should('be.visible');
    }
    AboutCompany(){
       return cy.findByRole('heading', { name: 'About the company' }).should('be.visible')
    }
    RestaurantandFoodServices(){
       return cy.findByRole('link', { name: 'Restaurants & Food Service' }).should('be.visible').click();
    }
    HeadingofRestaurantAndFoodServices(){
       return cy.findByRole('heading', { name: 'Restaurants & Food Service Companies' })
    }
    CheckHatillo(){
      cy.get('.content > :nth-child(8) > a').should('be.visible').click();
     // return cy.get("[href=Cypress.config().indeedUrl  + '/Chick--fil--a-Hatillo-Semillas-Del-Olivo']").should('be.visible').click();
      // return cy.findByRole('link', { name: 'Chick-fil-A Hatillo' }).should('be.visible').click();
    }
    checkHatilloUrl(){
       cy.url().should('eq',Cypress.config().indeedUrl  + '/Chick--fil--a-Hatillo-Semillas-Del-Olivo')
    }
    check_Reina_del_Sur(){
       return cy.findByRole('link', { name: 'Chick-fil-A Reina del Sur' }).should('be.visible').click();
    }
    check_Reina_Url(){
       return cy.url().should('eq',Cypress.config().indeedUrl  + '/Todo-Bien-23,-LLC/jobs')
    }
    go_to_next_step(){
       return cy.gt('[data-tn-section="auth-page-header--enter-email"]').should('be.visible')
    }


}

export default EmployeeMentOppurtunities;
