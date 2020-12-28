/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */

describe("Form section", () => {
  before(() => {
    cy.visit("/");
    cy.fixture("form/data.json").as("data");
  });
  
  it("should add new task", function () {
    const title = this.data.title;

    cy.get("[data-testid=btn-add-task]").should("be.disabled").as("btn-add");

    cy.get("[data-testid=input-title-task]")
      .type(title)
      .should("have.value", title);

    cy.get("@btn-add").should("not.be.disabled");

    cy.get("@btn-add").click();
    cy.contains(title)
  });


});
