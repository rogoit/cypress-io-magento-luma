import { BasePage } from './BasePage';
import selectors from '../fixtures/selectors/cart.json';

export class CartPage extends BasePage {
  static removeArticle(index) {
    cy.get(selectors.removeArticle).eq(index).click({ scrollBehavior: 'center' });
  }

  static addProductToCartByUrl(url) {
    cy.log('Add product to cart with param url: ' + url);
    cy.visit(url);
    cy.get(selectors.buttonAddToCart).should('be.visible').click({ scrollBehavior: 'center' });
    cy.get(selectors.notificationMessageTop).should('be.visible').should('contain.text', 'Sie haben');
    cy.get(selectors.miniCart).should('be.visible').click({ scrollBehavior: 'center' });
    cy.get(selectors.buttonViewCart).should('be.visible').click({ scrollBehavior: 'center' });
  }
}
