/* eslint-disable no-undef */
before(() => {
    cy.visit("localhost:3001")
})
describe('Practice with cypress', () => {
    it('should visit site', () => {
        cy.get('[data-testid=input-title-task]').type("Cypres writed this!")
    });
});