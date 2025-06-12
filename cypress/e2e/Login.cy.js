/// <reference types="cypress" />

describe('Login', () => {

    // cenario 1
    it ('Login com sucesso', () =>{
        // 1 - Acessar a tela de login
        cy.visit('https://automationpratice.com.br/login')
        cy.wait 
        
        // 2 - Preencher email válido
        cy.get('#user').type('teste@gmail.com')

        // 3 - Preencher senha válida
        cy.get('#password').type('123456')

        // 4 - validando checkbox
        cy.get('#materialUnchecked').click()

        // 5 - Clicar em Login
        cy.get('#btnLogin').click()
        

        // Deve logar na aplicação e exibir mensagem de sucesso: Login realizado
        cy.get('#swal2-title').should('have.text', 'Login realizado')

    })

    // cenario 2
    it ('Email invalido', () =>{

        // 1 - Acessar a tela de login
        cy.visit('https://automationpratice.com.br/login')
        cy.wait 

        // 2 - Preencher email invalido 
        cy.get('#user').type('123456')

        // 3 - Clicar em Login
        cy.get('#btnLogin').click()
        cy.wait 

        // Sistema deve apresentar a mensagem de alerta
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
        

    })

    // cenario 3
    it  ('Senha invalida', () =>{

        // 1 - Acessar a tela de login
        cy.visit('https://automationpratice.com.br/login')
        

        // 2 - Preencher email valido 
        cy.get('#user').type('teste@gmail.com')

        // 3 - Preencher senha inválida
        cy.get('#password').type('12')

        // 4 - Clicar em login 
        cy.get('#btnLogin').click()
        

        // Sistema deve apresentar a mensagem de alerta
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')

    })

    // Cenario 4 
    it ('Campos vazios', () => {
    
        // 1 - Acessar o site
        cy.visit('https://automationpratice.com.br/')
        cy.wait 

        // 2 - Clicar em logar no top da pagina
        cy.get('.right_list_fix > :nth-child(1) > a').click()

        // 3 - Confirmar que estou na tela de login
        cy.get('.account_form > h3').should('have.text', 'Login')

        // 4 - Clicar no botão login sem informar o email
        cy.get('#btnLogin').click()

        // 5 - Valido a mensagem E-mail inválido
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')

    })


    // Cenario 5
    it ('Validar exibição dos campos E-mail e Senha', () => {

        // 1 - Acessar a tela de login
        cy.visit('https://automationpratice.com.br/login')
        cy.wait 

        // 2 - Confirmo a exibição do campo E-mail
        cy.get('#user').should('exist').and('be.visible');

        // 3 - Confirmo a exibição do campo Senha
        cy.get('#password').should('exist').and('be.visible');


    })

    





})