/// <reference types="cypress" />

describe('Menu Lateral', () => {


 // Cenario 1
    it('Cadastrar usuario', ()  => {

        // 1 - Acessar a tela de login
        cy.visit('https://automationpratice.com.br/login')
        cy.wait 

      // 2 - Clicar em ainda não tem cadastro?
      cy.get('#createAccount').click()

      // 3 - Preencher campo Nome
      cy.get('#user').type('Guilherme Queiroz')

      // 4 - Preencher campo E-mail
      cy.get('#email').type('teste@gmail.com')

      // 5 - Preencher campo Senha
      cy.get('#password').type('1234567')

      // 6 - Clicar em Cadastrar 
      cy.get('#btnRegister').click()
      

      // 7 - Validar texto cadastro realizado
      cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')

      // 8 - Clicar em OK
      cy.get('.swal2-confirm').click()

})






})