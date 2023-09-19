import selectors from '../../fixtures/selectors/commands/getShoppingCartPrice.json';

export const getShoppingCartPrice = () => {
  // Use .then on the function to access value
  cy.log('TESTIFY get shopping cart price');
  cy.get(selectors.miniCart).should('be.visible').click();
  cy.get(selectors.minicartTotalPrice)
    .should('be.visible')
    .invoke('text')
    .then((totalPrice) => {
      return cy.wrap(totalPrice);
    });
  cy.get(selectors.miniCart).should('be.visible').click();
};
