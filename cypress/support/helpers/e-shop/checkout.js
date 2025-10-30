/// <reference types="cypress"/>

const { generateUser } = require('../../utils.js');


export const checkoutForm = ()=>{

 const personalData = generateUser();

cy.get('[data-test="firstName"]')
  .type(personalData.firstName)
  .should('have.value', personalData.firstName);

cy.get('[data-test="lastName"]')
  .type(personalData.lastName)
  .should('have.value', personalData.lastName);

cy.get('[data-test="postalCode"]').type(personalData.zipCode)
 .should('have.value', personalData.zipCode);

cy.get('[data-test="continue"]').should('be.enabled').click();

}

export const validationCheckout = () => {
 
    cy.get('[data-test="payment-info-value"]').invoke("text").then((cartDetails)=>{
      const  cartId = cartDetails.toString() 
      cy.writeFile('.cypress/fixtures/cartCofirmation.json', {'Confirmation Cart':cartId})
      cy.log(`Order has been sumbitted succesfully with ${cartId}`)
    });
    cy.get('[data-test="shipping-info-value"]').invoke("text").then((shipmentInfo)=>{
        const delirevyConfirmation = shipmentInfo.toString()
        cy.writeFile('.cypress/fixures/deliveryOption.json',{"Delivery will be":delirevyConfirmation})
    })
    cy.get('[data-test="subtotal-label"]').click();
    cy.get('[data-test="tax-label"]').click();
    cy.get('[data-test="total-label"]').click();
    cy.get('[data-test="finish"]').should('be.enabled').click();
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
}

Cypress.Commands.add('checkoutForm',checkoutForm)
Cypress.Commands.add('validationCheckout',validationCheckout)