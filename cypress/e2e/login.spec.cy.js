
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

import {Login} from '../page-objects/Login'




describe('Login Demo', () => {

  const login = new Login()

  it('Login with valid details', () => {

    cy.visit('/')
    login.loginForm('myusername','validpassword')
    cy.contains('Successful, Welcome to Webpage!').should('be.visible');

  })



  it('Login with invalid details', () => {

    cy.visit('/')
    login.loginForm('myusername','wrongpassword')
    cy.get('#errorMessage').should('be.visible');

  })


})



