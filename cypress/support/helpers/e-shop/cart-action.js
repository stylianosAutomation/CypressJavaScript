/// <reference types="cypress" />

/**
 * Add a product to cart dynamically based on the product name
 * @param {string} productName - exact name visible on the page, e.g., "Sauce Labs Backpack"
 */
const helperAddItem = (productName) =>{
    cy.contains('[data-test="inventory-item-name"]', productName)
    .parents('[data-test="inventory-item"]') // go up to the full product container
    .find('button[data-test^="add-to-cart"]') // find the Add to cart button
    .click();
}

/**
 * Add a product to cart dynamically based on the product name
 * @param {string} productName - exact name visible on the page, e.g., "Sauce Labs Backpack"
 */
export const addProductsToCart = (products) => {

 if (!products || (Array.isArray(products) && products.length === 0)) {
        throw new Error(`No product(s) provided to add to cart`);
    }

    // Ensure we always work with an array
    const productsArray = Array.isArray(products) ? products : [products];

    productsArray.forEach(product => {
        if (!product) {
            throw new Error(`Product name is missing or invalid: ${product}`);
        }
        helperAddItem(product);
    });

  // Validate cart count and navigate to cart
  cy.get('[data-test="shopping-cart-link"]', { timeout: 10000 })
    .scrollIntoView()
    .invoke('text')                    
     .then((text) => {
      const cartCount = parseInt(text.trim(), 10); 
      expect(cartCount).to.eq(productsArray.length); 
  })
    cy.get('[data-test="shopping-cart-link"]', { timeout: 10000 })
    .scrollIntoView()
    .should('be.visible')
    .click()

  cy.get('[data-test="title"]').should("have.text", "Your Cart");
  cy.get('[data-test="checkout"]').should("be.enabled").click();
};

// Register Cypress command
Cypress.Commands.add("addProductsToCart", addProductsToCart);