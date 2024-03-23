import Meal from "../POM/Meal.js";
const Chickfile_meal = new Meal();
describe('visit Meal Page Url', () => {
  before('should visit the chickfil Home page', () => {
    cy.visit('/'); // Cypress will automatically prepend the base URL
  })

  //  it('Navigate to Meal HomePage and check Chicken Sandwich', () => {
  //  Chickfile_meal.NavigateComida();
  //  Chickfile_meal.Sandwich_de_polo_chick_fil_A_Img();
  //  Chickfile_meal.Sandwich_de_polo_chick_fil_A_url();
  //  Chickfile_meal.checkSandwich_de_polo_chick_file_url();
  //  Chickfile_meal.Product_Information();
  //  Chickfile_meal.clickonAdditional();
  //  Chickfile_meal.clickonIngredients();
  //  Chickfile_meal.InsideIngredientsFindArestaurant();
  //  Chickfile_meal.seeRestaurantlocation();
  //  cy.go('back');
  //  })
  //  it('Navigate to Meal HomePage and check deluxe Chicken Sandwich', () => {
  //  Chickfile_meal.MenuUrl();
  //  Chickfile_meal.Sandwich_deluxe_de_polo_chick_fil_A_Img();
  //  Chickfile_meal.Sandwich_deluxe_de_polo_chick_fil_A_url();
  //  Chickfile_meal.Product_Information();
  //  Chickfile_meal.checkLearnMore();
  //  cy.wait(5000);
  //  //Chickfile_meal.check_Nutrition_Allergens_Url();
  // // Chickfile_meal.Heading_Nutrition_Allergens();
  // Chickfile_meal.visit2ndImgUrl();
  // Chickfile_meal.clickonAdditional();
  // Chickfile_meal.clickonIngredients();
  // Chickfile_meal.InsideIngredientsFindArestaurant();
  // Chickfile_meal.seeRestaurantlocation();
  // cy.go('back');
  // cy.wait(3000);
  //  })
  // it('Navigate to Meal HomePage and check spicy Chicken Sandwich', () => {
  // Chickfile_meal.MenuUrl();
  // Chickfile_meal.Sandwich_de_polo_picante_Img();
  // Chickfile_meal.Sandwich_de_polo_picante_url();
  // Chickfile_meal.Product_Information();
  // Chickfile_meal.clickonAdditional();
  // Chickfile_meal.clickonIngredients();
  // Chickfile_meal.InsideIngredientsFindArestaurant();
  // Chickfile_meal.seeRestaurantlocation();
  // Chickfile_meal.closeLocationPopup();
  // Chickfile_meal.checkLearnMore();
  // cy.wait(3000);
  // })
  // it('Navigate to Meal HomePage and check deluxe Spicy Chicken Sandwich', () => {
  // Chickfile_meal.MenuUrl();
  // Chickfile_meal.Sandwich_deluxe_de_pollo_picante_Img();
  // Chickfile_meal.Sandwich_deluxe_de_pollo_picante_url();
  // Chickfile_meal.Product_Information();
  // Chickfile_meal.clickonAdditional();
  // Chickfile_meal.clickonIngredients();
  // Chickfile_meal.InsideIngredientsFindArestaurant();
  // Chickfile_meal.seeRestaurantlocation();
  // Chickfile_meal.closeLocationPopup();
  // Chickfile_meal.checkLearnMore();
  // cy.wait(3000);
  // })
  // it('Navigate to Meal HomePage and check grilled Chicken Sandwich', () => {
  // Chickfile_meal.MenuUrl();
  // Chickfile_meal.Sandwich_deluxe_de_pollo_a_la_parrilla_Img();
  // Chickfile_meal.Sandwich_deluxe_de_pollo_a_la_parrilla_url();
  // Chickfile_meal.Product_Information();
  // Chickfile_meal.clickonAdditional();
  // Chickfile_meal.clickonIngredients();
  // Chickfile_meal.InsideIngredientsFindArestaurant();
  // Chickfile_meal.seeRestaurantlocation();
  // Chickfile_meal.closeLocationPopup();
  // Chickfile_meal.checkLearnMore();
  // cy.wait(3000);
  // })
  // it('Navigate to Meal HomePage and check grilled club Sandwich', () => {
  // Chickfile_meal.MenuUrl();
  // Chickfile_meal.Club_sándwich_a_la_parrilla_Img();
  // Chickfile_meal.Club_sándwich_a_la_parrilla_url();
  // Chickfile_meal.Product_Information();
  // Chickfile_meal.clickonAdditional();
  // Chickfile_meal.clickonIngredients();
  // Chickfile_meal.InsideIngredientsFindArestaurant();
  // Chickfile_meal.seeRestaurantlocation();
  // Chickfile_meal.closeLocationPopup();
  // Chickfile_meal.checkLearnMore();
  // cy.wait(3000);
  // })
  // it('Navigate to Meal HomePage and check Nuggets', () => {
  // Chickfile_meal.MenuUrl();
  // Chickfile_meal.Nuggets_Chick_fil_A_Img();
  // Chickfile_meal.Nuggets_Chick_fil_A_url();
  // Chickfile_meal.Product_Information();
  // Chickfile_meal.clickonAdditional();
  // Chickfile_meal.clickonIngredients();
  // Chickfile_meal.InsideIngredientsFindArestaurant();
  // Chickfile_meal.seeRestaurantlocation();
  // Chickfile_meal.closeLocationPopup();
  // Chickfile_meal.checkLearnMore();
  // cy.wait(3000);
  // })
  // it('Navigate to Meal HomePage and check grilled Nuggets', () => {
  // Chickfile_meal.MenuUrl();
  // Chickfile_meal.Nuggets_a_la_Parrilla_Img();
  // Chickfile_meal.Nuggets_a_la_Parrilla_url();
  // Chickfile_meal.Product_Information();
  // Chickfile_meal.clickonAdditional();
  // Chickfile_meal.clickonIngredients();
  // Chickfile_meal.InsideIngredientsFindArestaurant();
  // Chickfile_meal.seeRestaurantlocation();
  // Chickfile_meal.closeLocationPopup();
  // Chickfile_meal.checkLearnMore();
  // Chickfile_meal.MenuUrl();
  // cy.wait(5000);
  //  })

  // it('Navigate to Meal and check the Breakfast ', () => {
  //    Chickfile_meal.MenuUrl();
  //    Chickfile_meal.NavigateComida();
  //    Chickfile_meal.Navigate_to_Breakfast();
  //    Chickfile_meal.Breakfast_Url();
  // })
  // it('check weather the chicken Biscuit image is visible and can able to naviagate or not ', () => {
  //    Chickfile_meal.MenuUrl();
  //    Chickfile_meal.NavigateComida();
  //    Chickfile_meal.Navigate_to_Breakfast();
  //    Chickfile_meal.Biscuit_Con_Pollo_Img();
  //    Chickfile_meal.Biscuit_Con_Pollo_Url();
  //    Chickfile_meal.Check_Biscuit_con_url();
  //    Chickfile_meal.Product_Information();
  //    Chickfile_meal.clickonAdditional();
  //    Chickfile_meal.clickonIngredients();
  //    Chickfile_meal.InsideIngredientsFindArestaurant();
  //    Chickfile_meal.seeRestaurantlocation();
  //    Chickfile_meal.closeLocationPopup();
  //    Chickfile_meal.checkLearnMore();
  //    cy.wait(5000);
  // })
  // it('check weather the Chick-n-Minis image is visible and can able to naviagate or not ', () => {
  //    Chickfile_meal.MenuUrl();
  //    Chickfile_meal.NavigateComida();
  //    Chickfile_meal.Navigate_to_Breakfast();
  //    Chickfile_meal.Chick_n_minis_Img();
  //    Chickfile_meal.Chick_n_minis_Url();
  //    Chickfile_meal.Check_chick_n_minis_url();
  //    Chickfile_meal.Product_Information();
  //    Chickfile_meal.clickonAdditional();
  //    Chickfile_meal.clickonIngredients();
  //    Chickfile_meal.InsideIngredientsFindArestaurant();
  //    Chickfile_meal.seeRestaurantlocation();
  //    Chickfile_meal.closeLocationPopup();
  //    Chickfile_meal.checkLearnMore();
  //    cy.wait(5000);
  // })
  // it('check weather the Breakfast burrito image is visible and can able to naviagate or not ', () => {
  //    Chickfile_meal.MenuUrl();
  //    Chickfile_meal.NavigateComida();
  //    Chickfile_meal.Navigate_to_Breakfast();
  //    Chickfile_meal.Burrito_de_desayuno_Img();
  //    Chickfile_meal.Burrito_de_desayuno_Url();
  //    Chickfile_meal.Check_Burrito_de_desayuno_url();
  //    Chickfile_meal.Product_Information();
  //    Chickfile_meal.clickonAdditional();
  //    Chickfile_meal.clickonIngredients();
  //    Chickfile_meal.InsideIngredientsFindArestaurant();
  //    Chickfile_meal.seeRestaurantlocation();
  //    Chickfile_meal.closeLocationPopup();
  //    Chickfile_meal.checkLearnMore();
  //    cy.wait(5000);
  // })
  // it('check weather the Biscuit with chicken,egg and cheese image is visible and can able to naviagate or not ', () => {
  //    Chickfile_meal.MenuUrl();
  //    Chickfile_meal.NavigateComida();
  //    Chickfile_meal.Navigate_to_Breakfast();
  //    Chickfile_meal.Biscuit_con_pollo_huevo_y_queso_Img();
  //    Chickfile_meal.Biscuit_con_pollo_huevo_y_queso_Url();
  //    Chickfile_meal.Check_Biscuit_con_pollo_huevo_y_queso_url();
  //    Chickfile_meal.Product_Information();
  //    Chickfile_meal.clickonAdditional();
  //    Chickfile_meal.clickonIngredients();
  //    Chickfile_meal.InsideIngredientsFindArestaurant();
  //    Chickfile_meal.seeRestaurantlocation();
  //    Chickfile_meal.closeLocationPopup();
  //    Chickfile_meal.checkLearnMore();
  //    cy.wait(5000);
  // })
  // it('check weather the Biscuit with bacon,egg and cheese image is visible and can able to naviagate or not ', () => {
  //    Chickfile_meal.MenuUrl();
  //    Chickfile_meal.NavigateComida();
  //    Chickfile_meal.Navigate_to_Breakfast();
  //    Chickfile_meal.Biscuit_con_tocineta_huevo_y_queso_Img();
  //    Chickfile_meal.Biscuit_con_tocineta_huevo_y_queso_Url();
  //    Chickfile_meal.Check_Biscuit_con_tocineta_huevo_y_queso_url();
  //    Chickfile_meal.Product_Information();
  //    Chickfile_meal.clickonAdditional();
  //    Chickfile_meal.clickonIngredients();
  //    Chickfile_meal.InsideIngredientsFindArestaurant();
  //    Chickfile_meal.seeRestaurantlocation();
  //    Chickfile_meal.closeLocationPopup();
  //    Chickfile_meal.checkLearnMore();
  //    cy.wait(5000);
  // })
  // it('check weather the Biscuit with sausage,egg and cheese image is visible and can able to naviagate or not ', () => {
  //    Chickfile_meal.MenuUrl();
  //    Chickfile_meal.NavigateComida();
  //    Chickfile_meal.Navigate_to_Breakfast();
  //    Chickfile_meal.Biscuit_con_salchicha_huevo_y_queso_Img();
  //    Chickfile_meal.Biscuit_con_salchicha_huevo_y_queso_Url();
  //    Chickfile_meal.Check_Biscuit_con_salchicha_huevo_y_queso_url();
  //    Chickfile_meal.Product_Information();
  //    Chickfile_meal.clickonAdditional();
  //    Chickfile_meal.clickonIngredients();
  //    Chickfile_meal.InsideIngredientsFindArestaurant();
  //    Chickfile_meal.seeRestaurantlocation();
  //    Chickfile_meal.closeLocationPopup();
  //    Chickfile_meal.checkLearnMore();
  //    cy.wait(5000);
  // })
  // it('check weather the Breakfast image is visible and can able to naviagate or not ', () => {
  //    Chickfile_meal.MenuUrl();
  //    Chickfile_meal.NavigateComida();
  //    Chickfile_meal.Navigate_to_Breakfast();
  //    Chickfile_meal.Plato_de_desayuno_Chick_fil_A_Img();
  //    Chickfile_meal.Plato_de_desayuno_Chick_fil_A_Url();
  //    Chickfile_meal.Check_Plato_de_desayuno_url();
  //    Chickfile_meal.Product_Information();
  //    Chickfile_meal.clickonAdditional();
  //    Chickfile_meal.clickonIngredients();
  //    Chickfile_meal.InsideIngredientsFindArestaurant();
  //    Chickfile_meal.seeRestaurantlocation();
  //    Chickfile_meal.closeLocationPopup();
  //    Chickfile_meal.checkLearnMore();
  //    cy.wait(5000);
  // })
  // it('check weather the Hash Browns image is visible and can able to naviagate or not ', () => {
  //    Chickfile_meal.MenuUrl();
  //    Chickfile_meal.NavigateComida();
  //    Chickfile_meal.Navigate_to_Breakfast();
  //    Chickfile_meal.Hash_browns_Img();
  //    Chickfile_meal.Hash_browns_Url();
  //    Chickfile_meal.Check_Hash_browns__url();
  //    Chickfile_meal.Product_Information();
  //    Chickfile_meal.clickonAdditional();
  //    Chickfile_meal.clickonIngredients();
  //    Chickfile_meal.InsideIngredientsFindArestaurant();
  //    Chickfile_meal.seeRestaurantlocation();
  //    Chickfile_meal.closeLocationPopup();
  //    Chickfile_meal.checkLearnMore();
  //    cy.wait(5000);
  // })
  // it('check weather the fruit salad image is visible and can able to naviagate or not ', () => {
  //    Chickfile_meal.MenuUrl();
  //    Chickfile_meal.NavigateComida();
  //    Chickfile_meal.Navigate_to_Breakfast();
  //    Chickfile_meal.Ensalada_de_frutas_Img();
  //    Chickfile_meal.Ensalada_de_frutas_Url();
  //    Chickfile_meal.check_Ensalada_de_frutas_url();
  //    Chickfile_meal.Product_Information();
  //    Chickfile_meal.clickonIngredients();
  //    Chickfile_meal.InsideIngredientsFindArestaurant();
  //    Chickfile_meal.seeRestaurantlocation();
  //    Chickfile_meal.closeLocationPopup();
  //    Chickfile_meal.checkLearnMore();
  //    cy.wait(5000);
  // })
  // it('check weather the Breakfast Breads is visible and can able to naviagate or not ', () => {
  //    Chickfile_meal.MenuUrl();
  //    Chickfile_meal.NavigateComida();
  //    Chickfile_meal.Navigate_to_Breakfast();
  //    Chickfile_meal.Panes_de_desayuno_Img();
  //    Chickfile_meal.Panes_de_desayuno_Url();
  //    Chickfile_meal.Check_Panes_de_desayuno__url();
  //   })

  //   it('Navigate to Salads page and can able to check the page is working properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Ensaladas_url();
  //     Chickfile_meal.Check_Ensaladas_url();
  //   })
  //   it('check weather the chick-fil-A Salad image is visible and can able to naviagate ', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Ensaladas_url();
  //     Chickfile_meal.Ensalada_chick_fil_a_Img();
  //     Chickfile_meal.Ensalada_chick_fil_a_url();
  //     Chickfile_meal.check_Ensalada_chick_fil_A_url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //   })
  //   it('Navigate to Accompaniments and check the page is working properly or not', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Acompanamientos();
  //     Chickfile_meal.check_Acompanamientos_url();
  //   })
  //   it('check waffle fries Img is visible and can able to Navigate properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Acompanamientos();
  //     Chickfile_meal.Papas_Fritas_Waffle_Img();
  //     Chickfile_meal.Papas_Fritas_Waffle_url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     cy.wait(3000);
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('check waffle fries Img is visible and can able to Navigate properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Acompanamientos();
  //     Chickfile_meal.Ensalada_de_fruta_img();
  //     Chickfile_meal.Ensalada_de_fruta_url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('check Fruit Salad Img is visible and can able to Navigate properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Acompanamientos();
  //     Chickfile_meal.Ensalada_Img();
  //     Chickfile_meal.Ensalada_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('check Salad Img is visible and can able to Navigate properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Acompanamientos();
  //     Chickfile_meal.Maccarrones_con_queso_Img();
  //     Chickfile_meal.Maccarrones_con_queso_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('check Macaroni and cheese Img is visible and can able to Navigate properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Acompanamientos();
  //     Chickfile_meal.Sopa_de_pollo_Img();
  //     Chickfile_meal.Sopa_de_pollo_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //   })
  //   it('check Macaroni and cheese Img is visible and can able to Navigate properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Acompanamientos();
  //     Chickfile_meal.chicken_soup_Img();
  //     Chickfile_meal.chicken_soup_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //   })
  //   it('Navigate to Meals for Children Page', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Comidas_para_ninos_Url()
  //     Chickfile_meal.check_Comidas_para_ninos_Url();
  //   })
  //   it('In meals for childrens page,Navigate Kids combo 5 nuggests item', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Comidas_para_ninos_Url()
  //     Chickfile_meal.Combo_nino_5_nuggets_Img();
  //     Chickfile_meal.Combo_nino_5_nuggets_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('In meals for childrens page,Navigate Kids combo 5 grilled nuggests item', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Comidas_para_ninos_Url();
  //     Chickfile_meal.Combo_nino_5_nuggets_a_la_parrilla_Img();
  //     Chickfile_meal.Combo_nino_5_nuggets_a_la_parrilla_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(5000);
  //   })

  //   it('Navigate to sweets Page', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dulces();
  //     Chickfile_meal.check_Dulces_Url();
  //   })
  //   it('In sweets page, access the Mango Passion Fruit Froasted Lemonade drink Image and check the ingredients inside of it ', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dulces();
  //     Chickfile_meal.Limanada_Frosted_de_Mango_Parcha_bebidas_Img();
  //     Chickfile_meal.Limanada_Frosted_de_Mango_Parcha_bebidas_Url();
  //     Chickfile_meal.check_Limanada_Frosted_de_Mango_Parcha_bebidas_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('In sweets page, access the Froasted Lemonade Image and check the ingredients inside of it ', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dulces();
  //     Chickfile_meal.Limonada_Frosted_Img();
  //     Chickfile_meal.Limonada_Frosted_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('In sweets page, access the choclate chip cookie Image and check the ingredients inside of it ', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dulces();
  //     Chickfile_meal.Galleta_de_chocolate_chip_Img();
  //     Chickfile_meal.Galleta_de_chocolate_chip_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('In sweets page, access the Browine with choclate fudge Image and check the ingredients inside of it ', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dulces();
  //     Chickfile_meal.Brownie_con_fudge_de_choclate_Img();
  //     Chickfile_meal.Brownie_con_fudge_de_choclate_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('In sweets page, access the Cookies and cream shake Image and check the ingredients inside of it ', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dulces();
  //     Chickfile_meal.Batida_de_cookies_cream_Img();
  //     Chickfile_meal.Batida_de_cookies_cream_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('In sweets page, access the choclate shake Image and check the ingredients inside of it ', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dulces();
  //     Chickfile_meal.Batida_de_Chocolate_Img();
  //     Chickfile_meal.Batida_de_Chocolate_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('In sweets page, access the Strwaberry Milk Shake Image and check the ingredients inside of it ', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dulces();
  //     Chickfile_meal.Batida_de_fresa_Img();
  //     Chickfile_meal.Batida_de_fresa_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('In sweets page, access the Vanilla shake Image and check the ingredients inside of it ', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dulces();
  //     Chickfile_meal.Batida_de_vainilla_Img();
  //     Chickfile_meal.Batida_de_vainilla_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('In sweets page, access the Icedream Cone Image and check the ingredients inside of it ', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dulces();
  //     Chickfile_meal.Cono_Icedream_Img();
  //     Chickfile_meal.Cono_Icedream_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('In sweets page, access the Icedream glass Image and check the ingredients inside of it ', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dulces();
  //     Chickfile_meal.Vaso_Icedream_Img();
  //     Chickfile_meal.Vaso_Icedream_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(5000);
  //   })

  //   it('Navigate to drinks Page', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.check_Bebidas_url();
  //   })
  //   it('Check we can able to Navigate Sunjoy Mango Parcha drinks', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Sunjoy_de_Mango_Parcha_bebidas_Img();
  //     Chickfile_meal.Sunjoy_de_Mango_Parcha_bebidas_Url();
  //     Chickfile_meal.check_Sunjoy_de_Mango_Parcha_bebidas_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate Cold Tea with Sugar', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Te_frio_con_azucar_Img();
  //     Chickfile_meal.Te_frio_con_azucar_Url();
  //     Chickfile_meal.check_Te_frio_con_azucar_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate Cold Tea without Sugar', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Te_frio_sin_azucar_Img();
  //     Chickfile_meal.Te_frio_sin_azucar_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate Lemonade', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Limonada_Chick_fil_A_Img();
  //     Chickfile_meal.Limonada_Chick_fil_A_Url();
  //     Chickfile_meal.check_Limonada_Chick_fil_A_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate to diet Lemonada', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Limonada_de_dieta_Chick_fil_A_Img();
  //     Chickfile_meal.Limonada_de_dieta_Chick_fil_A_Url();
  //     Chickfile_meal.check_Limonada_de_dieta_Chick_fil_A_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate sunjoy(1/2 tea with Sugar,1/2 Lemanode', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Sunjoy_Te_con_limonada_Img();
  //     Chickfile_meal.Sunjoy_Te_con_limonada_Url();
  //     Chickfile_meal.check_Sunjoy_Te_con_limonada_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate sunjoy(1/2 Tea with sugar,1/2 diet Lemanode', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Sunjoy_Te_con_limonada_de_dieta_Img();
  //     Chickfile_meal.Sunjoy_Te_con_limonada_de_dieta_Url();
  //     Chickfile_meal.check_Sunjoy_Te_con_limonada_de_dieta_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate sunjoy(1/2 unsweetened Tea,1/2 Lemanode', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Sunjoy_té_sin_azúcar_limonada_Img();
  //     Chickfile_meal.Sunjoy_té_sin_azúcar_limonada_Url();
  //     Chickfile_meal.check_Sunjoy_té_sin_azúcar_limonada_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate to sunjoy(1/2 unsweetened Tea,1/2 diet Lemanode', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Sunjoy_Te_sin_limonada_de_dieta_Img();
  //     Chickfile_meal.Sunjoy_Te_sin_limonada_de_dieta_Url();
  //     Chickfile_meal.check_Sunjoy_Te_sin_limonada_de_dieta_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate to cold coffee', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Cafe_frio_Img();
  //     Chickfile_meal.Cafe_frio_Url();
  //     Chickfile_meal.check_Cafe_frio_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonAdditional();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate Coca Cola', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Coca_Cola_Img();
  //     Chickfile_meal.Coca_Cola_Url();
  //     Chickfile_meal.check_Coca_Cola_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate to dasani water bottle', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Agua_embotellada_DASANI_Img();
  //     Chickfile_meal.Agua_embotellada_DASANI_Url();
  //     Chickfile_meal.check_Agua_embotellada_DASANI_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate Milk product', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Leche_Img();
  //     Chickfile_meal.Leche_Url();
  //     Chickfile_meal.check_Leche_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
    
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate Gallon product', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Galon_Img();
  //     Chickfile_meal.Galon_Url();
  //     Chickfile_meal.check_Galon_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate ice products', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Productos_de_hielo_Img();
  //     Chickfile_meal.Productos_de_hielo_Url();
  //     Chickfile_meal.check_Productos_de_hielo_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate Minute Maid Apple Juice product ', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Jugo_de_manzana_Minute_Maid_Img();
  //     Chickfile_meal.Jugo_de_manzana_Minute_Maid_Url();
  //     Chickfile_meal.check_Jugo_de_manzana_Minute_Maid_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate Minute Maid Chinese Juice product ', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Jugo_de_china_Minute_Maid_Img();
  //     Chickfile_meal.Jugo_de_china_Minute_Maid_Url();
  //     Chickfile_meal.check_Jugo_de_china_Minute_Maid_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate American product ', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Americano_Img();
  //     Chickfile_meal.Americano_Url();
  //     Chickfile_meal.check_Americano_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Check we can able to Navigate Chopped up product ', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Cortado_Img();
  //     Chickfile_meal.Cortado_Url();
  //     Chickfile_meal.check_Cortado_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //     it('Check we can able to Navigate Espresso product ', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_To_Bebidas();
  //     Chickfile_meal.Espresso_Img();
  //     Chickfile_meal.Espresso_Url();
  //     Chickfile_meal.check_Espresso_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(5000);
  //   })
  //   it('Navigate to Dippinmg Sauces and Dressings', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
  //     Chickfile_meal.check_Dipping_Salsas_Url();
  //   })
  //   it('Navigate to BBQ sauce and check it is navigating properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
  //     Chickfile_meal.Salsa_BBQ_Img();
  //     Chickfile_meal.Salsa_BBQ_link();
  //     Chickfile_meal.check_Salsa_BBQ_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Navigate to Chick fil A Sauce and check it is navigating properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
  //     Chickfile_meal.Salsa_Chick_fil_A_Img();
  //     Chickfile_meal.Salsa_Chick_fil_A_link();
  //     Chickfile_meal.check_Salsa_Chick_fil_A_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Navigate to Garden Herb Ranch Sauce and check it is navigating properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
  //     Chickfile_meal.Salsa_Garden_Herb_Ranch_Img();
  //     Chickfile_meal.Salsa_Garden_Herb_Ranch_link();
  //     Chickfile_meal.check_Salsa_Garden_Herb_Ranch_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //   it('Navigate to Honey Mustard Sauce and check it is navigating properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
  //     Chickfile_meal.Salsa_Honey_Mustard_Img();
  //     Chickfile_meal.Salsa_Honey_Mustard_link();
  //     Chickfile_meal.check_Salsa_Honey_Mustard_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //   })
  //     it('Navigate to Polynesian Sauce and check it is navigating properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
  //     Chickfile_meal.Salsa_Polynesian_Img();
  //     Chickfile_meal.Salsa_Polynesian_link();
  //     Chickfile_meal.check_Salsa_Polynesian_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //     })
  //     it('Navigate to Sweet and spicy Sriracha Sauce and check it is navigating properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
  //     Chickfile_meal.Salsa_Sweet_and_Spicy_Sriracha_Img();
  //     Chickfile_meal.Salsa_Sweet_and_Spicy_Sriracha_link();
  //     Chickfile_meal.check_Salsa_Sweet_and_Spicy_Sriracha_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //     })
  //     it('Navigate to Zesty Buffalo Sauce and check it is navigating properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
  //     Chickfile_meal.Salsa_Zesty_Buffalo_Img();
  //     Chickfile_meal.Salsa_Zesty_Buffalo_link();
  //     Chickfile_meal.check_Salsa_Zesty_Buffalo_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //     })
  //     it('Navigate to Honey Roasted BBQ Sauce and check it is navigating properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
  //     Chickfile_meal.Salsa_Honey_Roasted_BBQ_Img();
  //     Chickfile_meal.Salsa_Honey_Roasted_BBQ_link();
  //     Chickfile_meal.check_Salsa_Honey_Roasted_BBQ_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //     })
  //     it('Navigate to Avocado Lime Ranch Dressing and check it is navigating properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
  //     Chickfile_meal.Aderezo_Avocado_Lime_Ranch_Img();
  //     Chickfile_meal.Aderezo_Avocado_Lime_Ranch_link();
  //     Chickfile_meal.check_Aderezo_Avocado_Lime_Ranch_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //     })
  //     it('Navigate to Fat Free Honey Mustard Dressing and check it is navigating properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
  //     Chickfile_meal.Aderezo_Fat_Free_Honey_Mustard_Img();
  //     Chickfile_meal.Aderezo_Fat_Free_Honey_Mustard_link();
  //     Chickfile_meal.check_Aderezo_Fat_Free_Honey_Mustard_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //     })
  //     it('Navigate to Garden Herb Ranch Dressing and check it is navigating properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
  //     Chickfile_meal.Aderezo_Garden_Herb_Ranch_Img();
  //     Chickfile_meal.Aderezo_Garden_Herb_Ranch_link();
  //     Chickfile_meal.check_Aderezo_Garden_Herb_Ranch_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //     })
  //     it('Navigate to Light Balsamic Vinaigrette Dressing and check it is navigating properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
  //     Chickfile_meal.Aderezo_Light_Balsamic_Vinaigrette_Img();
  //     Chickfile_meal.Aderezo_Light_Balsamic_Vinaigrette_link();
  //     Chickfile_meal.check_Aderezo_Light_Balsamic_Vinaigrette_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //     cy.wait(3000);
  //     })
  //     it('Navigate to Zesty Apple Cider Vinaigrette Dressing and check it is navigating properly', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
  //     Chickfile_meal.Aderezo_Zesty_Apple_Cider_Vinaigrette_Img();
  //     Chickfile_meal.Aderezo_Zesty_Apple_Cider_Vinaigrette_link();
  //     Chickfile_meal.check_Aderezo_Zesty_Apple_Cider_Vinaigrette_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     Chickfile_meal.seeRestaurantlocation();
  //     Chickfile_meal.closeLocationPopup();
  //     Chickfile_meal.checkLearnMore();
  //   })

  //   it('Navigate to Catering',() => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Check_Catering_Url();
  //   })
  //   it('Navigate to Catering and see weather Chicken Sandwitch item is working properly',() => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Sandwitch_de_Pollo_Chick_fil_A_Img();
  //     Chickfile_meal.Sandwitch_de_Pollo_Chick_fil_A_link();
  //     Chickfile_meal.check_Sandwitch_de_pollo_Chick_fil_A_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     // Chickfile_meal.seeRestaurantlocation();
  //     // Chickfile_meal.closeLocationPopup();
  //     cy.go('back');
  //     cy.wait(3000);
  //   })
  //   it('Navigate to Catering and see weather Chicken Sandwitch item is working properly',() => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Sandwitch_de_pollo_picante_Img();
  //     Chickfile_meal.Sandwitch_de_pollo_picante_link();
  //     Chickfile_meal.check_Sandwitch_de_pollo_picante_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     // Chickfile_meal.seeRestaurantlocation();
  //     // Chickfile_meal.closeLocationPopup();
  //     cy.go('back');
  //     cy.wait(3000);
  //   })
  //   it('Navigate to Catering and see weather Nuggets item is working properly',() => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Nuggets_Chick_fil_Img();
  //     Chickfile_meal.Nuggets_Chick_fil_link();
  //     Chickfile_meal.check_Nuggets_Chick_fil_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //     // Chickfile_meal.seeRestaurantlocation();
  //     // Chickfile_meal.closeLocationPopup();
  //   })
  //   it('check the breakfast in Catering', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Navigate_To_Catering_Breakfast();
  //     Chickfile_meal.Check_Catering_Breakfast_Url();
  //   })
  //   it('check the breakfast item in a tray of mini chicken under Catering is working or not', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Navigate_To_Catering_Breakfast();
  //     Chickfile_meal.Bandeja_de_chick_n_Minis_Img();
  //     Chickfile_meal.Bandeja_de_chick_n_Minis_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //   })
  //   it('check the breakfast item Chicken Biscuit under Catering is working or not', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Navigate_To_Catering_Breakfast();
  //     Chickfile_meal.Biscuit_con_pollo_Img();
  //     Chickfile_meal.Biscuit_con_pollo_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //   })
  //   it('check the breakfast item Biscuit with Bacon under Catering is working or not', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Navigate_To_Catering_Breakfast();
  //     Chickfile_meal.Biscuit_con_tocineta_Img();
  //     Chickfile_meal.Biscuit_con_tocineta_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //   })
  //   it('check the breakfast item Biscuit with Sausage under Catering is working or not', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Navigate_To_Catering_Breakfast();
  //     Chickfile_meal.Biscuit_con_salchicha_Img();
  //     Chickfile_meal.Biscuit_con_salchicha_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //   })
  //   it('check the breakfast item Biscuit under Catering is working or not', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Navigate_To_Catering_Breakfast();
  //     Chickfile_meal.Biscuit_Img();
  //     Chickfile_meal.Biscuit_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //   })
  //   it('check the breakfast item Fruit Salad under Catering is working or not', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Navigate_To_Catering_Breakfast();
  //     Chickfile_meal.Catering_Ensalada_de_frutas_Img();
  //     Chickfile_meal.Catering_Ensalada_de_frutas_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //   })
  //   it('Navigate to Trays under Catering', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Navigate_to_Trays();
  //   })
  //   it('check the Tray items with filled of Grilled Chicken,Bundle under Trays in Catering is working or not', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Navigate_to_Trays();
  //     Chickfile_meal.Pollo_a_la_parilla_Bundle_Img();
  //     Chickfile_meal.Pollo_a_la_parilla_Bundle_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //   })
  //   it('check the Nugget Tray under Trays in Catering is working or not', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Navigate_to_Trays();
  //     Chickfile_meal.Bandeja_de_nugget_Img();
  //     Chickfile_meal.Bandeja_de_nugget_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //   })
  //   it('check the Cold Nugget Tray under Trays in Catering is working or not', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Navigate_to_Trays();
  //     Chickfile_meal.Bandeja_de_nugget_fria_Img();
  //     Chickfile_meal.Bandeja_de_nugget_fria_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //   })
  //   it('check the Fruit Salad Tray under Trays in Catering is working or not', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Navigate_to_Trays();
  //     Chickfile_meal.Bandeja_de_ensalada_de_frutas_Img();
  //     Chickfile_meal.Bandeja_de_ensalada_de_frutas_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //   })
  //   it('check the Macaroni and Cheese Platter under Trays in Catering is working or not', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Navigate_to_Trays();
  //     Chickfile_meal.Bandeja_de_macarrones_con_queso_Img();
  //     Chickfile_meal.Bandeja_de_macarrones_con_queso_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //   })
  //   it('check the Salad tray under Trays in Catering is working or not', () => {
  //     Chickfile_meal.MenuUrl();
  //     Chickfile_meal.NavigateComida();
  //     Chickfile_meal.Navigate_to_Catering();
  //     Chickfile_meal.Navigate_to_Trays();
  //     Chickfile_meal.Bandeja_de_ensalada_Img();
  //     Chickfile_meal.Bandeja_de_ensalada_Url();
  //     Chickfile_meal.Product_Information();
  //     Chickfile_meal.clickonIngredients();
  //     Chickfile_meal.InsideIngredientsFindArestaurant();
  //   })

    it('check the Choclate chip cookie tray under Trays in catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Trays();
      Chickfile_meal.Bandeja_de_galletas_de_choclate_chip_Img();
      Chickfile_meal.Bandeja_de_galletas_de_choclate_chip_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('check the Choclate Fudge Brownie cookie tray under Trays in catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Trays();
      Chickfile_meal.Bandeja_de_browine_con_fudge_de_choclate_Img();
      Chickfile_meal.Bandeja_de_browine_con_fudge_de_choclate_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('check the Choclate Chip and Brownie cookie tray under Trays in catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Trays();
      Chickfile_meal.Bandeja_de_galletas_de_choclate_chip_y_brownie_Img();
      Chickfile_meal.Bandeja_de_galletas_de_choclate_chip_y_brownie_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('Navigate to Main course under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Main_Courses();
    })

    it('see weather Chicken sandwitch is available and working under main courses of catering ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Main_Courses();
      Chickfile_meal.Sandwith_de_Pollo_Img();
      Chickfile_meal.Sandwith_de_Pollo_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather Spicy Chicken sandwitch is available and working under main courses of catering ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Main_Courses();
      Chickfile_meal.Sandwich_de_pollo_picante_Img();
      Chickfile_meal.Sandwich_de_pollo_picante_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather  Nuggets is available and working under main courses of catering ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Main_Courses();
      Chickfile_meal.Nuggets_Img();
      Chickfile_meal.Nuggets_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('Navigate to salads under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Catering_Salads(); 
    })
    it('Check the chick fil A salad is working under salds of Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Catering_Salads();
      Chickfile_meal.Catering_Ensalada_Img();
      Chickfile_meal.Catering_Ensalada_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('Navigate to Sides and Sweets under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_catering_sides_sweets(); 
    })
    it('see weather the Fruit salad is working and navigating under sides and sweets of Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_catering_sides_sweets();
      Chickfile_meal.Catering_Sides_Ensalada_de_frutas_Img();
      Chickfile_meal.Catering_sides_Ensalada_de_frutas_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the salad is working and navigating under sides and sweets of Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_catering_sides_sweets();
      Chickfile_meal.Catering_sides_Ensalada_Img();
      Chickfile_meal.Catering_sides_Ensalada_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the item waffle potato chips is working and navigating under sides and sweets of Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_catering_sides_sweets();
      Chickfile_meal.Catering_Waffel_Potato_Chips_Img();
      Chickfile_meal.Catering_Waffel_Potato_Chips_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the item Chocolate chip cookie is working and navigating under sides and sweets of Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_catering_sides_sweets();
      Chickfile_meal.Catering_Galleta_de_chocolate_chip_Img();
      Chickfile_meal.Catering_Galleta_de_chocolate_chip_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the item Brownie with Chocolate fudge is working and navigating under sides and sweets of Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_catering_sides_sweets();
      Chickfile_meal.Catering_Brownie_con_fudge_de_choclate_Img();
      Chickfile_meal.Catering_Brownie_con_fudge_de_choclate_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('Navigate to Drinks under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks(); 
    })
    it('see weather the Cold tea with sugar,gallon is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Te_frio_con_azucar_galon_Img();
      Chickfile_meal.Catering_Te_frio_con_azucar_galon_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Unsweeted Cold tea ,gallon is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Te_frio_sin_azucar_galon_Img();
      Chickfile_meal.Catering_Te_frio_sin_azucar_galon_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the tea with/without sugar ,gallon is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.VisitDrinksUrl();
      Chickfile_meal.Catering_Te_con_sin_azucar_galon_Img();
      Chickfile_meal.Catering_Te_con_sin_azucar_galon_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Lemonade ,gallon is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.VisitDrinksUrl();
      Chickfile_meal.Catering_Limonada_Chick_fil_A_galon_Img();
      Chickfile_meal.Catering_Limonada_Chick_fil_A_galon_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Diet Lemonade ,gallon is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Cateroing_Limonada_de_dieta_galon_Img();
      Chickfile_meal.Catering_Limonada_de_dieta_galon_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Lemonade(1/2 Lemonade,1/2 diet) ,gallon is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Limonada_Chick_fil_A_half_limanoda_dieta_galon_Img();
      Chickfile_meal.Catering_Limonada_Chick_fil_A_half_limanoda_dieta_galon_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Sunjoy,gallon(1/2 Tea with sugar,1/2 lemonade) is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Sunjoy_galon_half_te_con_azucar_limonada_Img();
      Chickfile_meal.Catering_Sunjoy_galon_half_te_con_azucar_limonada_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Sunjoy,gallon(1/2 Tea with sugar,1/2 diet lemonade) is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Sunjoy_galon_half_te_con_azucar_limonada_de_dieta_Img();
      Chickfile_meal.Catering_Sunjoy_galon_half_te_con_azucar_limonada_de_dieta_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Sunjoy,gallon(1/2 Unsweetened tea,1/2 lemonade) is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Sunjoy_galon_half_te_sin_azucar_limonada_Img();
      Chickfile_meal.Catering_Sunjoy_galon_half_te_sin_azucar_limonada_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Sunjoy,gallon(1/2 Unsweetened tea,1/2 diet lemonade) is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Sunjoy_galon_half_te_sin_azucar_limonada_de_dieta_Img();
      Chickfile_meal.Catering_Sunjoy_galon_half_te_sin_azucar_limonada_de_dieta_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the DASANI bottled water is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Agua_embotelleda_DASANI_Img();
      Chickfile_meal.Catering_Agua_embotelleda_DASANI_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Milk is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Leche_1_Img();
      Chickfile_meal.Catering_Leche_1_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Bag of ice is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Bolsa_de_hielo_Img();
      Chickfile_meal.Catering_Bolsa_de_hielo_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Spoon is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      cy.wait(3000);
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Cuchara_Img();
      Chickfile_meal.Chuchara_Url();
      Chickfile_meal.Product_Information();
      
    })
    it('see weather the Ice bucket and Spoon is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Cubo_y_cuchara_para_hielo_Img();
      Chickfile_meal.Cubo_y_cuchara_para_hielo_Url();
      Chickfile_meal.Product_Information();
    })
    it('see weather the Minute Maid Chinese Juice is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Judo_de_China_Minute_Maid_Img();
      Chickfile_meal.Judo_de_China_Minute_Maid_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Minute Maid Apple Juice is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Jugo_de_manzana_Minute_Maid_Img();
      Chickfile_meal.Catering_Jugo_de_manzana_Minute_Maid_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('Navigate to Packaged Meals under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Packaged_Meals(); 
    })

    it('see weather the Chicken Sandwich Kit regular is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Packaged_Meals();
      Chickfile_meal.Sandwich_de_pollo_Kit_Regular_Img();
      Chickfile_meal.Sandwich_de_pollo_Kit_Regular_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the spicy Chicken Sandwich Kit regular is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Packaged_Meals();
      Chickfile_meal.Sandwich_de_pollo_picante_Kit_Regular_Img();
      Chickfile_meal.Sandwich_de_pollo_picante_Kit_Regular_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the 8 ct Chick-fil-A Nuggets Kit regular is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Packaged_Meals();
      Chickfile_meal.ct_Nuggets_Kit_Img();
      Chickfile_meal.ct_Nuggets_Kit_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('Navigate to see personal menu under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_See_Personal_Menu(); 
    })

})