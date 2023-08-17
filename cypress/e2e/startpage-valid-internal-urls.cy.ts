/// <reference types="Cypress" />
describe('TESTIFY base tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Runs TESTIFY base tests', () => {
    cy.ttRunTestifyBaseTests();
  });
});
