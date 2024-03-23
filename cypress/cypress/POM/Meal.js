class Meal{
    
    NavigateComida(){
        cy.findByRole('link', { name: 'Comida' }).should('be.visible').click();
    }
    MenuUrl(){
        cy.visit(Cypress.config().baseUrl  + '/menu')
    }
    Sandwich_de_polo_chick_fil_A_Img(){
        cy.findByRole('img', { name: 'Sándwich de pollo Chick-fil-A®' }).should('be.visible');
    }
    Sandwich_de_polo_chick_fil_A_url(){
        cy.findByText('Sándwich de pollo Chick-fil-A').should('be.visible').click();
    }
    checkSandwich_de_polo_chick_file_url(){
        cy.url().should('eq',Cypress.config().baseUrl + '/menu/s%C3%A1ndwich-de-pollo-chick-fil-a')
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
        cy.findByRole('button', { name: 'Find a restaurant' }).click();
    }
    seeRestaurantlocation(){
        cy.findByText('Encuentra un restaurante cerca de tu ubicación.').should('be.visible');
    }
    Sandwich_deluxe_de_polo_chick_fil_A_Img(){
        cy.findByRole('img', { name: 'Sándwich deluxe de pollo Chick-fil-A®' }).should('be.visible');
    }
    Sandwich_deluxe_de_polo_chick_fil_A_url(){
        cy.findByText('Sándwich deluxe de pollo Chick-fil-A').should('be.visible').click();
    }
    visit2ndImgUrl(){
        cy.visit(Cypress.config().baseUrl  + '/menu/sandwich-deluxe-de-pollo-chick-fil-a')
    }
    checkLearnMore(){
        cy.findByRole('link', { name: 'Obtenga más información aquí.' }).should('be.visible').click();
    }
    check_Nutrition_Allergens_Url(){
        cy.url().should('eq', 'https: www.chick-fil-a.com nutrition-allergens');
    }
    Heading_Nutrition_Allergens(){
       return cy.get("#nutrition-and-allergens").should('be.visible');
       // cy.findByRole('heading', { name: 'Nutrition & Allergens' }).should('be.visible');
    }
    Sandwich_de_polo_picante_Img(){
        cy.findByRole('img', { name: 'Sándwich de pollo picante' }).should('be.visible');
    }
    Sandwich_de_polo_picante_url(){
        cy.findByText('Sándwich de pollo picante').should('be.visible').click();
    }
    closeLocationPopup(){
        cy.get(".mfp-close").click();
    }
    Sandwich_deluxe_de_pollo_picante_Img(){
        cy.findByRole('img', { name: 'Sándwich deluxe de pollo picante' }).should('be.visible');
    }
    Sandwich_deluxe_de_pollo_picante_url(){
        cy.findByText('Sándwich deluxe de pollo picante').should('be.visible').click();
    }
    Sandwich_deluxe_de_pollo_a_la_parrilla_Img(){
        cy.findByRole('img', { name: 'Sándwich de pollo a la parrilla' }).should('be.visible');
    }
    Sandwich_deluxe_de_pollo_a_la_parrilla_url(){
        cy.findByText('Sándwich de pollo a la parrilla').should('be.visible').click();
    }
    Club_sándwich_a_la_parrilla_Img(){
        cy.findByRole('img', { name: 'Club sándwich a la parrilla' }).should('be.visible');
    }
    Club_sándwich_a_la_parrilla_url(){
        cy.findByText('Club sándwich a la parrilla').should('be.visible').click();
    }
    Nuggets_Chick_fil_A_Img(){
        cy.findByRole('img', { name: 'Nuggets Chick-fil-A®' }).should('be.visible');
    }
    Nuggets_Chick_fil_A_url(){
        cy.findByText('Nuggets Chick-fil-A').should('be.visible').click();
    }
    Nuggets_a_la_Parrilla_Img(){
        cy.findByRole('img', { name: 'Nuggets a la Parrilla' }).should('be.visible');
    }
    Nuggets_a_la_Parrilla_url(){
        cy.findByText('Nuggets a la Parrilla').should('be.visible').click();
    }
    Navigate_to_Breakfast(){
        cy.findByRole('link', { name: 'Desayuno' }).should('be.visible').click();
    }
    Breakfast_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu#breakfast')
    }
    Biscuit_Con_Pollo_Img(){
        cy.findByRole('img', { name: 'Biscuit con pollo Chick-fil-A®' }).should('be.visible');
    }
    Biscuit_Con_Pollo_Url(){
        cy.findByText('Biscuit con pollo Chick-fil-A').should('be.visible').click();
    }
    Check_Biscuit_con_url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/biscuit-con-pollo-chick-fil-a')
    }
    Chick_n_minis_Img(){
        cy.findByRole('img', { name: 'Chick-n-Minis™ Chick-fil-A' }).should('be.visible');
    }
    Chick_n_minis_Url(){
        cy.findByText('Chick-n-Minis™ Chick-fil-A').should('be.visible').click();
    }
    Check_chick_n_minis_url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/chick-n-minis-chick-fil-a')
    }
    Burrito_de_desayuno_Img(){
        cy.findByRole('img', { name: 'Burrito de desayuno' }).should('be.visible');
    }
    Burrito_de_desayuno_Url(){
        cy.findByText('Burrito de desayuno').should('be.visible').click();;
    }
    Check_Burrito_de_desayuno_url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/burrito-de-desayuno')
    }
    Biscuit_con_pollo_huevo_y_queso_Img(){
        cy.findByRole('img', { name: 'Biscuit con pollo, huevo y queso' }).should('be.visible');
    }
    Biscuit_con_pollo_huevo_y_queso_Url(){
        cy.findByText('Biscuit con pollo, huevo y queso').should('be.visible').click();
    }
    Check_Biscuit_con_pollo_huevo_y_queso_url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/biscuit-con-pollo-huevo-y-queso')
    }
    Biscuit_con_tocineta_huevo_y_queso_Img(){
        cy.findByRole('img', { name: 'Biscuit con tocineta, huevo y queso' }).should('be.visible');
    }
    Biscuit_con_tocineta_huevo_y_queso_Url(){
        cy.findByText('Biscuit con tocineta, huevo y queso').should('be.visible').click();
    }
    Check_Biscuit_con_tocineta_huevo_y_queso_url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/biscuit-con-tocineta-huevo-y-queso')
    }
    Biscuit_con_salchicha_huevo_y_queso_Img(){
        cy.findByRole('img', { name: 'Biscuit con salchicha, huevo y queso' }).should('be.visible');
    }
    Biscuit_con_salchicha_huevo_y_queso_Url(){
        cy.findByText('Biscuit con salchicha, huevo y queso').should('be.visible').click();
    }
    Check_Biscuit_con_salchicha_huevo_y_queso_url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/biscuit-con-salchicha-huevo-y-queso')
    }
    Plato_de_desayuno_Chick_fil_A_Img(){
        cy.findByRole('img', { name: 'Plato de desayuno Chick-fil-A®' }).should('be.visible');
    }
    Plato_de_desayuno_Chick_fil_A_Url(){
        cy.findByText('Plato de desayuno Chick-fil-A').should('be.visible').click();
    }
    Check_Plato_de_desayuno_url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/plato-de-desayuno-chick-fil-a')
    }
    Hash_browns_Img(){
        cy.findByRole('img', { name: 'Hash browns' }).should('be.visible');
    }
    Hash_browns_Url(){
        cy.findByText('Hash browns').should('be.visible').click();
    }
    Check_Hash_browns__url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/hash-browns-1')
    }
    Ensalada_de_frutas_Img(){
        cy.findByRole('img', { name: 'Ensalada de frutas' }).should('be.visible');
    }
    Ensalada_de_frutas_Url(){
       // cy.findByText('Ensalada de frutas').eq(2).should('be.visible').click();
       cy.get(':nth-child(4) > .flex > [data-tag="FRUIT_CUP"] > .test1 > .item-details > .item-title').click();
    }
    check_Ensalada_de_frutas_url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/ensalada-de-frutas')
    }
    Panes_de_desayuno_Img(){
        cy.findByRole('img', { name: 'Panes de desayuno' }).should('be.visible');
    }
    Panes_de_desayuno_Url(){
        cy.findByText('Panes de desayuno').should('be.visible').click();
    }
    Check_Panes_de_desayuno__url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/breakfast-breads')
    }
   
    Plato_principles_url(){
        cy.findByRole('link', { name: 'Platos principales' }).should('be.visible').click();
    }
    check_entrees_url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu#entrees');
    }
    Ensaladas_url(){
        cy.findByRole('link', { name: 'Ensaladas' }).should('be.visible').click();
    }
    Check_Ensaladas_url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu#salads');
    }
    Ensalada_chick_fil_a_Img(){
        cy.findByRole('img', { name: 'Ensalada Chick-fil-A®' }).should('be.visible');
    }
    Ensalada_chick_fil_a_url(){
        cy.findByText('Ensalada Chick-fil-A').should('be.visible').click();
    }
    check_Ensalada_chick_fil_A_url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/ensalada-chick-fil-a')
    }
    Navigate_to_Acompanamientos(){
        cy.findByRole('link', { name: 'Acompañamientos' }).click();
    }
    check_Acompanamientos_url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu#sides');
    }
    Papas_Fritas_Waffle_Img(){
        cy.findByRole('img', { name: 'Papas Fritas Waffle™ Chick-fil-A®'}).should('be.visible');
    }
    Papas_Fritas_Waffle_url(){
        cy.findByText('Papas Fritas Waffle™ Chick-fil-A').should('be.visible').click();
    }
    Ensalada_de_fruta_img(){
        cy.findByRole('img', { name: 'Ensalada de frutas' }).should('be.visible');
    }
    Ensalada_de_fruta_url(){
        //cy.findByText('Ensalada de frutas').should('be.visible').click();
        cy.xpath("//span[contains(text(),'Ensalada')]").eq(3).click();

    }
    Ensalada_Img(){
        cy.get('[alt="Ensalada"]').should('be.visible');
    }
    Ensalada_Url(){
        cy.xpath("//span[contains(text(),'Ensalada')]").eq(4).click();
    }
    Maccarrones_con_queso_Img(){
        cy.findByRole('img', { name: 'Macarrones con queso' }).should('be.visible');
    }
    Maccarrones_con_queso_Url(){
        cy.findByText('Macarrones con queso').should('be.visible').click();
    }
    Sopa_de_pollo_Img(){
        cy.findByRole('img', { name: 'Sopa de pollo' }).should('be.visible');
    }
    Sopa_de_pollo_Url(){
        cy.findByText('Sopa de pollo').should('be.visible').click();
    }
    chicken_soup_Img(){
        cy.findByRole('img', { name: 'Chicken Soup' }).should('be.visible')
    }
    chicken_soup_Url(){
        cy.findByText('Chicken Soup').should('be.visible').click();
    }
    Comidas_para_ninos_Url(){
        cy.findByRole('link', { name: 'Comidas para niños' }).should('be.visible').click();
    }
    check_Comidas_para_ninos_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu#kidsmeals');
    }
    Combo_nino_5_nuggets_Img(){
        cy.get('[alt="Combo niños 5 nuggets"]').should('be.visible');
    }
    Combo_nino_5_nuggets_Url(){
        cy.xpath("//span[contains(text(),'Combo niños 5 nuggets')]").eq(0).should('be.visible').click();
    }
    Combo_nino_5_nuggets_a_la_parrilla_Img(){
    cy.findByRole('img', { name: 'Combo niños 5 nuggets a la parrilla' }).should('be.visible');
    }
    Combo_nino_5_nuggets_a_la_parrilla_Url(){
        cy.xpath("//span[contains(text(),'Combo niños 5 nuggets')]").eq(1).should('be.visible').click();
    }
    Navigate_to_Dulces(){
        cy.findByRole('link', { name: 'Dulces' }).should('be.visible').click();
    }
    check_Dulces_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu#treats')
    }
    Limanada_Frosted_de_Mango_Parcha_bebidas_Img(){
        cy.findByRole('img', { name: 'Limonada Frosted de Mangó Parcha bebidas' }).should('be.visible');
    }
    Limanada_Frosted_de_Mango_Parcha_bebidas_Url(){
        cy.findByText('Limonada Frosted de Mangó Parcha bebidas').should('be.visible').click();
    }
    check_Limanada_Frosted_de_Mango_Parcha_bebidas_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/limonada-frosted-de-mang-parcha-bebidas')
    }
    Limonada_Frosted_Img(){
        cy.get('[alt="Limonada frosted"]').should('be.visible');
    }
    Limonada_Frosted_Url(){
        cy.xpath("//span[contains(text(),	'Limonada frosted')]").should('be.visible').click();
    }
    Galleta_de_chocolate_chip_Img(){
        cy.findByRole('img', { name: 'Galleta de chocolate chip' }).should('be.visible');
    }
    Galleta_de_chocolate_chip_Url(){
        cy.findByText('Galleta de chocolate chip').should('be.visible').click();
    }
    Brownie_con_fudge_de_choclate_Img(){
        cy.findByRole('img', { name: 'Brownie con fudge de chocolate' }).should('be.visible');
    }
    Brownie_con_fudge_de_choclate_Url(){
        cy.findByText('Brownie con fudge de chocolate').should('be.visible').click();
    }
    Batida_de_cookies_cream_Img(){
        cy.findByRole('img', { name: 'Batida de cookies & cream' }).should('be.visible');
    }
    Batida_de_cookies_cream_Url(){
        cy.findByText('Batida de cookies & cream').should('be.visible').click();
    }
    Batida_de_Chocolate_Img(){
        cy.findByRole('img', { name: 'Batida de chocolate' }).should('be.visible');
    }
    Batida_de_Chocolate_Url(){
        cy.findByText('Batida de chocolate').should('be.visible').click();
    }
    Batida_de_fresa_Img(){
        cy.findByRole('img', { name: 'Batida de fresa' }).should('be.visible');
    }
    Batida_de_fresa_Url(){
        cy.findByText('Batida de fresa').should('be.visible').click();
    }
    Batida_de_vainilla_Img(){
        cy.findByRole('img', { name: 'Batida de vainilla' }).should('be.visible');
    }
    Batida_de_vainilla_Url(){
        cy.findByText('Batida de vainilla').should('be.visible').click();
    }
    Cono_Icedream_Img(){
        cy.findByRole('img', { name: 'Cono Icedream®' }).should('be.visible');
    }
    Cono_Icedream_Url(){
        cy.findByText('Cono Icedream').should('be.visible').click();
    }
    Vaso_Icedream_Img(){
        cy.findByRole('img', { name: 'Vaso Icedream®' }).should('be.visible');
    }
    Vaso_Icedream_Url(){
        cy.findByText('Vaso Icedream').should('be.visible').click();
    }
    Navigate_To_Bebidas(){
        cy.findByRole('link', { name: 'Bebidas' }).should('be.visible').click();
    }
    check_Bebidas_url(){
     cy.url().should('eq',Cypress.config().baseUrl  + '/menu#beverages');
    }
    Sunjoy_de_Mango_Parcha_bebidas_Img(){
        cy.findByRole('img', { name: 'Sunjoy® de Mangó Parcha bebidas' }).should('be.visible');
    }
    Sunjoy_de_Mango_Parcha_bebidas_Url(){
        cy.findByText('Sunjoy de Mangó Parcha bebidas').should('be.visible').click();
    }
    check_Sunjoy_de_Mango_Parcha_bebidas_Url(){
       cy.url().should('eq',Cypress.config().baseUrl  + '/menu/sunjoy-de-mang%C3%B3-parcha-bebidas')
    }
    Te_frio_con_azucar_Img(){
        cy.findByRole('img', { name: 'Té frío con azúcar' }).should('be.visible');
    }
    Te_frio_con_azucar_Url(){
        cy.findByText('Té frío con azúcar').should('be.visible').click();
    }
    check_Te_frio_con_azucar_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/te-frio-con-azucar');
    }
    Te_frio_sin_azucar_Img(){
        cy.findByRole('img', { name: 'Té frío sin azúcar' }).should('be.visible');
    }
    Te_frio_sin_azucar_Url(){
        cy.findByText('Té frío sin azúcar').should('be.visible').click();
    }
    Limonada_Chick_fil_A_Img(){
        cy.findByRole('img', { name: 'Limonada Chick-fil-A®' }).should('be.visible');
    }
    Limonada_Chick_fil_A_Url(){
        cy.findByText('Limonada Chick-fil-A').should('be.visible').click();
    }
    check_Limonada_Chick_fil_A_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/limonada-chick-fil-a')
    }
    Limonada_de_dieta_Chick_fil_A_Img(){
        cy.findByRole('img', { name: 'Limonada de dieta Chick-fil-A®' }).should('be.visible');
    }
    Limonada_de_dieta_Chick_fil_A_Url(){
        cy.findByText('Limonada de dieta Chick-fil-A').should('be.visible').click();
    }
    check_Limonada_de_dieta_Chick_fil_A_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/limonada-de-dieta-chick-fil-a');
    }
    Sunjoy_Te_con_limonada_Img(){
        //cy.findByRole('img', { name: 'Sunjoy® (1/2 té con azúcar, 1/2 limonada)'}).should('be.visible');
        cy.get('[alt="Sunjoy® (1/2 té con azúcar, 1/2 limonada)"]').should('be.visible');
    }
    Sunjoy_Te_con_limonada_Url(){
        cy.findByText('Sunjoy (1/2 té con azúcar, 1/2 limonada)').should('be.visible').click();
    }
    check_Sunjoy_Te_con_limonada_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/sunjoy12-t-con-azcar-12-limonada')
    }
    Sunjoy_Te_con_limonada_de_dieta_Img(){
        cy.get('[data-tag="SWEET_TEA_DIET_LEMONADE"] > .test1 > .item-details > .product > img').should('be.visible');
    }
    Sunjoy_Te_con_limonada_de_dieta_Url(){
        cy.findByText('Sunjoy (1/2 té con azúcar, 1/2 limonada de dieta)').should('be.visible').click();
    }
    check_Sunjoy_Te_con_limonada_de_dieta_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/sunjoy12-t-con-azcar-12-limonada-de-dieta')
    }
    Sunjoy_té_sin_azúcar_limonada_Img(){
        cy.get('[data-tag="UNSWEET_TEA_LEMOMADE"] > .test1 > .item-details > .product > img').should('be.visible');
    }
    Sunjoy_té_sin_azúcar_limonada_Url(){
        cy.findByText('Sunjoy (1/2 té sin azúcar, 1/2 limonada)').should('be.visible').click();
    }
    check_Sunjoy_té_sin_azúcar_limonada_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/sunjoy12-t-sin-azcar-12-limonada')
    }
    Sunjoy_Te_sin_limonada_de_dieta_Img(){
        cy.get('[data-tag="UNSWEET_TEA_DIET_LEMONADE"] > .test1 > .item-details > .product > img').should('be.visible');
    }
    Sunjoy_Te_sin_limonada_de_dieta_Url(){
        cy.findByText('Sunjoy (1/2 té sin azúcar, 1/2 limonada de dieta)').should('be.visible').click();
    }
    check_Sunjoy_Te_sin_limonada_de_dieta_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/sunjoy12-t-sin-azcar-12-limonada-de-dieta')
    }
    Cafe_frio_Img(){
        cy.findByRole('img', { name: 'Café frío' }).should('be.visible');
    }
    Cafe_frio_Url(){
        cy.findByText('Café frío').should('be.visible').click();
    }
    check_Cafe_frio_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/cafe-frio');
    }
    Coca_Cola_Img(){
        cy.findByRole('img', { name: 'Coca Cola®®' }).should('be.visible');
    }
    Coca_Cola_Url(){
        cy.findByText('Coca Cola®').should('be.visible').click();
    }
    check_Coca_Cola_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/coca-cola');
    }
    Agua_embotellada_DASANI_Img(){
        cy.findByRole('img', { name: 'Agua embotellada DASANI®' }).should('be.visible')
    }
    Agua_embotellada_DASANI_Url(){
        cy.get('[data-tag="BOTTLED_WATER"] > .test1 > .item-details > .item-title').should('be.visible').click();
    }
    check_Agua_embotellada_DASANI_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/agua-embotellada-dasani')
    }
    Leche_Img(){
        cy.findByRole('img', { name: 'Leche 1%' }).should('be.visible');
    }
    Leche_Url(){
        cy.findByText('Leche 1%').should('be.visible').click();
    }
    check_Leche_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/leche-1');
    }
    Galon_Img(){
        cy.findByRole('img', { name: 'Galón' }).should('be.visible');
    }
    Galon_Url(){
        cy.xpath("//span[contains(text(),'Galón')]").eq(0).should('be.visible').click();
    }
    check_Galon_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/gallon-beverages')
    }
    Productos_de_hielo_Img(){
        cy.findByRole('img', { name: 'Productos de hielo' }).should('be.visible');
    }
    Productos_de_hielo_Url(){
        cy.findByText('Productos de hielo').should('be.visible').click();
    }
    check_Productos_de_hielo_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/ice-products')
    }
    Jugo_de_manzana_Minute_Maid_Img(){
        cy.findByRole('img', { name: 'Jugo de manzana Minute Maid®' }).should('be.visible');
    }
    Jugo_de_manzana_Minute_Maid_Url(){
        cy.findByText('Jugo de manzana Minute Maid').should('be.visible').click();
    }
    check_Jugo_de_manzana_Minute_Maid_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/jugo-de-manzana-minute-maid')
    }
    Jugo_de_china_Minute_Maid_Img(){
        cy.findByRole('img', { name: 'Jugo de china Minute Maid®' }).should('be.visible');
    }
    Jugo_de_china_Minute_Maid_Url(){
        cy.findByText('Jugo de china Minute Maid').should('be.visible').click();
    }
    check_Jugo_de_china_Minute_Maid_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/jugo-de-china-del-valle')
    }
    Americano_Img(){
        cy.findByRole('img', { name: 'Americano' }).should('be.visible');
    }
    Americano_Url(){
        cy.findByText('Americano').should('be.visible').click();
    }
    check_Americano_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/americano')
    }
    Cortado_Img(){
        cy.findByRole('img', { name: 'Cortado' }).should('be.visible');
    }
    Cortado_Url(){
        cy.findByText('Cortado').should('be.visible').click();
    }
    check_Cortado_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/cortado')
    }
    Espresso_Img(){
        cy.findByRole('img', { name: 'Espresso' }).should('be.visible');
    }
    Espresso_Url(){
        cy.findByText('Espresso').should('be.visible').click();
    }
    check_Espresso_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/espresso')
    }
    Navigate_to_Dipping_Salsas_y_Aderezos(){
        cy.findByRole('link', { name: 'Dipping Salsas y Aderezos' }).should('be.visible').click();
    }
    check_Dipping_Salsas_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu#sauces')
    }
    Salsa_BBQ_Img(){
        cy.findByRole('img', { name: 'Salsa BBQ' }).should('be.visible');
    }
    Salsa_BBQ_link(){
        cy.findByText('Salsa BBQ').should('be.visible').click();
    }
    check_Salsa_BBQ_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/salsa-bbq')
    }
    Salsa_Chick_fil_A_Img(){
        cy.findByRole('img', { name: 'Salsa Chick-fil-A®' }).should('be.visible');
    }
    Salsa_Chick_fil_A_link(){
        cy.findByText('Salsa Chick-fil-A').should('be.visible').click();
    }
    check_Salsa_Chick_fil_A_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/salsa-chick-fil-a')
    }
    Salsa_Garden_Herb_Ranch_Img(){
        cy.findByRole('img', { name: 'Salsa Garden Herb Ranch' }).should('be.visible')
    }
    Salsa_Garden_Herb_Ranch_link(){
        cy.findByText('Salsa Garden Herb Ranch').should('be.visible').click();
    }
    check_Salsa_Garden_Herb_Ranch_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/salsa-garden-herb-ranch-1')
    }
    Salsa_Honey_Mustard_Img(){
        cy.findByRole('img', { name: 'Salsa Honey Mustard' }).should('be.visible')
    }
    Salsa_Honey_Mustard_link(){
        cy.findByText('Salsa Honey Mustard').should('be.visible').click();
    }
    check_Salsa_Honey_Mustard_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/salsa-honey-mustard')
    }
    Salsa_Polynesian_Img(){
        cy.findByRole('img', { name: 'Salsa Polynesian' }).should('be.visible')
    }
    Salsa_Polynesian_link(){
        cy.findByText('Salsa Polynesian').should('be.visible').click();
    }
    check_Salsa_Polynesian_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/polynesian-sauce')
    }
    Salsa_Sweet_and_Spicy_Sriracha_Img(){
        cy.findByRole('img', { name: 'Salsa Sweet and Spicy Sriracha' }).should('be.visible');
    }
    Salsa_Sweet_and_Spicy_Sriracha_link(){
        cy.findByText('Salsa Sweet and Spicy Sriracha').should('be.visible').click();
    }
    check_Salsa_Sweet_and_Spicy_Sriracha_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/sweet-and-spicy-sriracha-sauce')
    }
    Salsa_Zesty_Buffalo_Img(){
        cy.findByRole('img', { name: 'Salsa Zesty Buffalo' }).should('be.visible');
    }
    Salsa_Zesty_Buffalo_link(){
        cy.findByText('Salsa Zesty Buffalo').should('be.visible').click();
    }
    check_Salsa_Zesty_Buffalo_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/zesty-buffalo-sauce')
    }
    Salsa_Honey_Roasted_BBQ_Img(){
        cy.findByRole('img', { name: 'Salsa Honey Roasted BBQ' }).should('be.visible')
    }
    Salsa_Honey_Roasted_BBQ_link(){
        cy.findByText('Salsa Honey Roasted BBQ').should('be.visible').click();
    }
    check_Salsa_Honey_Roasted_BBQ_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/salsa-honey-roasted-bbq')
    }
    Aderezo_Avocado_Lime_Ranch_Img(){
        cy.findByRole('img', { name: 'Aderezo Avocado Lime Ranch' }).should('be.visible')
    }
    Aderezo_Avocado_Lime_Ranch_link(){
        cy.findByText('Aderezo Avocado Lime Ranch').should('be.visible').click();
    }
    check_Aderezo_Avocado_Lime_Ranch_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/aderezo-avocado-lime-ranch')
    }
    Aderezo_Fat_Free_Honey_Mustard_Img(){
        cy.findByRole('img', { name: 'Aderezo Fat-Free Honey Mustard' }).should('be.visible')
    }
    Aderezo_Fat_Free_Honey_Mustard_link(){
        cy.findByText('Aderezo Fat-Free Honey Mustard').should('be.visible').click();
    }
    check_Aderezo_Fat_Free_Honey_Mustard_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/aderezo-fat-free-honey-mustard-dressing')
    }
    Aderezo_Garden_Herb_Ranch_Img(){
        cy.findByRole('img', { name: 'Aderezo Garden Herb Ranch' }).should('be.visible')
    }
    Aderezo_Garden_Herb_Ranch_link(){
        cy.findByText('Aderezo Garden Herb Ranch').should('be.visible').click();
    }
    check_Aderezo_Garden_Herb_Ranch_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/aderezo-garden-herb-ranch-1')
    }
    Aderezo_Light_Balsamic_Vinaigrette_Img(){
        cy.findByRole('img', { name: 'Aderezo Light Balsamic Vinaigrette' }).should('be.visible')
    }
    Aderezo_Light_Balsamic_Vinaigrette_link(){
        cy.findByText('Aderezo Light Balsamic Vinaigrette').should('be.visible').click();
    }
    check_Aderezo_Light_Balsamic_Vinaigrette_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/light-balsamic-vinaigrette-dressing')
     }
    Aderezo_Zesty_Apple_Cider_Vinaigrette_Img(){
        cy.findByRole('img', { name: 'Aderezo Zesty Apple Cider Vinaigrette' }).should('be.visible')
    }
    Aderezo_Zesty_Apple_Cider_Vinaigrette_link(){
        cy.findByText('Aderezo Zesty Apple Cider Vinaigrette').should('be.visible').click();
    }
    check_Aderezo_Zesty_Apple_Cider_Vinaigrette_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/menu/zesty-apple-cider-vinaigrette-dressing')
    }
    Navigate_to_Catering(){
        cy.findByRole('link', { name: 'Catering' }).should('be.visible').click();
    }
    Check_Catering_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/catering')
    }
    Sandwitch_de_Pollo_Chick_fil_A_Img(){
        cy.findByRole('img', { name: 'Sándwich de pollo Chick-fil-A®' }).should('be.visible')
    }
    Sandwitch_de_Pollo_Chick_fil_A_link(){
        cy.findByText('Sándwich de pollo Chick-fil-A').should('be.visible').click();
    }
    check_Sandwitch_de_pollo_Chick_fil_A_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/catering/s%C3%A1ndwich-de-pollo-chick-fil-a')
    }
    Sandwitch_de_pollo_picante_Img(){
        cy.findByRole('img', { name: 'Sándwich de pollo picante' }).should('be.visible')
    }
    Sandwitch_de_pollo_picante_link(){
        cy.findByText('Sándwich de pollo picante').should('be.visible').click();
    }
    check_Sandwitch_de_pollo_picante_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/catering/s%C3%A1ndwich-de-pollo-picante')
    }
    Nuggets_Chick_fil_Img(){
        cy.findByRole('img', { name: 'Nuggets Chick-fil-A®' }).should('be.visible')
    }
    Nuggets_Chick_fil_link(){
       // cy.findByText('Nuggets Chick-fil-A®')
       cy.get('[data-tag="NUGGETS_CFA"] > .test1 > .item-details > .item-title').should('be.visible').click();
    }
    check_Nuggets_Chick_fil_Url(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/catering/nuggets-chick-fil-a')
    }
    Navigate_To_Catering_Breakfast(){
        cy.findByRole('link', {  name: 'Desayuno'}).should('be.visible').click();
    }
    Check_Catering_Breakfast_Url(){
       cy.url().should('eq','https://www.chick-fil-a.pr/catering#breakfast')
    }
    Bandeja_de_chick_n_Minis_Img(){
        cy.findByRole('img', { name: 'Bandeja de Chick-n-Minis Chick-fil-A' }).should('be.visible')
    }
    Bandeja_de_chick_n_Minis_Url(){
        cy.findByText('Bandeja de Chick-n-Minis Chick-fil-A').should('be.visible').click();
    }
    Biscuit_con_pollo_Img(){
        cy.findByRole('img', { name: 'Biscuit con pollo Chick-fil-A®' }).should('be.visible')
    }
    Biscuit_con_pollo_Url(){
        cy.xpath("//span[contains(text(),'Biscuit con pollo Chick-fil-A')]").should('be.visible').click();
    }
    Biscuit_con_tocineta_Img(){
        cy.findByRole('img', { name: 'Biscuit con tocineta' }).should('be.visible')
    }
    Biscuit_con_tocineta_Url(){
        cy.findByRole('img', { name: 'Biscuit con tocineta' }).should('be.visible').click();
    }
    Biscuit_con_salchicha_Img(){
        cy.findByRole('img', { name: 'Biscuit con salchicha' }).should('be.visible')
    }
    Biscuit_con_salchicha_Url(){
        cy.findByText('Biscuit con salchicha').should('be.visible').click();
    }
    Biscuit_Img(){
        cy.get('[alt="Biscuit"]').should('be.visible')
    }
    Biscuit_Url(){
        cy.xpath("//span[contains(text(),'Biscuit')]").eq(6).should('be.visible').click();
    }
    Catering_Ensalada_de_frutas_Img(){
        cy.findByRole('img', { name: 'Ensalada de frutas' }).should('be.visible')
    }
    Catering_Ensalada_de_frutas_Url(){
       cy.xpath("//span[contains(text(),'Ensalada de frutas')]").eq(0).should('be.visible').click();
        //cy.findByText('Ensalada de frutas').should('be.visible').click();
    }
    Navigate_to_Trays(){
        cy.findByRole('link', { name: 'Bandejas' }).should('be.visible').click();
    }
    Pollo_a_la_parilla_Bundle_Img(){
        cy.findByRole('img', { name: 'Pollo a la parrilla, Bundle' }).should('be.visible');
    }
    Pollo_a_la_parilla_Bundle_Url(){
        cy.findByText('Pollo a la parrilla, Bundle').should('be.visible').click();
    }
    Bandeja_de_nugget_Img(){
        cy.findByRole('img', { name: 'Bandeja de nugget Chick-fil-A' }).should('be.visible')
    }
    Bandeja_de_nugget_Url(){
        cy.findByText('Bandeja de nugget Chick-fil-A').should('be.visible').click();
    }
    Bandeja_de_nugget_fria_Img(){
        cy.findByRole('img', { name: 'Bandeja de nugget fría' }).should('be.visible')
    }
    Bandeja_de_nugget_fria_Url(){
        cy.findByText('Bandeja de nugget fría').should('be.visible').click();
    }
    Bandeja_de_ensalada_de_frutas_Img(){
        cy.findByRole('img', { name: 'Bandeja de ensalada de frutas' }).should('be.visible')
    }
    Bandeja_de_ensalada_de_frutas_Url(){
        cy.findByText('Bandeja de ensalada de frutas').should('be.visible').click();
    }
    Bandeja_de_macarrones_con_queso_Img(){
        cy.findByRole('img', { name: 'Bandeja de macarrones con queso' }).should('be.visible')
    }
    Bandeja_de_macarrones_con_queso_Url(){
        cy.findByText('Bandeja de macarrones con queso').should('be.visible').click();
    }
    Bandeja_de_ensalada_Img(){
        cy.get('[alt="Bandeja de ensalada"]').should('be.visible')
    }
    Bandeja_de_ensalada_Url(){
        cy.xpath("//span[contains(text(),'Bandeja de ensalada')]").eq(1).should('be.visible').click();
    }
    Bandeja_de_galletas_de_choclate_chip_Img(){
        cy.get('[alt="Bandeja de galletas de chocolate chip"]').should('be.visible');
    }
    Bandeja_de_galletas_de_choclate_chip_Url(){
        cy.xpath("//span[contains(text(),'Bandeja de galletas de chocolate chip')]").eq(0).should('be.visible').click();
    }
    Bandeja_de_browine_con_fudge_de_choclate_Img(){
        cy.findByRole('img', { name: 'Bandeja de brownie con fudge de chocolate' }).should('be.visible');
    }
    Bandeja_de_browine_con_fudge_de_choclate_Url(){
        cy.findByText('Bandeja de brownie con fudge de chocolate').should('be.visible').click();
    }
    Bandeja_de_galletas_de_choclate_chip_y_brownie_Img(){
        cy.findByRole('img', { name: 'Bandeja de galletas de chocolate chip y brownie' }).should('be.visible');
    }
    Bandeja_de_galletas_de_choclate_chip_y_brownie_Url(){
        cy.findByText('Bandeja de galletas de chocolate chip y brownie').should('be.visible').click();
    }
    Navigate_to_Main_Courses(){
        cy.findByRole('link', { name: 'Platos principales' }).should('be.visible').click();
    }
    Sandwith_de_Pollo_Img(){
        cy.findByRole('img', { name: 'Sándwich de pollo Chick-fil-A®' }).should('be.visible');
    }
    Sandwith_de_Pollo_Url(){
        //cy.findByText('Sándwich de pollo Chick-fil-A®')
        cy.get('[data-tag="SANDWICH_CFA_CHICKEN"] > .test1 > .item-details > .item-title').should('be.visible').click();
    }
    Sandwich_de_pollo_picante_Img(){
        cy.findByRole('img', { name: 'Sándwich de pollo picante' }).should('be.visible')
    }
    Sandwich_de_pollo_picante_Url(){
        cy.findByText('Sándwich de pollo picante').should('be.visible').click();
    }
    Nuggets_Img(){
        cy.findByRole('img', { name: 'Nuggets Chick-fil-A®' }).should('be.visible')
    }
    Nuggets_Url(){
        cy.xpath("//span[contains(text(),'Nuggets Chick-fil-A')]").eq(0).should('be.visible').click();
    }
    Navigate_to_Catering_Salads(){
        cy.findByRole('link', { name: 'Ensaladas' }).should('be.visible').click();
    }
    Catering_Ensalada_Img(){
        cy.findByRole('img', { name: 'Ensalada Chick-fil-A®' }).should('be.visible')
    }
    Catering_Ensalada_Url(){
        cy.xpath("//span[contains(text(),'Ensalada Chick-fil-A')]").should('be.visible').click();
    }
    Navigate_to_catering_sides_sweets(){
        cy.findByRole('link', { name: 'Acompañamientos & Dulces' }).should('be.visible').click();
    }
    Catering_Sides_Ensalada_de_frutas_Img(){
        cy.findByRole('img', { name: 'Ensalada de frutas' }).should('be.visible')
    }
    Catering_sides_Ensalada_de_frutas_Url(){
        cy.xpath("//span[contains(text(),'Ensalada de frutas')]").eq(1).should('be.visible').click();
    }
    Catering_sides_Ensalada_Img(){
        cy.get('[alt="Ensalada"]').should('be.visible');
    }
    Catering_sides_Ensalada_Url(){
        cy.xpath("//span[contains(text(),'Ensalada')]").eq(4).should('be.visible').click();
    }
    Catering_Waffel_Potato_Chips_Img(){
        cy.findByRole('img', { name: 'Chick-fil-A® Waffle Potatoe Chips' }).should('be.visible')
    }
    Catering_Waffel_Potato_Chips_Url(){
       // cy.findByText('Chick-fil-A® Waffle Potatoe Chips').should('be.visible').click();
       cy.get('[data-tag="CHIPS_WAFFLE"] > .test1 > .item-details > .item-title').should('be.visible').click();
    }
    Catering_Galleta_de_chocolate_chip_Img(){
        cy.findByRole('img', { name: 'Galleta de chocolate chip' }).should('be.visible')
    }
    Catering_Galleta_de_chocolate_chip_Url(){
        cy.findByText('Galleta de chocolate chip').should('be.visible').click();
    }
    Catering_Brownie_con_fudge_de_choclate_Img(){
        cy.findByRole('img', { name: 'Brownie con fudge de chocolate' }).should('be.visible')
    }
    Catering_Brownie_con_fudge_de_choclate_Url(){
        cy.findByText('Brownie con fudge de chocolate').should('be.visible').click();
    }
    VisitDrinksUrl(){
        cy.visit(Cypress.config().baseUrl  + '/catering#beverages')
    }
    Navigate_to_Drinks(){
        cy.get('[href="#beverages"]').should('be.visible').click();
    }
    Catering_Te_frio_con_azucar_galon_Img(){
        cy.findByRole('img', { name: 'Té frío con azúcar, galón' }).should('be.visible')
    }
    Catering_Te_frio_con_azucar_galon_Url(){
        cy.findByText('Té frío con azúcar, galón').should('be.visible').click();
    }
    Catering_Te_frio_sin_azucar_galon_Img(){
        cy.findByRole('img', { name: 'Té frío sin azúcar, galón' }).should('be.visible')
    }
    Catering_Te_frio_sin_azucar_galon_Url(){
        cy.findByText('Té frío sin azúcar, galón').should('be.visible').click();
    }
    Catering_Te_con_sin_azucar_galon_Img(){
        cy.findByRole('img', { name: 'Té con/sin azúcar, galón' }).should('be.visible')
    }
    Catering_Te_con_sin_azucar_galon_Url(){
        cy.findByText('Té con/sin azúcar, galón').should('be.visible').click();
    }
    Catering_Limonada_Chick_fil_A_galon_Img(){
        cy.get('[alt="Limonada Chick-fil-A®, galón"]').should('be.visible')
    }
    Catering_Limonada_Chick_fil_A_galon_Url(){
        cy.xpath("//span[contains(text(),'Limonada Chick-fil-A')]").eq(0).should('be.visible').click();
    }
    Cateroing_Limonada_de_dieta_galon_Img(){
        cy.findByRole('img', { name: 'Limonada de dieta, galón' }).should('be.visible')
    }
    Catering_Limonada_de_dieta_galon_Url(){
        cy.findByText('Limonada de dieta, galón').should('be.visible').click();
    }
    Catering_Limonada_Chick_fil_A_half_limanoda_dieta_galon_Img(){
        cy.findByRole('img', { name: 'Limonada Chick-fil-A® (1/2 limonada , 1/2 dieta), galón' }).should('be.visible')
    }
    Catering_Limonada_Chick_fil_A_half_limanoda_dieta_galon_Url(){
        //cy.findByText('Limonada Chick-fil-A® (1/2 limonada , 1/2 dieta), galón').should('be.visible').click();
        cy.xpath("//span[contains(text(),'Limonada Chick-fil-A')]").eq(1).should('be.visible').click();

    }
    Catering_Sunjoy_galon_half_te_con_azucar_limonada_Img(){
        cy.findByRole('img', { name: 'Sunjoy®, galón (1/2 té con azúcar, 1/2 limonada)' }).should('be.visible')
    }
    Catering_Sunjoy_galon_half_te_con_azucar_limonada_Url(){
        cy.findByText('Sunjoy, galón (1/2 té con azúcar, 1/2 limonada)').should('be.visible').click();
    }
    Catering_Sunjoy_galon_half_te_con_azucar_limonada_de_dieta_Img(){
        cy.findByRole('img', { name: 'Sunjoy®, galón (1/2 té con azúcar, 1/2 limonada de dieta)' }).should('be.visible')
    }
    Catering_Sunjoy_galon_half_te_con_azucar_limonada_de_dieta_Url(){
        cy.findByText('Sunjoy, galón (1/2 té con azúcar, 1/2 limonada de dieta)').should('be.visible').click();
    }
    Catering_Sunjoy_galon_half_te_sin_azucar_limonada_Img(){
        cy.findByRole('img', { name: 'Sunjoy®, galón (1/2 té sin azúcar, 1/2 limonada)' }).should('be.visible')
    }
    Catering_Sunjoy_galon_half_te_sin_azucar_limonada_Url(){
        cy.findByText('Sunjoy, galón (1/2 té sin azúcar, 1/2 limonada)').should('be.visible').click();
    }
    Catering_Sunjoy_galon_half_te_sin_azucar_limonada_de_dieta_Img(){
        cy.findByRole('img', { name: 'Sunjoy®, galón (1/2 té sin azúcar, 1/2 limonada de dieta)' }).should('be.visible')
    }
    Catering_Sunjoy_galon_half_te_sin_azucar_limonada_de_dieta_Url(){
        cy.findByText('Sunjoy, galón (1/2 té sin azúcar, 1/2 limonada de dieta)').should('be.visible').click();
    }
    Catering_Agua_embotelleda_DASANI_Img(){
        cy.findByRole('img', { name: 'Agua embotellada DASANI®' }).should('be.visible')
    }
    Catering_Agua_embotelleda_DASANI_Url(){
       // cy.findByText('Agua embotellada DASANI®').should('be.visible').click();
       cy.xpath("//span[contains(text(),'Agua embotellada DASANI')]").should('be.visible').click();
    }
    Catering_Leche_1_Img(){
        cy.findByRole('img', { name: 'Leche 1%' }).should('be.visible')
    }
    Catering_Leche_1_Url(){
        cy.findByText('Leche 1%').should('be.visible').click();
    }
    Catering_Bolsa_de_hielo_Img(){
        cy.findByRole('img', { name: 'Bolsa de hielo' }).should('be.visible')
    }
    Catering_Bolsa_de_hielo_Url(){
        cy.findByText('Bolsa de hielo').should('be.visible').click();
    }
    Cuchara_Img(){
        cy.get('[alt="Cuchara"]').should('be.visible')
    }
    Chuchara_Url(){
        cy.xpath("//span[contains(text(),'Cuchara')]").should('be.visible').click();
    }
    Cubo_y_cuchara_para_hielo_Img(){
        cy.findByRole('img', { name: 'Cubo y cuchara para hielo' }).should('be.visible')
    }
    Cubo_y_cuchara_para_hielo_Url(){
        cy.findByText('Cubo y cuchara para hielo').should('be.visible').click();
    }
    Judo_de_China_Minute_Maid_Img(){
        cy.findByRole('img', { name: 'Jugo de china Minute Maid®' }).should('be.visible')
    }
    Judo_de_China_Minute_Maid_Url(){
        cy.xpath("//span[contains(text(),'Jugo de china Minute Maid')]").should('be.visible').click();
    }
    Catering_Jugo_de_manzana_Minute_Maid_Img(){
        cy.findByRole('img', { name: 'Jugo de manzana Minute Maid®' }).should('be.visible')
    }
    Catering_Jugo_de_manzana_Minute_Maid_Url(){
        cy.xpath("//span[contains(text(),'Jugo de manzana Minute Maid')]").should('be.visible').click();
    }
    Navigate_to_Packaged_Meals(){
        cy.findByRole('link', { name: 'Comidas Empaquetadas' }).should('be.visible').click();
    }
    Sandwich_de_pollo_Kit_Regular_Img(){
        cy.findByRole('img', { name: 'Sándwich de pollo Chick-fil-A® Kit, regular' }).should('be.visible')
    }
    Sandwich_de_pollo_Kit_Regular_Url(){
        //cy.findByText('Sándwich de pollo Chick-fil-A® Kit, regular').should('be.visible').click();
        cy.xpath("//span[contains(text(),'Sándwich de pollo Chick-fil-A')]").eq(1).should('be.visible').click();
    }
    Sandwich_de_pollo_picante_Kit_Regular_Img(){
        cy.findByRole('img', { name: 'Sándwich de pollo picante Chick-fil-A® Kit' }).should('be.visible')
    }
    Sandwich_de_pollo_picante_Kit_Regular_Url(){
        //cy.findByText('Sándwich de pollo picante Chick-fil-A® Kit').should('be.visible').click();
        cy.xpath("//span[contains(text(),'Sándwich de pollo picante Chick-fil-A')]").should('be.visible').click();
    }
    ct_Nuggets_Kit_Img(){
        cy.findByRole('img', { name: '8 ct Nuggets Chick-fil-A® Kit' }).should('be.visible')
    }
    ct_Nuggets_Kit_Url(){
       // cy.findByText('8 ct Nuggets Chick-fil-A® Kit').should('be.visible').click();
       cy.xpath("//span[contains(text(),'8 ct Nuggets Chick-fil-A')]").should('be.visible').click();
    }
    Navigate_to_See_Personal_Menu(){
        cy.get('[title="View persoanl menu"]').should('be.visible').click();
    }
}

export default Meal;
