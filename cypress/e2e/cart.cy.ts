import selectors from '../fixtures/selectors/cart.json';

describe('Shopping cart tests', () => {
  beforeEach(() => {
    cy.visit('/didi-sport-watch.html');
    cy.get(selectors.buttonAddToCart).click();
    cy.wait(3000);
    cy.get(selectors.miniCart).click();
    cy.get(selectors.buttonViewCart).click();
  });
  it('Can add product to cart', () => {
    cy.get(selectors.itemAmountInCart).should('have.attr', 'value').should('eq', '1');
  });
});
