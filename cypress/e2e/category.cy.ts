import { CategoryPage } from '@/pages/CategoryPage';
import selectors from '../fixtures/selectors/category.json';

describe('Category page tests', () => {
  const categoryPage: CategoryPage = new CategoryPage();

  beforeEach(() => {
    cy.visit('/women/tops-women/jackets-women.html');
  });

  it('Filters for color', () => {
    categoryPage.setFilterColor();
    cy.url().should('contain', '?color=');
    expect(selectors.filterValue.toLowerCase).to.contain(selectors.filterColor.toLowerCase);
  });

  it('Sorts products from lowest to highest', () => {
    categoryPage.sortByPrice();
    categoryPage.validatePrices();
  });
});
