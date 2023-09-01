import selectors from '../../fixtures/selectors/commands/removeItemFromShoppingCart.json';

export const removeItemFromShoppingCart = (articleID) => {
  // You need to navigate to shopping card before running this command
  cy.log('TESTIFY remove item from shopping cart');
  cy.get(selectors.removeShoppingCartItem).eq(articleID).should('be.visible').click();
  cy.get(selectors.buttonConfirmRemoveFromCart).should('be.visible').click();
};
