// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import { addFirstItemToBasket } from "./commands/addFirstItemToBasket";
import { doLogin } from "./commands/doLogin";
import { getShoppingCartItemCount } from "./commands/getShoppingCartItemCount";
import { getShoppingCartPrice } from "./commands/getShoppingCartPrice";
import { increaseShoppingCartItemQuantity } from "./commands/increaseShoppingCartItemQuantity";
import { navigateToShoppingCart } from "./commands/navigateToShoppingCart";
import { paginationValidation } from "./commands/paginationValidation";
import { removeItemFromShoppingCart } from "./commands/removeItemFromShoppingCart";
import { searchForWordAndValidate } from "./commands/searchForWordAndValidate";
import { setListLimitAndValidate } from "./commands/setListLimitAndValidate";
import { sortByPrice } from "./commands/sortByPrice";
import { switchSortingDirection } from "./commands/switchSortingDirection";

Cypress.Commands.add('addFirstItemToBasket', addFirstItemToBasket);
Cypress.Commands.add('doLogin', doLogin);
Cypress.Commands.add('getShoppingCartItemCount', getShoppingCartItemCount);
Cypress.Commands.add('getShoppingCartPrice', getShoppingCartPrice);
Cypress.Commands.add('increaseShoppingCartItemQuantity', increaseShoppingCartItemQuantity);
Cypress.Commands.add('navigateToShoppingCart', navigateToShoppingCart);
Cypress.Commands.add('paginationValidation', paginationValidation);
Cypress.Commands.add('removeItemFromShoppingCart', removeItemFromShoppingCart);
Cypress.Commands.add('searchForWordAndValidate', searchForWordAndValidate);
Cypress.Commands.add('setListLimitAndValidate', setListLimitAndValidate);
Cypress.Commands.add('sortByPrice', sortByPrice);
Cypress.Commands.add('switchSortingDirection', switchSortingDirection);
