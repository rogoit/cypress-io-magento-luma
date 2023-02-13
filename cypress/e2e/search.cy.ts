import selectors from '../fixtures/selectors/search.json';

describe('Search function tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Can perform a search with mutliple results', () => {
    cy.get(selectors.searchField).type('Hoodie{enter}');
    cy.get(selectors.foundItems).should('have.length.gte', 3);
    cy.get(selectors.itemTitles).should('contain.text', 'Hoodie');
  });

  it('Can find a single product', () => {
    cy.get(selectors.searchField).type('Didi{enter}');
    cy.get(selectors.foundItems).should('have.length', 1);
    cy.get(selectors.itemTitles).should('include.text', 'Didi');
  });

  it('Can perform a search with no result', () => {
    cy.get(selectors.searchField).type('ABC123{enter}');
    cy.contains('Ihre Suche ergab keine Ergebnisse').should('be.visible');
  });

  it('Can see suggestions in searchbar', () => {
    cy.get(selectors.searchField).click().type('Didi');
    cy.get(selectors.searchSuggestion).should('be.visible').should('include.text', 'Didi');
  });
});
