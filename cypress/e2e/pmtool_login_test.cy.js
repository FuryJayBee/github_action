describe("Login PMtool tests", () => {
  it("Header title is visible", () => {
    cy.visit("http://tredgate.com/pmtool");
    cy.get("img[title='TEG Project Management']").should("be.visible");
  });
});
