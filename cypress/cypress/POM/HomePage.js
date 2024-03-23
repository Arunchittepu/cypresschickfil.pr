class homePage
{
chickfil_Logo(){
    return cy.get('[href="/"]').should('be.visible').click();
}
Visit_Homepage_Url(){
    cy.visit(Cypress.config().baseUrl)
}
Locations(){
    return cy.findByRole('link', {  name: 'Ubicaciones'}).click();
}
checkLocationsUrl(){
    cy.url().should('eq',Cypress.config().baseUrl + '/locations')
}
VisitoneLocation(){
    return cy.findByRole('heading', {  name: 'Ubicaciones'}).should('be.visible');
}
visitsobre_nosotros(){
return cy.get('[title="Sobre nosotros"]').should('be.visible').click();
}
checksobre_nosotrosPge(){
return cy.get('[class="article-details"]').should('be.visible');
}
Visitcomida(){
    return cy.get('[title="Comida"]').should('be.visible').click();
}
checkcomidaUrl(){
    return cy.url().should('eq',Cypress.config().baseUrl  + '/menu');
}
checkinsideMenu(){
    return cy.get('[role="alert"]').should('be.visible');
}
clickOnoportunidades_de_empleo(){
return cy.get('[title="Oportunidades de empleo"]').eq(0).should('be.visible').click()
}
viewoportunidades_de_empleo_Url(){
    cy.url().should('eq',Cypress.config().baseUrl  + '/oportunidades-de-empleo')
}
viewInside_oportunidades_de_empleo(){
    cy.findByRole('heading', { Name: 'Oportunidades de empleo'}).should('be.visible')
}
mangoPassionImg(){
    cy.get('[class="tiled-img"]').should('be.visible');
}
checkCoverText(){
    cy.xpath("//h1[contains(text(),'Le subes dos. Le bajas dos')]").should('be.visible');
}
ClickOnNuestroMenu(){
    cy.get('[alt="Bag Icon"]').should('be.visible').click({force: true});
}
visitExploreMenu(){
    cy.url().should('eq',Cypress.config().baseUrl  + '/menu');
}
seeMenuchickFil(){
    cy.get('[class="menu-availability-callout"]').should('be.visible');
}
Visit2Img(){
    cy.get('[class="g-round-card__inner"]').eq(0).should('be.visible');
}
Visit2ImgURL(){
    cy.findByRole('link', { name: 'Chick-fil-A concede las primeras becas True Inspiration Awards en Puerto Rico' }).click();
}
check2ImgUrl(){
    cy.url().should('eq',Cypress.config().baseUrl  + '/Chick-fil-A-concede-las-primeras-becas-True-Inspiration-Awards-en-Puerto-Rico');
}
InsideMenu(){
    cy.get('[class="story-top"]').should('be.visible');
}
clickonLeemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(0).click();
}
Visit3Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Mango%20Passion%20Sunjoy/CFA14300_Winter24_SpicyDeluxeMPSunjoy_On-white1_original.jpg?h=960&w=1440&la=es-PR"]').should('be.visible');
}
clickOn3Imglink(){
    cy.findByRole('link', {  name: 'Pronóstico de Invierno de Chick-fil-A: Soleado, con Probabilidad de Mangó Parcha'}).click();
}
seeInsideImg3heading(){
    cy.findByRole('heading', {  name: 'Pronóstico de Invierno de Chick-fil-A: Soleado, con Probabilidad de Mangó Parcha'}).should('be.visible');
}
clickon2Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(1).click();
}
visit4Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Header%20image-.jpg?h=960&w=1440&la=es-PR"]').should('be.visible');
}
clickon4Img(){
    cy.findByRole('link', {  name: 'Se nombra a la primera becaria de ‘Chick-fil-A Remarkable Futures’ en Puerto Rico'}).click();
}
check4Url(){
    cy.url().should('eq',Cypress.config().baseUrl  + '/se-nombra-a-la-primera-becaria-de-chick-fil-a-remarkable-futures-en-puerto-rico');
}
seeInsideImg4heading(){
    cy.findByRole('heading', {  name: 'Se nombra a la primera becaria de ‘Chick-fil-A Remarkable Futures’ en Puerto Rico'}).should('be.visible');
}
clickon3Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(2).click();
}
visitImg5(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Reina%20del%20Sur/Reina%20del%20Sur_7_11zon.jpg?h=960&w=1440&la=es-PR"]').should('be.visible');
}
visitImg5link(){
cy.findByRole('link', { name: 'Chick-fil-A anuncia el primer restaurante en Ponce, que abrirá el 5 de octubre' }).should('be.visible').click();
}
viewImg5heading(){
    cy.findByRole('heading', {  name: 'Chick-fil-A anuncia el primer restaurante en Ponce, que abrirá el 5 de octubre'}).should('be.visible');
}
clickon4Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(3).click();
}
visitImg6(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Presentando%20a%20Mingo%20Burgos/Reina%20del%20Sur_1_11zon.jpg?h=960&w=1440&la=es-PR"]').should('be.visible');
}
visitImg6link(){
    cy.findByRole('link', {  name: 'Presentando a Mingo Burgos: Un ponceño que regresó a casa para crear oportunidades y cambiar vidas como Propietario/Operador de Chick\-fil-A Reina del Sur'}).should('be.visible').click();
}
viewImg6heading(){
    cy.findByRole('heading', {  name: 'Presentando a Mingo Burgos: Un ponceño que regresó a casa para crear oportunidades y cambiar vidas como Propietario/Operador de Chick\-fil-A Reina del Sur'}).should('be.visible');
}
clickon5Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(4).click();
}
visitImg7(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/CCM/CFA2303006_Fall23_CaramelMilkshake_Beauty2_PR_ChickenWire_1440x960.jpg_master.jpg?h=960&w=1440&la=es-PR"]').should('be.visible');
}
clickonImg7link(){
    cy.findByRole('link', {  name: 'Los sabores de caramelo se añaden al menú'}).should('be.visible').click();
}
viewImg7heading(){
    cy.findByRole('heading', {  name: 'Los sabores de caramelo se añaden al menú'}).should('be.visible');
}
clickon6Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(5).click();
}
visit8Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Breakfast/Breakfast-Platter-Chicken_1x1.jpg_master.jpg?h=965&w=1440&la=es-PR"]').should('be.visible');
}
clickonImg8link(){
    cy.findByRole('link', {  name: 'Manañas mejoradas: Sirviendo desayuno de Chick\-fil\-A'}).should('be.visible').click();
}
viewImg8heading(){
    cy.findByRole('heading', {  name: 'Manañas mejoradas: Sirviendo desayuno de Chick\-fil\-A'}).should('be.visible');
}
clickon7Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(6).click();
}
visit9Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/catering%20pr/Catering%20Lifestyle%20Image%20-%20Chick-fil-A®%20Nuggets%20Tray%202%201_master.jpg?h=628&w=1200&la=es-PR"]').should('be.visible');
}
clickonImg9link(){
    cy.findByRole('link', {  name: 'Presentando Chick-fil-A Catering'}).should('be.visible').click();
}
viewImg9heading(){
    cy.findByRole('heading', {  name: 'Presentando Chick-fil-A Catering'}).should('be.visible');
}
clickon8Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(7).click();
}
visit10Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Cows/Eat%20Mor%20Chikin%20Three%20Color%20Cows_master_11zon.png?h=958&w=1436&la=es-PR"]').should('be.visible');
}
clickonImg10link(){
    cy.findByRole('link', {  name: 'Celebrando las Vacas'}).should('be.visible').click();
}
viewImg10heading(){
    cy.findByRole('heading', {  name: 'Celebrando las Vacas'}).should('be.visible');
}
clickon9Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(8).click();
}
visit11Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Peach%20beverages%20through%20the%20years/CFA2301007_Smmer23_PeachMilkshake_Lifestyle4_ChickenWire_1440x960_11zon.jpg?h=960&w=1440&la=es-PR"]').should('be.visible');
}
clickonImg11link(){
    cy.findByRole('link', {  name: 'El verano ya está aquí y las bebidas de melocotón también'}).should('be.visible').click();
}
viewImg11heading(){
    cy.findByRole('heading', {  name: 'El verano ya está aquí y las bebidas de melocotón también'}).should('be.visible');
}
clickon10Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(9).click();
}
visit12Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Peach%20Milkshake%20story/PMWPSJJointPhoto-PR.jpg?h=960&w=1440&la=es-PR"]').should('be.visible');
}
clickonImg12link(){
    cy.findByRole('link', {  name: 'Qué nunca nos falte el verano ni el melocotón: Chick-fil-A apuesta por este sabor característico del verano'}).should('be.visible').click();
}
viewImg12heading(){
    cy.findByRole('heading', {  name: 'Qué nunca nos falte el verano ni el melocotón: Chick-fil-A apuesta por este sabor característico del verano'}).should('be.visible');
}
clickon11Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(10).click();
}
visit13Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Family%20Activity%20Guide/WMS_Lifestyle_1_CW_1440x960_11zon.jpg?h=960&w=1440&la=es-PR"]').should('be.visible');
}
clickonImg13link(){
    cy.findByRole('link', {  name: 'Tu lista de cosas que hacer en primavera: Guía de actividades para toda la familia'}).should('be.visible').click();
}
viewImg13heading(){
    cy.findByRole('heading', {  name: 'Tu lista de cosas que hacer en primavera: Guía de actividades para toda la familia'}).should('be.visible');
}
clickon12Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(11).click();
}
visit14Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Juan%20Morales/CFA%20Hatillo%20_Operator_11zon.jpg?h=960&w=1443&la=es-PR"]').should('be.visible');
}
clickonImg14link(){
    cy.findByRole('link', {  name: 'Presentando a Juan Olivo, al nuevo Propietario/Operador de Chick-fil-A Hatillo'}).should('be.visible').click();
}
viewImg14heading(){
    cy.findByRole('heading', {  name: 'Presentando a Juan Olivo, al nuevo Propietario/Operador de Chick-fil-A Hatillo'}).should('be.visible');
}
clickon13Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(12).click();
}
visit15Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Juan%20Morales/CFA%20Hatillo%20_2_11zon.jpg?h=962&w=1440&la=es-PR"]').should('be.visible');
}
clickonImg15link(){
    cy.findByRole('link', {  name: 'Chick-fil-A Abrirá su primer restaurante en Hatillo el 27 de abril'}).should('be.visible').click();
}
viewImg15heading(){
    cy.findByRole('heading', {  name: 'Chick-fil-A Abrirá su primer restaurante en Hatillo el 27 de abril'}).should('be.visible');
}
clickon14Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(13).click();
}
visit16Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Winter23-CW-Meal-Header_1440x960.jpg?h=960&w=1440&la=es-PR"]').should('be.visible');
}
clickonImg16link(){
    cy.findByRole('link', {  name: 'Sándwich de pollo original Chick-fil-A'}).should('be.visible').click();
}
viewImg16heading(){
    cy.findByRole('heading', {  name: 'Sándwich de pollo original Chick-fil-A'}).should('be.visible');
}
clickon15Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(14).click();
}
visit17Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Six%20Reasons%20to%20add%20chocolate%20chip%20brownie%20to%20your%20order/large-Chocolate-Fudge-Brownie-Puerto-Rico-CW-story.jpg?h=854&w=1280&la=es-PR"]').should('be.visible');
}
clickonImg17link(){
    cy.findByRole('link', {  name: '6 razones por las cuales tienes que añadir nuestro Brownie con fudge de chocolate a tu orden'}).should('be.visible').click();
}
viewImg17heading(){
    cy.findByRole('heading', {  name: '6 razones por las cuales tienes que añadir nuestro Brownie con fudge de chocolate a tu orden'}).should('be.visible');
}
clickon16Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(15).click();
}
visit18Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Humacao/CFA%20Humacao%20_Operator.jpg?h=960&w=1446&la=es-PR"]').should('be.visible');
}
clickonImg18link(){
    cy.findByRole('link', {  name: 'Presentamos a Cris Romero: El inspirador viaje del nuevo Propietario/Operador de Chick-fil-A en Puerto Rico'}).should('be.visible').click();
}
viewImg18heading(){
    cy.findByRole('heading', {  name: 'Presentamos a Cris Romero: El inspirador viaje del nuevo Propietario/Operador de Chick-fil-A en Puerto Rico'}).should('be.visible');
}
clickon17Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(16).click();
}
visit19Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Humacao/CFA%20Humacao%20_header.jpg?h=960&w=1442&la=es-PR"]').should('be.visible');
}
clickonImg19link(){
    cy.findByRole('link', {  name: 'Chick-fil-A Abrirá en Humacao el 15 de Septiembre'}).should('be.visible').click();
}
viewImg19heading(){
    cy.findByRole('heading', {  name: 'Chick-fil-A Abrirá en Humacao el 15 de Septiembre'}).should('be.visible');
}
clickon18Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(17).click();
}
visit20Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Grade%20A/CFAPR%20GO-6.jpg?h=960&w=1440&la=es-PR"]').should('be.visible');
}
clickonImg20link(){
    cy.findByRole('link', {  name: '¿De dónde viene la "A" de Chick-fil-A?'}).should('be.visible').click();
}
viewImg20heading(){
    cy.findByRole('heading', {  name: '¿De dónde viene la "A" de Chick-fil-A?'}).should('be.visible');
}
clickon19Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(18).click();
}
visit21Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Updated%20Stories%20Images%20Fall%202022/large-Three-female-Team-Members-smiling-in-the-restaurant.jpg?h=853&w=1280&la=es-PR"]').should('be.visible');
}
clickonImg21link(){
    cy.findByRole('link', {  name: 'Chick-fil-A Puerto Rico: conoce nuestros valores y cultura'}).should('be.visible').click();
}
viewImg21heading(){
    cy.findByRole('heading', {  name: 'Chick-fil-A Puerto Rico: conoce nuestros valores y cultura'}).should('be.visible');
}
clickon20Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(19).click();
}
visit22Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/June%20Press%20Release/CFA%20Puerto%20Rico_June_PR.jpg?h=959&w=1440&la=es-PR"]').should('be.visible');
}
clickonImg22link(){
    cy.findByRole('link', {  name: 'El segundo restaurante Chick-fil-A en Puerto Rico abrirá el jueves 23 de junio de 2022'}).should('be.visible').click();
}
viewImg22heading(){
    cy.findByRole('heading', {  name: 'El segundo restaurante Chick-fil-A en Puerto Rico abrirá el jueves 23 de junio de 2022'}).should('be.visible');
}
clickon21Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(20).click();
}
visit23Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Xiomara%20Profile/Xiomara%20Family_content%20tile.jpeg?h=883&w=1131&la=es-PR"]').should('be.visible');
}
clickonImg23link(){
    cy.findByRole('link', {  name: 'Conoce a la segunda Operadora de Chick-fil-A en Puerto Rico'}).should('be.visible').click();
}
viewImg23heading(){
    cy.findByRole('heading', {  name: 'Conoce a la segunda Operadora de Chick-fil-A en Puerto Rico: Xiomara González-López'}).should('be.visible');
}
clickon22Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(21).click();
}
visit24Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Updated%20Stories%20Images%20Fall%202022/large-Four-people-smiling-and-sitting-at-Chick-fil-A-restaurant-booth.jpg?h=853&w=1280&la=es-PR"]').should('be.visible');
}
clickonImg24link(){
    cy.findByRole('link', {  name: 'Encuentra el plato que te traerá una sonrisa en tu nuevo restaurante Chick-fil-A local'}).should('be.visible').click();
}
viewImg24heading(){
    cy.findByRole('heading', {  name: 'Encuentra el plato que te traerá una sonrisa en tu nuevo restaurante Chick-fil-A local'}).should('be.visible');
}
clickon23Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(22).click();
}
visit25Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Food%20Bank%20Story/Check_1440x960.jpg?h=960&w=1440&la=es-PR"]').should('be.visible');
}
clickonImg25link(){
    cy.findByRole('link', {  name: 'Juntos, combatiendo el hambre: El primer restaurante Chick-fil-A® en Puerto Rico se asocia con el Banco de Alimentos de Puerto Rico'}).should('be.visible').click({force: true});
}
viewImg25heading(){
    cy.findByRole('heading', {  name: 'Juntos, combatiendo el hambre: El primer restaurante Chick-fil-A® en Puerto Rico se asocia con el Banco de Alimentos de Puerto Rico'}).should('be.visible');
}
clickon24Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(23).click();
}
visit26Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Los_Filtros_Exterior_new.jpg?h=745&w=1440&la=es-PR"]').should('be.visible');
}
clickonImg26link(){
    cy.findByRole('link', {  name: 'El primer restaurante Chick-fil-A en Puerto Rico abrirá el jueves, 3 de marzo de 2022'}).should('be.visible').click({force: true});
}
viewImg26heading(){
    cy.findByRole('heading', {  name: 'El primer restaurante Chick-fil-A en Puerto Rico abrirá el jueves, 3 de marzo de 2022'}).should('be.visible');
}
clickon25Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(24).click({force: true});
}
visit27Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/WhoWeAre.jpg?h=960&w=1440&la=es-PR"]').should('be.visible');
}
clickonImg27link(){
    cy.get('[href="/sobre-nosotros"]').eq(2).should('be.visible').click({force: true});
}
viewImg27heading(){
    cy.xpath("//h1[contains(text(),'Sobre nosotros')]").should('be.visible');
   // cy.findByRole('heading', { name:'Sobre nosotros'}).eq(8).should('be.visible');
}
clickon26Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(25).click({force: true});
}
visit28Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Yareli.jpg?h=850&w=1275&la=es-PR"]').should('be.visible');
}
clickonImg28link(){
   // cy.findByRole('link', {  name: 'Oportunidades de empleo'}).eq(2).should('be.visible').click();
   cy.xpath("//a[contains(text(),'Oportunidades de empleo')]").should('be.visible').click({force: true});
}
viewImg28heading(){
    cy.findByRole('heading', {name: 'Oportunidades de empleo'}).should('be.visible');
}
clickon27Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(26).click();
}
visit29Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Updated%20Stories%20Images%20Fall%202022/large-Team-Members-smiling-at-drive-thru-window.jpg?h=853&w=1280&la=es-PR"]').should('be.visible');
}
clickonImg29link(){
    cy.findByRole('link', {  name: 'Detrás del servi-carro de Chick-fil-A'}).should('be.visible').click({force: true});
}
viewImg29heading(){
    cy.findByRole('heading', {  name: 'Detrás del servi-carro de Chick-fil-A'}).should('be.visible');
}
clickon28Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(27).click();
}
visit30Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Caitlin%20Chavez%20Story/Caitlin_I_Heart_PR.jpg?h=952&w=1200&la=es-PR"]').should('be.visible');
}
clickonImg30link(){
    cy.findByRole('link', {  name: 'Te presentamos a Caitlin Chávez, la primera Operadora en Puerto Rico'}).should('be.visible').click({force: true});
}
viewImg30heading(){
    cy.xpath("//h1[contains(text(),'De Team Member de Restaurantes Chick-fil-A a Propietaria/Operadora: Te presentamos a Caitlin Chávez, la primera Operadora en Puerto Rico')]").should('be.visible');
}
clickon29Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(28).click();
}
visit31Img(){
    cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFAPR/Stories/Coffee%20Story/210707_CFA_PRICO_Group4_beans_0036.jpg?h=614&w=1050&la=es-PR"]').should('be.visible');
}
clickonImg31link(){
    cy.xpath("//a[contains(text(),'Del Grano a la Taza: Chick-fil-A® ofrecerá café 100% de origen local en los restaurantes de Puerto Rico')]").should('be.visible').click();
}
viewImg31heading(){
    cy.xpath("//h1[contains(text(),'Del Grano a la Taza: Chick-fil-A')]").should('be.visible');
}
clickon30Leemass(){
    cy.xpath("//a[contains(text(),'Lee mas')]").eq(29).click();
}

}
export default homePage;
