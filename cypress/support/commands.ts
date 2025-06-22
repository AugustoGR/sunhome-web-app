/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('login', (user, password) => {
  cy.visit('http://localhost:4200');
  cy.intercept('POST', 'http://localhost:3000/auth').as('loginRequest');
  cy.get('[data-cy=user]').type(user);
  cy.get('[data-cy=password]').type(password);
  cy.get('button[type=submit]').click();
  cy.wait('@loginRequest');
});

Cypress.Commands.add('newSale', () => {
  cy.intercept('POST', 'http://localhost:3000/sales').as('executeSale');
  cy.get('[data-cy=sell]').click();
  cy.get('[data-cy=customer]').type('Venda de teste para cliente X');
  cy.get('[data-cy=product]').first().click();
  cy.get('[data-cy=total-value]').should('have.value', 'R$ 299.00');
  cy.contains('button', 'Executar').click();
  cy.wait('@executeSale').its('response.statusCode').should('eq', 201);
});
