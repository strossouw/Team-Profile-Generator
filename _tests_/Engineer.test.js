const Engineer = require("../lib/Engineer");
describe("Engineer", () => {
  let engineer;
  beforeEach(() => {
    engineer = new Engineer(
      "Dave",
      1,
      "dave@testcase.email",
      "davetestcase"
    );
  });
  describe("getGithub", () => {
    it("you got the github username!", () => {
      const result = engineer.getGithub();
      expect(result).toBe("davetestcase");
    });
  });
  describe("getRole", () => {
    it("You got the Role", () => {
      const printedId = engineer.getRole();
      expect(printedId).toBe("Engineer");
    });
  });
});