declare namespace Cypress {
  interface Chainable {
    addFirstItemToBasket(): Chainable<JQuery<HTMLElement>>;
    sortByPrice(): Chainable<JQuery<HTMLElement>>;
    switchSortingDirection(): Chainable<JQuery<HTMLElement>>;
    searchForWordAndValidate(searchword: string): Chainable<JQuery<HTMLElement>>;
    doLogin(email: string, password: string): Chainable<JQuery<HTMLElement>>;
    setListLimitAndValidate(limit: string): Chainable<JQuery<HTMLElement>>;
    paginationValidation(): Chainable<JQuery<HTMLElement>>;
  }
}
