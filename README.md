# Testing for magento

![Magento_Logo](https://user-images.githubusercontent.com/108877931/214883559-6ff3d5a2-af1d-4f66-9eb2-4595e1c5a64c.png)

# Important

This project is inspired by elgentos/magento2-cypress-testing-suite: https://github.com/elgentos/magento2-cypress-testing-suite

## Installation

Clone repository.

`$ git clone git@github.com:ncatestify/cypress-io-magento-luma.git`

Navigate into project folder and install dependencies.

```bash
$ cd <project-folder>
$ npm install
```

## Setup

Update BaseUrl in cypress.config.ts.

`baseUrl: 'https://m2.demo.webvisum.de'`

If necessary update selectors under cypress/fixtures/selectors.

## Run

`$ npx cypress run`

Or if you want to use the GUI

`$ npx cypress open` or `$ npm run cypress:open`

## Test features

#### Testify base tests

  - Validates imprint is clickable
  - Validates request to internal links returns status code 200
  - Validates internal links are loading
  - Validates no google servies are loaded
  - Validates request to images returns status code 200
  - Validates Page has only one h1 headline
  - Validates request to invalid path returns status code 404

## Commands

#### Validate all internal links return status code 200

```js
cy.ttEveryInternalLinkStatusOk()
```

#### Validate all images return status code 200

```js
cy.ttValidateAllImagesResponseStatusOk()
```

#### Validate all internal links are loading

```js
cy.ttEveryInternalLinkIsLoading()
```

#### Return all internal links as array

```js
cy.ttGetInternalLinks()
```

#### Validate imprint is clickable

```js
cy.ttValidateImprintClickable()
```

#### Validate no google services are being loaded

```js
cy.ttValidateNoGoogleServices()
```

#### Run all TESTIFY base tests

```js
cy.ttRunTestifyBaseTests()
```

#### Check for accesibility issues

```js
cy.ttAccessibility()
```

#### Run all TESTIFY page content validation tests

```js
cy.ttValidatePageContent()
```

#### Validate page has only one headline

```js
cy.ttOnlyOneH1()
```

#### Validate invalid path returns 404 error

```js
cy.ttInvalidPath404()
```

### Open Source project by TESTIFY.TEAM

[TESTIFY.TEAM](https://testify.team) - WE FIND BUGS. **AUTOMATED**.

[German YouTube Cypress.IO Live Coding Playlist](https://www.youtube.com/watch?v=mb_PTxDeJKI&list=PLKrKzhBjw2Y9ceCxO3ollOc4eIVPAjiHs)

[How to start with this Cypress.IO template on YouTube](https://youtu.be/b27PciNzreY)
