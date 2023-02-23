import { BasePage } from './BasePage';
import selectors from '../fixtures/selectors/cart.json';

export class CartPage extends BasePage {
  static removeArticle(index) {
    cy.get(selectors.removeArticle).eq(index).click({ scrollBehavior: 'center' });
  }

  static addProductToCartByUrl(url) {
    cy.visit(url);
    cy.get(selectors.buttonAddToCart).should('be.visible').click({ scrollBehavior: 'center' });
    cy.get(selectors.notificationMessageTop).should('be.visible').should('contain.text', 'Sie haben');
    cy.get(selectors.miniCart).should('be.visible').click({ scrollBehavior: 'center' });
    cy.get(selectors.buttonViewCart).should('be.visible').click({ scrollBehavior: 'center' });
  }

  static addCouponCode(code) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500);
    cy.get(selectors.activateCouponField)
      .should('contain', 'Gutscheincode anwenden')
      .should('be.visible')
      .click({ scrollBehavior: 'center' });
    cy.get(selectors.couponCodeField)
      .should('not.be.hidden')
      .should('be.visible')
      .scrollIntoView()
      .type(`${code}{enter}`);
  }
}
