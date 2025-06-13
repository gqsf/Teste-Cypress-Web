/// <reference types="cypress" />

describe('Dashboard', () => {

// Cenario 1
    it('Efetuar Login', ()  => {
    
        // 1 - Efetuar Login
        cy.visit('https://automationpratice.com.br/login')
        cy.wait 

         // 2 - Preencher email válido
        cy.get('#user').type('teste@gmail.com')

        // 3 - Preencher senha válida
        cy.get('#password').type('123456')
        
        // 4 - Clicar em Login
        cy.get('#btnLogin').click()

        //5 - Clicar em Ok
        cy.get('.swal2-confirm').click()
        cy.wait(2000)

})


// Cenario 2 
it('Validar Dashboard', () => {


    // 1 - Acessar tela da conta
    cy.visit('https://automationpratice.com.br/my-account')

    // 2 - Validar texto Total Orders
    cy.get(':nth-child(1) > .vendor_top_box > h4').should('have.text', 'Total Orders')
    cy.get(':nth-child(1) > .vendor_top_box > h2').should('have.text', '25')


    // 3 - Validar texto Total Delivery 
    cy.get(':nth-child(2) > .vendor_top_box > h4').should('have.text', 'Total Delivery')
    cy.get(':nth-child(2) > .vendor_top_box > h2').should('have.text', '2552')

    // 4 - Validar texto Total Pending
    cy.get(':nth-child(3) > .vendor_top_box > h4').should('have.text', 'Total Pending')
    cy.get(':nth-child(3) > .vendor_top_box > h2').should('have.text', '50')




})


// Cenario 3
it('Validar titulos', ()  =>{


    //1 - Acessar tela da conta
    cy.visit('https://automationpratice.com.br/my-account')

    // 2 - Validar texto Pending Orders
    cy.get(':nth-child(1) > .vendor_order_boxed > h4').should('have.text', 'Pending Orders')

    // 3 - Validar texto All Orders
    cy.get(':nth-child(2) > .vendor_order_boxed > h4').should('have.text', 'All Orders')



})


// Cenario 4 
it('Validar Colunas', () => {

// 1 - Acessar tela da conta
    cy.visit('https://automationpratice.com.br/my-account')

// 2 - Validar coluna Image
    cy.get(':nth-child(1) > .vendor_order_boxed > .table > .thead-light > tr > :nth-child(1)').should('have.text', 'Image')

// 3 - Validar Product Name
    cy.get(':nth-child(1) > .vendor_order_boxed > .table > .thead-light > tr > :nth-child(2)').should('have.text', 'Product Name')

// 4 - Validar Price
    cy.get(':nth-child(1) > .vendor_order_boxed > .table > .thead-light > tr > :nth-child(3)').should('have.text', 'Price')

// 5 - Validar Sales
    cy.get('.thead-light > tr > :nth-child(4)').should('have.text', 'Sales')

// 6 - Validar Order Id
    cy.get(':nth-child(2) > .vendor_order_boxed > .table > .thead-light > tr > :nth-child(1)').should('have.text', 'Order Id')

// 7 - Validar Product Details
    cy.get(':nth-child(2) > .vendor_order_boxed > .table > .thead-light > tr > :nth-child(2)').should('have.text', 'Product Details')

// 8 - Validar Status
    cy.get(':nth-child(2) > .vendor_order_boxed > .table > .thead-light > tr > :nth-child(3)').should('have.text', 'Status')


})



})