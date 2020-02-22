describe('Anonymous acccess to homepage', function() {
    it('displays the homepge', function() {
      cy.visit('/')
      cy.get('[data-cy=homepage]')
    })
})