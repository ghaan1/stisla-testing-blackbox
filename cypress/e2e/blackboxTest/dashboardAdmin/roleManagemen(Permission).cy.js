/// <reference types="cypress" />


   it('Permission List Open', () => {
        cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });
        cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click();
        cy.get(':nth-child(3) > .has-dropdown > span').should('have.text','Role Management').click();
        cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').contains('Permission List').click();
    })

    it('Navbar Permission List', ()=> {
        cy.get('h1').should('have.text','Roles and Permissions');
        cy.get('.active > a').should('have.text','Dashboard');
        cy.get('.section-header-breadcrumb > :nth-child(2) > a').should('have.text','Components');
        cy.get('.section-header-breadcrumb > :nth-child(3)').should('have.text','Table');
        cy.get('.section-title').should('have.text','Permission Management');
    })
    
      it('Testing Create Permission List', () => {
        cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });
        cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click();
        cy.get(':nth-child(3) > .has-dropdown > span').should('have.text','Role Management').click();
        cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').contains('Permission List').click();
        cy.get('h4').should('have.text','Permission List')
        cy.get('.card-header-action > .btn-icon').click();
        cy.get('#name').type('test.create1234');
        cy.get('#guard_name').clear();
        cy.get('#guard_name').type('web');
        cy.get('.btn-primary').click();
        cy.get('p').should('have.text','Permission Created Successfully');
        cy.wait(100);
       })

       it('Testing Update Permission List', () => {
        cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });
        cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click();
        cy.get(':nth-child(3) > .has-dropdown > span').should('have.text','Role Management').click();
        cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').contains('Permission List').click();
        cy.get(':nth-child(5) > .page-link').click();
        cy.get(':nth-child(9) > .text-right > .d-flex > .btn-info').click();
        cy.get('.section-title').should('have.text','Permission Edit');
        cy.get('h4').should('have.text','Permission Edit Form');
        cy.get('#name').clear();
        cy.get('#guard_name').clear();
        cy.get('#name').type('test.edit2');
        cy.get('#guard_name').type('web13');
        cy.get('.btn-primary').click();
        cy.get('p').should('have.text','Permission Updated Successfully');
        cy.wait(100);
      })

      it('Testing Delete Roles List',() => {
        cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });
        cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click();
        cy.get(':nth-child(3) > .has-dropdown > span').should('have.text','Role Management').click();
        cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').contains('Permission List').click();
        cy.get(':nth-child(5) > .page-link').click();
        cy.get(':nth-child(9) > .text-right > .d-flex > .ml-2 > .btn').click();
        cy.get('p').should('have.text','Permission Deleted Successfully');
      })
