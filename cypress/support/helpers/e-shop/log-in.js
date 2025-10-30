/// <reference types="cypress"/>


export const login = (username,password)=>{
  cy.get('[data-test="login-container"] div.login_wrapper-inner').should('have.class', 'login_wrapper-inner').within(()=>{
    const usernameSelector =  ('[data-test="username"]')
   cy.get(usernameSelector).should('be.empty').type(username)
   cy.get(usernameSelector).should('have.value', username)

   const passwordSelector = ('[data-test="password"]')
   cy.get(passwordSelector).should('be.empty').type(password)
   cy.get(passwordSelector).should('have.value', password)

   const logInButton = ('[data-test="login-button"]')
   cy.get(logInButton).should('be.visible').and('be.enabled')
   cy.get(logInButton).click()
  })

  cy.url().should('match',/inventory/,{timeout:2000})

}


Cypress.Commands.add('login',login)
