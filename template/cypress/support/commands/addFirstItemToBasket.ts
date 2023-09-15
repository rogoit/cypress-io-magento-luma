import selectors from '../../fixtures/selectors/commands/addFirstItemToBasket.json';

export const addFirstItemToBasket = () => {
  cy.log('TESTIFY add first item to basket');
  cy.get(selectors.itemList).first().should('be.visible').click();
  cy.get(selectors.addToCartButton).should('be.visible').and('not.be.disabled').click();
  cy.go('back');
};
