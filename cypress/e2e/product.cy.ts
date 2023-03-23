import { ProductPage } from '@/pages/ProductPage';
import selectors from '../fixtures/selectors/product.json';

describe('Prouct page tests', () => {
  const productPage: ProductPage = new ProductPage();

  beforeEach(() => {
    cy.visit(selectors.productUrl);
  });
});
