/// <reference types="cypress" />

describe('Menu Lateral', () => {


 // Cenario 1
    it('Acessar menu lateral', ()  => {

        // 1 - Acessar a tela de login
        cy.visit('https://automationpratice.com.br/login')
        cy.wait 

        // 2 - Acessar menu lateral
        cy.get(':nth-child(4) > .offcanvas-toggle').click()         
        
        // 3 - Validar a exibição da Home
        cy.get('#menuHomeText').should('exist').and('be.visible');

        // 4 - Validar a exibição do SHOP
        cy.get('#menuShopText').should('exist').and('be.visible');

        // 4 - Validar a exibição do Pages
        cy.get('#menupagesText').should('exist').and('be.visible');

        // 5 - Fechar menu lateral
        cy.get('#mobile-menu-offcanvas > .offcanvas-header > .offcanvas-close').click()


})






})