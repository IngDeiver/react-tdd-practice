/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */

describe("Form section", () => {
    before(() => {
      cy.visit("/");
    });
    
    it("should remove a task", function () {
      cy.get('[data-testid=btn-delete-task]')
      .then(btns => {
        btns.eq(Math.floor(Math.random() * (btns.length+1))).click()
      });
    });
  
});
  