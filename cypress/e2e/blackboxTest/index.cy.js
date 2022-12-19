/// <reference types="cypress" />

describe('User can see index page', () => {
    it('Index opened', () => {
      cy.visit("http://127.0.0.1:8000/");
      cy.get('h4').should('have.text','Login');
      cy.get(':nth-child(2) > label').should('have.text','Email');
      cy.get('.control-label').should('have.text','Password');
      cy.get('.float-right').contains('Forgot Password?').and('be.visible');
      cy.get('.btn').contains('Login').and('be.visible');
    })
  })