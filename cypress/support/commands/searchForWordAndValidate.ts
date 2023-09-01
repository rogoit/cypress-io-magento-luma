import selectors from '../../fixtures/selectors/commands/searchForWordAndValidate.json';

export const searchForWordAndValidate = (searchword) => {
  cy.log('TESTIFY search for word and validate');
  cy.get(selectors.miniSearch)
    .should('be.visible')
    .type(searchword + '{enter}');
  cy.get(selectors.pageTitleWrapper)
    .should('be.visible')
    .should('have.text', 'Suchergebnisse für: "' + searchword + '"');
};
