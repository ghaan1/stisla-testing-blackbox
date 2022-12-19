/// <reference types="cypress" />

it('userManagement Opened', () => {
    cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click();
    cy.get(':nth-child(2) > .has-dropdown > span').should('have.text','Users Management');
    cy.get(':nth-child(2) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > li > .nav-link').should('have.text','User List').click();
})

it('Cek Isi Navbar User Management', () => {
    cy.get('h1').should('have.text','User List');
    cy.get('.active > a').should('have.text','Dashboard');
    cy.get('.section-header-breadcrumb > :nth-child(2) > a').should('have.text','Components');
    cy.get('.section-header-breadcrumb > :nth-child(3)').should('have.text','Table');
    cy.get('.section-title').should('have.text','User Management');
})

it('Header Table', () => {
    cy.get('h4').should('have.text','User List');
    cy.get('.card-header-action > .btn-icon').contains('Create New User');
    cy.get('.import').contains('Import');
    cy.get('[href="http://127.0.0.1:8000/user-management/export"]').contains('Export User');
    cy.get('.search').contains('Search User');
})

it('Nama Kolom Table', () => {
    cy.get('.table > tbody > :nth-child(1) > :nth-child(1)').should('have.text','#');
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text','Name');
    cy.get('tbody > :nth-child(1) > :nth-child(3)').should('have.text','Email');
    cy.get('tbody > :nth-child(1) > :nth-child(4)').should('have.text','Created At');
    cy.get('tbody > :nth-child(1) > .text-right').should('have.text','Action');
})

// it('Create New User', () => {
//     cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });
//     cy.get('.card-header-action > .btn-icon').click();
// })

