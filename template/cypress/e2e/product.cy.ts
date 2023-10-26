import { ProductPage } from '../pages/ProductPage';
import selectors from '../fixtures/selectors/product.json';
import productDetails from '../fixtures/productDetails.json';

describe('Prouct page tests', () => {
  const productPage: ProductPage = new ProductPage();

  beforeEach(() => {
    cy.visit(productDetails.url);
    cy.wait(Cypress.env('waitForPageLoad'));
  });

  it('Has title and price', () => {
    cy.get(selectors.titleWrapper).should('include.text', productDetails.title);

    cy.get(selectors.price)
      .first()
      .invoke('text')
      .should('contain', productDetails.price)
      .should('contain', productDetails.currency);
  });

  it('Has image', () => {
    cy.get(`[alt="${productDetails.title}"]`).should('be.visible');
  });

  it('Can be added to cart, wishlist & comparison list', () => {
    cy.get(selectors.addToCartButton).should('be.visible');
    cy.get(selectors.addToWishlistButton).should('be.visible');
    cy.get(selectors.addToComparisonListButton).should('be.visible');
  });

  it('Has description & more informations', () => {
    cy.get(selectors.descriptionWrapper).should('be.visible');
    cy.get(selectors.tabMoreInformations).should('be.visible');
  });
});
