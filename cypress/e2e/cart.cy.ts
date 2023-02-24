import selectors from '../fixtures/selectors/cart.json';
import { CartPage } from '@/pages/CartPage';

describe('Shopping cart tests', () => {
  beforeEach(() => {
    cy.visit('/didi-sport-watch.html');
    cy.get(selectors.buttonAddToCart).click({ scrollBehavior: 'center' });
    cy.get(selectors.notificationMessageTop)
      .should('be.visible')
      .should('contain.text', 'Sie haben Didi Sport Watch zum Warenkorb hinzugefügt.');
    cy.get(selectors.miniCart).should('be.visible').click({ scrollBehavior: 'center' });
    cy.get(selectors.buttonViewCart).should('be.visible').click({ scrollBehavior: 'center' });
  });

  it('Can add product to cart', () => {
    cy.get(selectors.itemAmountInCart).should('be.visible').should('have.attr', 'value').should('eq', '1');
  });

  it('Can change quantity in card', () => {
    cy.get(selectors.inputAmountInCard).should('be.visible').clear().type('2{enter}').should('have.value', '2');
  });

  it('Can remove product from card', () => {
    CartPage.removeArticle(0);
    cy.get(selectors.cartEmptyTextField)
      .should('contain.text', 'Sie haben keine Artikel im Warenkorb')
      .should('be.visible');
  });
});
