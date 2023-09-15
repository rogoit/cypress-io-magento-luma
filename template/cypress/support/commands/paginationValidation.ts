import selectors from '../../fixtures/selectors/commands/paginationValidation.json';

export const paginationValidation = () => {
  // Validates first product on first page is different to first product on second page
  cy.log('TESTIFY pagination validation');
  cy.get(selectors.itemList)
    .first()
    .should('be.visible')
    .find(selectors.productItemLink)
    .invoke('text')
    .then((firstPageItemName) => {
      cy.get(selectors.nextPageButton).should('be.visible').click();
      cy.get(selectors.itemList)
        .first()
        .should('be.visible')
        .find(selectors.productItemLink)
        .invoke('text')
        .then((secondPageItemName) => {
          expect(firstPageItemName.trim()).to.not.eq(secondPageItemName.trim());
        });
    });
};
