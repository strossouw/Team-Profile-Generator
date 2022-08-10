const Manager = require("../lib/Manager");
describe("Manager", () => {
  let manager;
  beforeEach(() => {
    manager = new Manager(
        "Dave",
        1,
        "dave@testcase.email",
        "859"
        );
  });
  describe("getRole", () => {
    it("You got the Role", () => {
      const printedRole = manager.getRole();
      expect(printedRole).toBe("Manager");
    });
  });
});