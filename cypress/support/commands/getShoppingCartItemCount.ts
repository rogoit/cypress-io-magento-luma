import selectors from '../../fixtures/selectors/commands/getShoppingCarItemCount.json';

export const getShoppingCartItemCount = () => {
  // Use .then on the function to access value
  cy.log('TESTIFY get shopping cart item count');
  cy.get(selectors.miniCartItemCount)
    .should('be.visible')
    .invoke('text')
    .then((shoppingCartItemCount) => {
      return cy.wrap(shoppingCartItemCount.trim());
    });
};
