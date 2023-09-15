import selectors from '../../fixtures/selectors/commands/doLogin.json';

export const doLogin = (email, password) => {
  cy.log('TESTIFY do login');
  cy.get(selectors.headerLinks).contains('Anmelden').should('be.visible').click();
  cy.get(selectors.fieldEmail).should('be.visible').type(email);
  cy.get(selectors.fieldPassWrapper)
    .first()
    .should('be.visible')
    .find(selectors.fieldPass)
    .type(password + '{enter}');
};
