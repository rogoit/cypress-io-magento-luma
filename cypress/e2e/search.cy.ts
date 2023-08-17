import selectors from '../fixtures/selectors/search.json';

describe('Search function tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(Cypress.env('waitForPageLoad'));
  });

  it('Can perform a search with mutliple results', () => {
    cy.get(selectors.searchField).type('Hoodie{enter}');
    cy.get(selectors.foundItems).should('have.length.gte', 3);
    cy.get(selectors.itemTitles).should('contain.text', 'Hoodie');
  });

  it('Can find a single product', () => {
    cy.get(selectors.searchField).type('Didi{enter}');
    cy.contains(selectors.onlyOneProductFoundText, { matchCase: false }).should('be.visible');
  });

  it('Can perform a search with no result', () => {
    cy.get(selectors.searchField).type('ABC123{enter}');
    cy.contains(selectors.noProductFoundText, { matchCase: false }).should('be.visible');
  });

  it('Can see suggestions in searchbar', () => {
    cy.get(selectors.searchField).click().type('Didi');
    cy.get(selectors.searchSuggestion).should('be.visible').should('include.text', 'Didi');
  });
});
