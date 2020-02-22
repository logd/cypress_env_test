describe('Get env vars', function () {
    it('gets the expected env var', function () {

        const testEnv = Cypress.env('TEST_ENV');

        assert.strictEqual(testEnv, 'foo')

    })
})
