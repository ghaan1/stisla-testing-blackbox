/// <reference types="cypress" />

it('Dashboard Opened', () => {
    cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });
  })
  
it('Cek Isi Dashboard', () => {
    cy.get('h1').should('have.text','Table');
    cy.get('h4').should('have.text','Title');
    cy.get('.active > a').should('have.text','Dashboard');
    cy.get('.section-header-breadcrumb > :nth-child(2) > a').should('have.text','Components');
    cy.get('.section-header-breadcrumb > :nth-child(3)').should('have.text','Table');
})

it('Cek Isi SideBar', () => {
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click();
    cy.get('#sidebar-wrapper > :nth-child(1) > a').should('have.text','Test');
    cy.get(':nth-child(1) > .has-dropdown > span').should('have.text','Dashboard');
    cy.get(':nth-child(2) > .has-dropdown > span').should('have.text','Users Management');
    cy.get(':nth-child(3) > .has-dropdown > span').should('have.text','Role Management');
    cy.get(':nth-child(4) > .has-dropdown > span').should('have.text','Menu Management');
})

it('Klik SideBar', () => {
    cy.get(':nth-child(1) > .has-dropdown > span').click();
    cy.get(':nth-child(2) > .has-dropdown > span').click();
    cy.get(':nth-child(3) > .has-dropdown > span').click();
    cy.get(':nth-child(4) > .has-dropdown > span').click();
    cy.get('.sidebar-show').click();
})

it('Cek Navbar', () => {
    cy.get('.form-control').invoke('attr','placeholder').should('contains','Search');
    cy.get('.nav-link > .d-sm-none').should('have.text','Hi, SuperAdmin');
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('[href="features-profile.html"]').contains('Profile');
    cy.get('[href="features-activities.html"]').contains('Activities');
    cy.get('[href="features-settings.html"]').contains('Setting');
    cy.get('.text-danger').contains('Logout');
})
