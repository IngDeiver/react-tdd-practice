/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
describe('Api', () => {
    it('should list tasks', () => {
        cy.request(Cypress.env('server_url'))
        .then(response => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    });
});