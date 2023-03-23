import { ProductPage } from '@/pages/ProductPage';
import selectors from '../fixtures/selectors/product.json';
import productDetails from '../fixtures/productDetails.json';

describe('Prouct page tests', () => {
  const productPage: ProductPage = new ProductPage();

  beforeEach(() => {
    cy.visit(productDetails.url);
  });

  it('Has title, price & tax details', () => {
    cy.get(selectors.titleWrapper).should('include.text', productDetails.title);

    cy.get(selectors.price)
      .first()
      .invoke('text')
      .should('contain', productDetails.price)
      .should('contain', productDetails.currency);

    cy.get(selectors.taxDetails).first().should('include.text', productDetails.taxDetails);
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
