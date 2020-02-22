describe('Anonymous acccess to homepage', function() {
    it('signs in via the auth login route', function() {
      const email = Cypress.env('TEST_EMAIL')
      cy.visit(`/testing-login?email=${email}`)
      cy.get('[data-cy=testing]')
      cy.get('[data-cy=isValid]')
    })
})