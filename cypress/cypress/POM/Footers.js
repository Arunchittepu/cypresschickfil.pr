class Footers{

    Navigate_to_Atencion_al_cliente(){
        cy.findByText('Atención al cliente').eq(0).should('be.visible').click();
    }
    check_contact_Support(){
        cy.visit(Cypress.config().baseUrl  + '/contact-support')
    }
    check_Contact_Support_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/contact-support')
    }
    Heading_of_Atencion_al_cliente(){
        cy.findByRole('heading', { name: 'Atención al cliente' }).should('be.visible');
    }
    Plaza_del_Sol_Help_Mail_Id(){
        cy.findByRole('link', { name: 'PlazadelSolAyuda@chick-fil-a.pr' }).should('be.visible');
    }
    Los_Filtros_Mail_Id(){
        cy.findByRole('link', { name: 'LosFiltrosAyuda@chick-fil-a.pr' }).should('be.visible');
    }
    Humacao_Mail_Id(){
        cy.findByRole('link', { name: 'HumacaoAyuda@chick-fil-a.pr' }).should('be.visible');
    }
    Lee_nuestras_preguntas_frecuentes(){
        cy.findByRole('heading', { name: 'Lee nuestras preguntas frecuentes' }).should('be.visible');
    }
    Quiénes_somos(){
        cy.findByRole('link', { name: '¿Quiénes somos?' }).should('be.visible').click();
    }
    What_is_Chick_fil_A(){
      // cy.get("[href= Cypress.config('baseUrl')  + '/sobre-nosotros']").should('be.visible').click();
      cy.xpath("//a[contains(text(),'aquí')]").eq(0).should('be.visible').click();


    }
    sobre_nosotros(){
       cy.url().should('eq',Cypress.config().baseUrl  + '/sobre-nosotros')
    }
    Locations_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/ubicaciones')
    }
    check_Hatillo_location(){
        cy.get('[href="/locations/pr/hatillo"]').should('be.visible');
    }
    Hatillo_Restaurant_Menu(){
        cy.get('[href="/locations/pr/hatillo/menu"]').should('be.visible').click();
    }
    check_Hatillo_Menu_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/locations/pr/hatillo/menu')
    }
    Hatillo_Restaurant_location_Directions(){
        cy.get('[href="https://www.google.com/maps/dir/Current+Location/18.48362,-66.76924"]').should('be.visible').click();
    }
    Request_donation(){
        cy.xpath("//a[contains(text(),'aquí')]").eq(1).should('be.visible').click({force: true});
    }
    Privacy_Policy_Mail_Id(){
        cy.findByRole('link', { name: 'privacy.puertorico@chick-fil-a.com' }).should('be.visible');
    }
    Privacy_Policy_link(){
        cy.findByRole('link', { name: 'Política de Privacidad' }).should('be.visible').click();
    }
    check_Legal(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/legal')
    }
    Legal_question1(){
        cy.get('[data-layer-heading="Política de cookies y publicidad basada en intereses de Chick-fil-A"]').should('be.visible').click();
    }
    Legal_question2(){
        cy.findByText('¿Qué son las cookies?').should('be.visible').click();
    }
    Legal_question3(){
        cy.findByText('¿Utilizamos cookies en nuestro Sitio?').should('be.visible').click();
    }
    Legal_question4(){
        cy.findByText('¿Qué tipos de cookies utilizamos en nuestro Sitio?').should('be.visible').click();
    }
    Legal_question5(){
        cy.findByRole('button', { name: '¿Cómo utilizan nuestros socios publicitarios y de marketing las cookies para la publicidad basada en intereses?' }).should('be.visible').click();
    }
    Legal_question6(){
        cy.findByText('¿Cómo puedo optar por no recibir publicidad basada en intereses?').should('be.visible').click();
    }
    Legal_question7(){
        cy.findByText('¿Cómo desactivo o elimino las cookies de mi navegador?').should('be.visible').click();
    }
    Legal_question8(){
        cy.findByText('¿Cómo desactivo o elimino las cookies de mi navegador?').should('be.visible').click();
    }
    Legal_question9(){
        cy.findByRole('button', { name: '¿Qué puedo hacer si tengo una pregunta sobre la política de cookies de Chick-fil-A?' }).should('be.visible').click();
    }
    Legal_question10(){
        cy.findByText('Términos y Condiciones').should('be.visible').click();
    }
    Legal_question11(){
        cy.findByText('Política de privacidad de Chick-fil-A').should('be.visible').click();
    }
    Nuestras_comidas(){
        cy.get('a[href="#our_food"]').scrollIntoView().click();
    }
    Oppurtunidades_de_Empleo(){
        cy.findByRole('link', { name: 'Oportunidades de Empleo' }).scrollIntoView().should('be.visible').click();
    }
    Franchise_link(){
        //cy.findByRole('link', { name: 'el enlace de Franquicia en nuestra página' })
        cy.get(':nth-child(4) > :nth-child(2) > a').should('be.visible').click();
    }
    check_Franchise_Url(){
        cy.url().should('eq', Cypress.config().comUrl + '/franchise');
    }
    Heading_Franchise(){
        cy.findByRole('heading', { name: 'Franchising' }).should('be.visible');
    }
    An_Operators_life_vedio(){
        cy.findByRole('button', { name: "An Operator's Life Video Player Button" }).should('be.visible').click();
    }
    NextVedio_Button(){
        cy.findByRole('img', { name: 'next' }).should('be.visible').click();
    }
    Hear_more_Stories(){
        cy.findByRole('link', { name: 'Hear more stories' }).should('be.visible').click();
    }
    Inside_Stories_Headings(){
        cy.findByRole('heading', { name: 'Stories from our Franchisees and their restaurants' }).should('be.visible');
    }
    Franchise_vedios(){
        cy.findByRole('button', { name: "From Argentina to New York's Chick-fil-A Video Player Button" })
    }
    Milk_shake_Footer_Img(){
        cy.get('[class="desktop-img"]').should('be.visible');
    }
    find_an_Upcoming_Event_Link(){
        cy.findByRole('link', { name: 'Find an upcoming event' }).should('be.visible').click();
    }
    find_an_Upcoming_Event_Url(){
        cy.url().should('eq','https://www.chick-fil-a.com/franchise/franchise-events')
    }
    view_Franchise_Information_sessions_text(){
        cy.findByRole('heading', { name: 'Franchise information sessions' }).should('be.visible').click();
    }
    Webinar_Sessions_Link(){
        cy.findByRole('link', { name: 'Learn more' }).should('be.visible').click();
    }
    View_Emerging_Markets_link(){
        cy.findByRole('link', { name: 'View emerging markets'}).should('be.visible').click();
    }
    Check_Emerging_Market_Url(){
        cy.url().should('eq','https://www.chick-fil-a.com/franchise/franchise-emerging-markets')
    }
    Heading_of_Emerging_Market(){
        cy.findByRole('heading', { name: 'Emerging (or growth) markets' }).should('be.visible');
    }
    Click_on_more_Operators(){
        cy.findByRole('link', { name: 'Click here for more information' }).should('be.visible').click();
    }
    Mobile_Img(){
        cy.get('[class="mobile-img"]').should('be.visible');
    }
    Register(){
        cy.xpath("//a[contains(text(),'Regístrese')]").should('be.visible');
        //.click({force:true});
    }
    Heading_of_Franchise_Oppurtunities(){
        cy.findByRole('heading', { name: 'Franchise opportunities' }).should('be.visible');
    }
    Home_Page_Url(){
        cy.visit(Cypress.config().baseUrl  + '');
    }
    Navigate_to_Nutrients_And_Allergens(){
        cy.findByText('Nutrientes y Alérgenos').should('be.visible').click();
    }
    check_Nutrients_And_Allergens_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/nutrition-allergens')
    }
    Heading_Information_of_Nutrients(){
        cy.findByRole('heading', { name: 'información nutricional y alérgenos' }).should('be.visible');
    }
    click_on_Breakfast(){
        cy.get('[data-id="MOBILE_BREAKFAST"]').should('be.visible').click();
    }
    click_on_Biscuit_Con_Pollo(){
        cy.findByRole('link', { name: 'Biscuit con pollo Chick-fil-A®' }).should('be.visible').click();
    }
    Product_Information(){
        cy.findByRole('link', { name: 'Mostrar información completa sobre nutrición y alérgenos para este producto' }).should('be.visible');
    }
    clickonAdditional(){
        cy.findByRole('button', { name: 'Adicionales' }).should('be.visible');
    }
    clickonIngredients(){
        cy.findByText('Ingredientes').should('be.visible').click();
    }
    InsideIngredientsFindArestaurant(){
        cy.findByRole('button', { name: 'Find a restaurant' }).click({force:true});
    }
    seeRestaurantlocation(){
        cy.findByText('Encuentra un restaurante cerca de tu ubicación.').should('be.visible');
    } 
    Chick_n_Minis(){
        cy.findByRole('link', { name: 'Chick-n-Minis™ Chick-fil-A' }).should('be.visible').click();
    }
    Burrito_de_desayuno(){
        cy.findByRole('link', { name: 'Burrito de desayuno' }).should('be.visible').click();
    }
    Biscuit_Con_Pollo_Huevo_y_questo(){
        cy.findByRole('link', { name: 'Biscuit con pollo, huevo y queso' }).should('be.visible').click();
    }
    Biscuit_Con_tocineta(){
        cy.findByRole('link', { name: 'Biscuit con tocineta, huevo y queso' }).should('be.visible').click();
    }
    Biscuit_Con_Salchicha_Huevo_y_questo(){
        cy.findByRole('link', { name: 'Biscuit con salchicha, huevo y queso' }).should('be.visible').click();
    }
    Plato_de_desayuno_Chick_fil_A(){
        cy.findByRole('link', { name: 'Plato de desayuno Chick-fil-A®'}).should('be.visible').click();
    }
    Hash_Browns(){
        cy.findByRole('link', { name: 'Hash browns' }).should('be.visible').click();
    }
    Ensalada_de_Frutas(){
        cy.get('[title="Ensalada de frutas"]').eq(2).should('be.visible').click();
    }
    Panes_de_desayuno(){
        cy.findByRole('link', { name: 'Panes de desayuno' }).should('be.visible').click();
    }
    Sandwitch_de_pollo_Chick_fil_A(){
        cy.findByRole('link', { name: 'Sándwich de pollo Chick-fil-A®' }).should('be.visible').click();
    }
    Sandwitch_deluxe_de_pollo_Chick_fil_A(){
        cy.findByRole('link', { name: 'Sándwich deluxe de pollo Chick-fil-A®' }).should('be.visible').click();
    }
    Sandwitch_de_pollo_picante(){
        cy.findByRole('link', { name: 'Sándwich de pollo picante' }).should('be.visible').click();
    }
    Sandwitch_deluxe_de_pollo_picante(){
        cy.findByRole('link', { name: 'Sándwich deluxe de pollo picante' }).should('be.visible').click();
    }
    Club_Sandwitch_a_la_parilla(){
        cy.findByRole('link', { name: 'Club sándwich a la parrilla' }).should('be.visible').click();
    }
    Nuggets_Chick_fil_a(){
        cy.findByRole('link', { name: 'Nuggets Chick-fil-A®' }).should('be.visible').click();
    }
    Nuggets_la_Parrilla(){
        cy.findByRole('link', { name: 'Nuggets a la Parrilla' }).should('be.visible').click();
    }
    Ensalada_Chick_Fil_A(){
        cy.findByRole('link', { name: 'Ensalada Chick-fil-A®' }).should('be.visible').click();
    }
    Papas_Fritas_Waffle_Chick_Fil_A(){
        cy.findByRole('link', { name: 'Papas Fritas Waffle™ Chick-fil-A®' }).should('be.visible').click();
    }
    Ensalada_de_Frutass(){
        cy.findByRole('link', { name: 'Ensalada de frutas' }).eq(1).should('be.visible').click();
    }
    Ensalada(){
        cy.findByRole('link', { name: 'Ensalada' }).should('be.visible').click();
    }
    Macarrones_con_questo(){
        cy.findByRole('link', { name: 'Macarrones con queso' }).should('be.visible').click();
    }
    Sopa_de_Pollo(){
        cy.findByRole('link', { name: 'Sopa de pollo' }).should('be.visible').click();
    }
    Limonada_Froasted_de_Mango_Parcha_bebidas(){
        cy.findByRole('link', { name: 'Limonada Frosted de Mangó Parcha bebidas' }).should('be.visible').click();
    }
    Limona_Froasted(){
        cy.findByRole('link', { name: 'Limonada frosted' }).should('be.visible').click();
    }
    Cafe_Froasted(){
        cy.findByRole('link', { name: 'Café frosted' }).should('be.visible').click();
    }
    Galleta_de_chocolate_chip(){
        cy.findByRole('link', { name: 'Galleta de chocolate chip' }).should('be.visible').click();
    }
    Brownie_con_fudge_de_choclate(){
        cy.findByRole('link', { name: 'Brownie con fudge de chocolate' }).should('be.visible').click();
    }
    Batida_de_coookies_cream(){
        cy.findByRole('link', { name: 'Batida de cookies & cream' }).should('be.visible').click();
    }
    Batida_de_chocolate(){
        cy.findByRole('link', { name: 'Batida de chocolate' }).should('be.visible').click();
    }
    Batida_de_fresa(){
        cy.findByRole('link', { name: 'Batida de fresa' }).should('be.visible').click();
    }
    Batida_de_vanilla(){
        cy.findByRole('link', { name: 'Batida de vainilla' }).should('be.visible').click();
    }
    Cono_Icedream(){
        cy.findByRole('link', { name: 'Cono Icedream®' }).should('be.visible').click();
    }
    Vaso_Icedream(){
        cy.findByRole('link', { name: 'Vaso Icedream®' }).should('be.visible').click();
    }
    Sunjoy_de_Mango_Parcha_bebidas(){
        cy.get('[title="Sunjoy<sup>®</sup> de Mangó Parcha bebidas"]').eq(0).should('be.visible').click();
    }
    Tie_frio_con_azucar(){
        cy.findByRole('link', { name: 'Té frío con azúcar' }).should('be.visible').click();
    }
    Tie_frio_sin_azucar(){
        cy.findByRole('link', { name: 'Té frío sin azúcar' }).should('be.visible').click();
    }
    Limonada_Chick_fil_A(){
        cy.findByRole('link', { name: 'Limonada Chick-fil-A®' }).should('be.visible').click();
    }
    Limonada_de_dieta_Chick_fil_A(){
        cy.findByRole('link', { name: 'Limonada de dieta Chick-fil-A®' }).should('be.visible').click();
    }
    Sunjoy_te_con_azucar__Limonada(){
        cy.get('[href="/menu/sunjoy12-t-con-azcar-12-limonada"]').eq(0).should('be.visible').click();
     }
     Sunjoy_te_con_azucar__Limonada_de_dieta(){
        cy.get('[href="/menu/sunjoy12-t-con-azcar-12-limonada"]').eq(0).should('be.visible').click();
     }
     Sunjoy_te_sin_azucar__Limonada(){
        cy.get('[href="/menu/sunjoy12-t-sin-azcar-12-limonada"]').eq(0).should('be.visible').click();
     }
     Sunjoy_te_sin_azucar__Limonada_de_dieta(){
        cy.get('[href="/menu/sunjoy12-t-sin-azcar-12-limonada-de-dieta"]').eq(0).should('be.visible').click();
     }
     Cafe_frio(){
        cy.findByRole('link', { name: 'Café frío' }).should('be.visible').click();
     }
     Coca_Cola(){
        cy.get('[title="Coca Cola®<sup>®</sup>"]').eq(0).should('be.visible').click();
     }
     Agua_embotellada_dasani(){
        cy.get('[href="/menu/agua-embotellada-dasani"]').eq(0).should('be.visible').click();
     }
     Leche_1(){
        cy.findByRole('link', { name: 'Leche 1%' }).should('be.visible').click();
     }
     Galon(){
        cy.findByRole('link', { name: 'Galón' }).should('be.visible').click();
     }
     Productos_de_hielo(){
        cy.findByRole('link', { name: 'Productos de hielo' }).should('be.visible').click();
     }
     Jugo_de_Manzana_Minute_Maid(){
        cy.get('[href="/menu/jugo-de-manzana-minute-maid"]').eq(0).should('be.visible').click();
     }
     Jugo_de_china_Minute_Maid(){
        cy.get('[href="/menu/jugo-de-china-del-valle"]').eq(0).should('be.visible').click();
     }
     Cafe_latte(){
        cy.findByRole('link', { name: 'Café latte' }).should('be.visible').click();
     }
     Americano(){
        cy.findByRole('link', { name: 'Americano' }).should('be.visible').click();
     }
     Cortado(){
        cy.findByRole('link', { name: 'Cortado' }).should('be.visible').click();
     }
     Espresso(){
        cy.findByRole('link', { name: 'Espresso' }).should('be.visible').click();
     }
     Salsa_BBQ(){
        cy.findByRole('link', { name: 'Salsa BBQ' }).should('be.visible').click();
     }
     Salsa_Chick_fil_A(){
        cy.get('[href="/menu/salsa-chick-fil-a"]').eq(0).should('be.visible').click();
     }
     Salsa_Garden_Herb_Ranch(){
        cy.findByRole('link', { name: 'Salsa Garden Herb Ranch' }).should('be.visible').click();
     }
     Salsa_Honey_Mustard(){
        cy.findByRole('link', { name: 'Salsa Honey Mustard' }).should('be.visible').click();
     }
     Salsa_polynesian(){
        cy.findByRole('link', { name: 'Salsa Polynesian' }).should('be.visible').click();
     }
     Salsa_Sweet_and_Spicy_Sriracha(){
        cy.findByRole('link', { name: 'Salsa Sweet and Spicy Sriracha' }).should('be.visible').click();
     }
     Salsa_Zesty_Buffalo(){
        cy.findByRole('link', { name: 'Salsa Zesty Buffalo' }).should('be.visible').click();
     }
     Salsa_Honey_Roasted_BBQ(){
        cy.findByRole('link', { name: 'Salsa Honey Roasted BBQ' }).should('be.visible').click();
     }
     Aderazo_Avocado_Lime_Ranch(){
       cy.findByRole('link', { name: 'Aderezo Avocado Lime Ranch' }).should('be.visible').click();
     }
     Aderazo_Fat_Free_Honey_Mustard(){
        cy.findByRole('link', { name: 'Aderezo Fat-Free Honey Mustard' }).should('be.visible').click();
     }
     Aderazo_Garden_Herb_Ranch(){
        cy.findByRole('link', { name: 'Aderezo Garden Herb Ranch' }).should('be.visible').click();
     }
     Aderazo_Light_Balsamic_Vinaigrette(){
        cy.findByRole('link', { name: 'Aderezo Light Balsamic Vinaigrette' }).should('be.visible').click();
     }
     Aderazo_Zesty_Apple_Cider_Vinaigrette(){
        cy.findByRole('link', { name: 'Aderezo Zesty Apple Cider Vinaigrette' }).should('be.visible').click();
     }
     ClickHere(){
        cy.findByRole('link', { name: 'here' }).should('be.visible').click();
     }
    Fileta_de_pollo_link(){
        cy.findByRole('link', { name: 'filete de pollo Chick-fil-A®' }).should('be.visible').click();
    }
    Fileta_de_pollo_picante_link(){
        cy.findByRole('link', { name: 'Filete de pollo Chick-fil-A®<sup>®</sup> a la parrilla' }).should('be.visible').click();
    }

    Sandwitch_deluxe_de_pollo_a_la_parilla(){
        cy.findByRole('link', { name: 'Sándwich deluxe de pollo a la parilla' }).should('be.visible').click();
    }
    click_on_Entries(){
        cy.get('[data-id="MOBILE_ENTREES"]').should('be.visible').click();
    }
    click_on_Salads(){
        cy.get('[data-id="MOBILE_SALADS"]').should('be.visible').click();
    }
    click_on_Sides(){
        cy.get('[data-id="MOBILE_SIDES"]').should('be.visible').click();
    }
    click_on_Treats(){
        cy.get('[data-id="MOBILE_SIDES"]').should('be.visible').click();
    }
    click_on_Sides(){
        cy.get('[data-id="MOBILE_TREATS"]').should('be.visible').click();
    }
    click_on_Beverages(){
        cy.get('[data-id="MOBILE_BEVERAGES"]').should('be.visible').click();
    }
    click_on_Sauces_SubMenu(){
        cy.get('[data-id="SAUCES_SUBMENU"]').should('be.visible').click();
    }
    click_on_Dressing_SubMenu(){
        cy.get('[data-id="DRESSINGS_SUBMENU"]').should('be.visible').click();
    }
    Navigate_to_Franchise(){
        cy.findByText('Franquicia').should('be.visible').click({force:true});
    }
    Navigate_To_Oppurtunities(){
        cy.get(':nth-child(4) > a > span').should('be.visible').click();
    }
    check_Navigate_To_Oppurtunities(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/oportunidades-de-empleo')
    }
}

export default Footers;