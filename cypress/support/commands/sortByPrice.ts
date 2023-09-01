import selectors from '../../fixtures/selectors/commands/sortByPrice.json';

export const sortByPrice = () => {
  cy.log('TESTIFY sort by price');
  cy.get(selectors.sorter).should('be.visible').select('price');
};
