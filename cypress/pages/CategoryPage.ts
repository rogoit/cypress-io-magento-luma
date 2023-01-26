import { BasePage } from './BasePage';
import selectors from '../fixtures/selectors/category.json';

export class CategoryPage extends BasePage {
  setFilterColor() {
    cy.contains(selectors.filterColor).click();
    cy.get(selectors.selectColorRed).click();
  }

  sortByPrice() {
    cy.get(selectors.sorter).select('Preis');
  }

  validatePrices() {
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
}
