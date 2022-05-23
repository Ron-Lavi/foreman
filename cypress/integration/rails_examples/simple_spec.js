// spec/cypress/integrations/simple_spec.js
describe('My First Test', function() {
  it('visit root', function() {
    cy.appFactories([['create', 'host']]).then(results => {
      const hostname = results[0].name;
      cy.visit('/', { failOnStatusCode: false });
      cy.login();
      cy.setAnyTaxonomy();
      debugger;
      cy.visit(`/new/hosts/${hostname}.example.com`);
      cy.contains(hostname);
    });
  });
});
