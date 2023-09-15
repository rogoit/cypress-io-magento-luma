import selectors from '../../fixtures/selectors/commands/setListLimitAndValidate.json';

export const setListLimitAndValidate = (limit) => {
  cy.log('TESTIFY set list limit and validate');
  cy.get(selectors.limiter).should('be.visible').select(limit);
  cy.get(`${selectors.limiter} > [selected="selected"]`).should('contain.text', limit);
  cy.get(selectors.itemList).its('length').should('be.lte', Number(limit));
};
