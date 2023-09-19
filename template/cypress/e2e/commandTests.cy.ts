describe('Search function tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(Cypress.env('waitForPageLoad'));
  });

  it('Can perform a search with mutliple results', () => {
    cy.searchForWordAndValidate('tops');
    //cy.addFirstItemToBasket();
    cy.navigateToShoppingCart();
    cy.wait(5000);
    cy.paginationValidation();
    cy.wait(5000);
    cy.setListLimitAndValidate('24');
    cy.wait(5000);
    cy.sortByPrice();
    cy.switchSortingDirection();
  });

  it('remove item', () => {
    cy.get('[title="In den Warenkorb"]').eq(0).click();
    cy.get('[title="In den Warenkorb"]').eq(1).click();
    cy.wait(3000)
    cy.increaseShoppingCartItemQuantity(0);
    cy.wait(3000)
    cy.increaseShoppingCartItemQuantity(1);
    cy.wait(5000)
    cy.getShoppingCartPrice().then((price) => {
      cy.log('PRICE: ' + price);
    });
    cy.getShoppingCartItemCount().then((itemCount) => {
      expect(itemCount).to.eq('4');
      cy.wait(3000);
    });
    cy.navigateToShoppingCart();
    cy.removeItemFromShoppingCart(0);
    cy.removeItemFromShoppingCart(1);
  });

  it.only('Can navigate to shopping', () => {
    cy.get('[title="In den Warenkorb"]').eq(0).click();
    cy.wait(3000)
    cy.navigateToShoppingCart();
  });
});
