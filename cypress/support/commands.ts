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
import selectors from '../fixtures/selectors/commands.json';

Cypress.Commands.add('addFirstItemToBasket', () => {
  cy.log('TESTIFY add first item to basket');
  cy.get(selectors.itemList).first().should('be.visible').click();
  cy.get(selectors.addToCartButton).should('be.visible').and('not.be.disabled').click();
  cy.go('back');
});

Cypress.Commands.add('sortByPrice', () => {
  cy.log('TESTIFY sort by price');
  cy.get(selectors.sorter).should('be.visible').select('price');
});

Cypress.Commands.add('switchSortingDirection', () => {
  cy.log('TESTIFY switch sorting direction');
  cy.get(selectors.sorterDirectionSwitch).should('be.visible').click();
});

Cypress.Commands.add('searchForWordAndValidate', (searchword) => {
  cy.log('TESTIFY search for word and validate');
  cy.get(selectors.miniSearch)
    .should('be.visible')
    .type(searchword + '{enter}');
  cy.get(selectors.pageTitleWrapper)
    .should('be.visible')
    .should('have.text', 'Suchergebnisse für: "' + searchword + '"');
});

Cypress.Commands.add('doLogin', (email, password) => {
  cy.log('TESTIFY do login');
  cy.get(selectors.headerLinks).contains('Anmelden').should('be.visible').click();
  cy.get(selectors.fieldEmail).should('be.visible').type(email);
  cy.get(selectors.fieldPassWrapper)
    .first()
    .should('be.visible')
    .find(selectors.fieldPass)
    .type(password + '{enter}');
});

Cypress.Commands.add('setListLimitAndValidate', (limit) => {
  cy.log('TESTIFY set list limit and validate');
  cy.get(selectors.limiter).should('be.visible').select(limit);
  cy.get(`${selectors.limiter} > [selected="selected"]`).should('contain.text', limit);
  cy.get(selectors.itemList).its('length').should('be.lte', Number(limit));
});

Cypress.Commands.add('paginationValidation', () => {
  // Validates first product on first page is different to first product on second page
  cy.log('TESTIFY pagination validation');
  cy.get(selectors.itemList)
    .first()
    .should('be.visible')
    .find(selectors.productItemLink)
    .invoke('text')
    .then((firstPageItemName) => {
      cy.get(selectors.nextPageButton).should('be.visible').click();
      cy.get(selectors.itemList)
        .first()
        .should('be.visible')
        .find(selectors.productItemLink)
        .invoke('text')
        .then((secondPageItemName) => {
          expect(firstPageItemName.trim()).to.not.eq(secondPageItemName.trim());
        });
    });
});
