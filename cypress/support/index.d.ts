declare namespace Cypress {
  interface Chainable {
    addFirstItemToBasket(): Chainable<JQuery<HTMLElement>>;
    sortByPrice(): Chainable<JQuery<HTMLElement>>;
    switchSortingDirection(): Chainable<JQuery<HTMLElement>>;
    searchForWordAndValidate(searchword: string): Chainable<JQuery<HTMLElement>>;
    doLogin(email: string, password: string): Chainable<JQuery<HTMLElement>>;
    setListLimitAndValidate(limit: string): Chainable<JQuery<HTMLElement>>;
    paginationValidation(): Chainable<JQuery<HTMLElement>>;
    navigateToShoppingCart(): Chainable<JQuery<HTMLElement>>;
    removeItemFromShoppingCart(articleID: number): Chainable<JQuery<HTMLElement>>;
    getShoppingCartItemCount(): Chainable<JQuery<HTMLElement>>;
    increaseShoppingCartItemQuantity(articleID: number): Chainable<JQuery<HTMLElement>>;
    getShoppingCartPrice(): Chainable<JQuery<HTMLElement>>;
  }
}
