import selectors from '../../fixtures/selectors/commands/switchSortingDirection.json';

export const switchSortingDirection = () => {
  cy.log('TESTIFY switch sorting direction');
  cy.get(selectors.sorterDirectionSwitch).should('be.visible').click();
};
