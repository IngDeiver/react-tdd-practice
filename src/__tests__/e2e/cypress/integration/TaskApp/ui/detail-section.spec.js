/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */

describe("Detail section", () => {
    before(() => {
      cy.visit("/");
    });
    
    it("should remove a task of the list", function () {
      cy.get('[data-testid=btn-delete-task]')
      .then(btns => {
        btns.eq(Math.floor(Math.random() * (btns.length+1))).click()
      });
    });

    it("should try update a task of the list then cancel", function () {
      cy.get('[data-testid=btn-edit-task]')
      .then(btns => {
        btns.eq(Math.floor(Math.random() * (btns.length+1))).click()

        cy.get('[data-testid=title-to-edit]')
        .clear()
        .type('This title was updated with cypress!')

        cy.get('[data-testid=btn-cancel-update-task]')
        .click()
      });
    });

    it("should updated a task of the list", function () {
      cy.get('[data-testid=btn-edit-task]')
      .then(btns => {
        btns.eq(Math.floor(Math.random() * (btns.length+1))).click()

        cy.get('[data-testid=title-to-edit]')
        .clear()
        .type('This title was updated with cypress!')

        cy.get('[data-testid=btn-update-task]')
        .click()
      });
    });
  
});
  