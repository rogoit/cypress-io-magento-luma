import { CategoryPage } from '@/pages/CategoryPage';
import selectors from '../fixtures/selectors/category.json';

describe('Category page tests', () => {
  const categoryPage: CategoryPage = new CategoryPage();

  beforeEach(() => {
    cy.visit('/women/tops-women/jackets-women.html');
  });

  it('Filters for color', () => {
    setFilterColor();
    cy.url().should('contain', '?color=');
    expect(selectors.filterValue.toLowerCase).to.contain(selectors.filterColor.toLowerCase);
  });

  it('Sorts products from lowest to highest', () => {
    sortByPrice();
    validatePrices();
  });
});

function setFilterColor() {
  cy.contains(selectors.filterColor).click();
  cy.get(selectors.selectColorRed).click();
}

function sortByPrice() {
  cy.get(selectors.sorter).select('Preis');
}

function validatePrices() {
  //push product prices into array
  const pricesArray: number[] = [];
  cy.get(selectors.productPriceID)
    .children(selectors.prices)
    .each((price) => {
      const priceTrimmed = price.text().trim().replace(/,/g, '.').replace(/€/g, '');
      pricesArray.push(parseFloat(priceTrimmed));
    })
    //then validate prices are increasing
    .then(() => {
      pricesArray.forEach((price, i) => {
        if (i + 1 < pricesArray.length) {
          expect(price).to.be.lte(pricesArray[i + 1]);
        }
      });
    });
}
