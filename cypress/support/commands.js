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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (login = 'admin', password = 'changeme') => {
  cy.get('input[id=login_login]').type(login);
  cy.get('input[id=login_password]').type(password);
  cy.get('button[type=submit]').click();
});

Cypress.Commands.add('setAnyTaxonomy', () => {
  cy.get('#organization-dropdown > #pf-context-selector-toggle-id-0').click();
  cy.get(':nth-child(1) > .pf-c-context-selector__menu-list-item').click();
  cy.get('#location-dropdown > #pf-context-selector-toggle-id-0').click();
  cy.get(':nth-child(1) > .pf-c-context-selector__menu-list-item').click();
});
