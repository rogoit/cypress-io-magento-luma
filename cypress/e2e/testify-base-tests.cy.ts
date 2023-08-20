/// <reference types="Cypress" />
describe('TESTIFY base tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Imprint clickable', () => {
    cy.ttValidateImprintClickable();
  });

  it('Internal links status ok', () => {
    cy.ttEveryInternalLinkStatusOk();
  });

  it('Internal links loading', () => {
    cy.ttEveryInternalLinkIsLoading();
  });

  it('No google services', () => {
    cy.ttValidateNoGoogleServices();
  });

  it('Images status ok', () => {
    cy.ttValidateAllImagesResponseStatusOk();
  });

  it('Has only one H1', () => {
    cy.ttOnlyOneH1();
  });

  it('Invalid path returns 404', () => {
    cy.ttInvalidPath404();
  });
});
