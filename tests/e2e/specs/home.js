/// <reference types="cypress" />

context('Navigation', () => {
   
  
    it('cy.go() - go back or forward in the browser\'s history', () => {
      // https://on.cypress.io/go
      cy.visit('/')
      cy.get('h1').contains('Welcome to Your Vue.js App')
    })
  })
  