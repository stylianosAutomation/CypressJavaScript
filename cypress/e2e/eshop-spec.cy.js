/// <reference types="cypress"/>
/// <reference path="../support/helpers/e-shop/log-in.js" />
/// <reference path="../support/helpers/e-shop/cart-action.js" />
/// <reference path="../support/helpers/e-shop/checkout.js" />


import { urlHook } from "../support/hooks/url-set-up";
import { users } from "../fixtures/users";;

const { url } = urlHook( "production" , "sauce")

describe('Regression Testing - E-shop', () => {
  beforeEach((
  )=>{
    cy.clearAllCookies()
    cy.clearAllSessionStorage()
  })
  it('DVTAS-01 :  Ensure Log in Functionality as a Standard User - E-shop', () => {
    cy.visit(url)
    cy.login(users.usersEshop.standard.username, users.usersEshop.standard.password)
  })
  it('DVTAS-02 :  Ensure Log in Functionality as a Visual User - E-shop', () => {
    cy.visit(url)
    cy.login(users.usersEshop.visual.username, users.usersEshop.visual.password)
  })
  it('DVTAS-03 : Purchace first Product in Cart - Checkout ', () => {
    cy.visit(url)
    cy.login(users.usersEshop.visual.username, users.usersEshop.visual.password)
    cy.addProductsToCart(productList.items.backpack.name)
    cy.checkoutForm()
    cy.validationCheckout()
  })
  it('DVTAS-04: Add Multiple Products in Cart - Checkout', () => { 
    cy.visit(url)
    cy.login(users.usersEshop.visual.username, users.usersEshop.visual.password)
    cy.addProductsToCart([productList.items.backpack.name,productList.items.bikelight.name,productList.items.tshirt.name])
    cy.checkoutForm()
    cy.validationCheckout()
  })
  })

