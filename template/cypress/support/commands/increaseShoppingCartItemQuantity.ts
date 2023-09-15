import selectors from '../../fixtures/selectors/commands/increaseShoppingCartItemQuantity.json';

export const increaseShoppingCartItemQuantity = (articleID) => {
  // Pass the ID of the item you want to increase
  // You don't need to be in shopping cart for this command to work
  cy.log('TESTIFY increase item quantity in shopping cart');
  cy.get(selectors.miniCart).should('be.visible').click();
  cy.get(selectors.itemCountInMiniCart)
    .eq(articleID)
    .should('be.visible')
    .invoke('attr', 'data-item-qty')
    .then((articleQuantity) => {
      const articleQuantityIncreased = Number(articleQuantity) + 1;
      cy.get(selectors.itemCountInMiniCart).eq(articleID).clear().type(articleQuantityIncreased);
      cy.get(selectors.buttonUpdateCart).eq(articleID).should('be.visible').click();
    });
  cy.get(selectors.miniCart).should('be.visible').click();
};
