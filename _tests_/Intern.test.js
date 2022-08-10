
const Intern = require("../lib/Intern");

describe("Intern", () => {
  let intern;
  beforeEach(() => {
    intern = new Intern(
        "Dave",
        1,
        "dave@testcase.email", 
        "UW-Milwaukee"
        );
  });

  describe("getSchool", () => {
    it("you got the school", () => {
      const result = intern.getSchool();
      expect(result).toBe("UW-Milwaukee");
    });
  });

  describe("getRole", () => {
    it("You got the Role", () => {
      const printedRole = intern.getRole();
      expect(printedRole).toBe("Intern");
    });
  });
});