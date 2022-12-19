/// <reference types="cypress" />

// it('Role Management Opened', () => {
//     cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });
//     cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click();
//     cy.get(':nth-child(3) > .has-dropdown > span').should('have.text','Role Management');
//     cy.get(':nth-child(3) > .has-dropdown > span').click();
// })

// it('Role List Open', () =>{
//     cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });
//     cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click();
//     cy.get(':nth-child(3) > .has-dropdown > span').should('have.text','Role Management').click();
//     cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').contains('Role List').click();
// })

// it('Permission List Open', () =>{
//     cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });
//     cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click();
//     cy.get(':nth-child(3) > .has-dropdown > span').should('have.text','Role Management').click();
//     cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').contains('Permission List').click();
// })

// it('Permission To Role', () =>{
//     cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });
//     cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click();
//     cy.get(':nth-child(3) > .has-dropdown > span').should('have.text','Role Management').click();
//     cy.get('.dropdown-menu > :nth-child(3) > .nav-link').contains('Permission To Role').click();
// })

it('User To Role', () =>{
    cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click();
    cy.get(':nth-child(3) > .has-dropdown > span').should('have.text','Role Management').click();
    cy.get('.dropdown-menu > :nth-child(4) > .nav-link').contains('User To Role').click();
    cy.get('.card-header-action > .btn').click();
    cy.get('.select2-selection__arrow')
    .select('SuperAdmin', { force: true })
    .invoke('val')
    .should('eq', 'SuperAdmin')
})