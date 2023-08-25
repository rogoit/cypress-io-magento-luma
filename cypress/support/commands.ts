// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

Cypress.Commands.add('addFirstItemToBasket', () => {
  cy.log('TESTIFY add first item to basket');
  cy.get('li[class="item product product-item"]').first().should('be.visible').click();
  cy.get('[title="In den Warenkorb"]').should('be.visible').and('not.be.disabled').click();
  cy.go('back');
});

Cypress.Commands.add('sortByPrice', () => {
  cy.log('TESTIFY sort by price');
  cy.get('#sorter').should('be.visible').select('price');
});

Cypress.Commands.add('switchSortingDirection', () => {
  cy.log('TESTIFY switch sorting direction');
  cy.get('[data-role="direction-switcher"]').should('be.visible').click();
});

Cypress.Commands.add('searchForWordAndValidate', (searchword) => {
  cy.log('TESTIFY search for word and validate');
  cy.get('#minisearch-input-top-search')
    .should('be.visible')
    .type(searchword + '{enter}');
  cy.get('[data-ui-id="page-title-wrapper"]')
    .should('be.visible')
    .should('have.text', 'Suchergebnisse für: "' + searchword + '"');
});

Cypress.Commands.add('doLogin', (email, password) => {
  cy.log('TESTIFY do login');
  cy.get('[class="header links"]').contains('Anmelden').should('be.visible').click();
  cy.get('#email').should('be.visible').type(email);
  cy.get('[class="field password required"]')
    .first()
    .should('be.visible')
    .find('#pass')
    .type(password + '{enter}');
});

Cypress.Commands.add('setListLimitAndValidate', (limit) => {
  cy.log('TESTIFY set list limit and validate');
  cy.get('#limiter').should('be.visible').select(limit);
  cy.get('#limiter > [selected="selected"]').should('contain.text', limit);
  cy.get('li[class="item product product-item"]').its('length').should('be.lte', Number(limit));
});

Cypress.Commands.add('paginationValidation', () => {
  // Validates first product on first page is different to first product on second page
  cy.log('TESTIFY pagination validation');
  cy.get('[class="item product product-item"]')
    .first()
    .should('be.visible')
    .find('a.product-item-link')
    .invoke('text')
    .then((firstPageItemName) => {
      cy.get('a[title="Weiter"]').should('be.visible').click();
      cy.get('[class="item product product-item"]')
        .first()
        .should('be.visible')
        .find('a.product-item-link')
        .invoke('text')
        .then((secondPageItemName) => {
          expect(firstPageItemName.trim()).to.not.eq(secondPageItemName.trim());
        });
    });
});
