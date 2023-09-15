import selectors from '../../fixtures/selectors/commands/navigateToShoppingCart.json';

export const navigateToShoppingCart = () => {
  cy.log('TESTIFY navigate to shopping cart');
  cy.get(selectors.shoppingCartIcon).should('be.visible').should('not.have.class', 'active').click();
  cy.get(selectors.shoppingCartIcon).should('have.class', 'active');
  cy.get('body').then((body) => {
    if (body.find(selectors.shoppingcartEmptyText).is(':visible')) {
      cy.log('Shopping cart is empty.');
    } else {
      cy.get(selectors.buttonViewShoppingCart).should('be.visible').click();
    }
  });
};
