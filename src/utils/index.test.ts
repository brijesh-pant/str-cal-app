import strCalculator from ".";

describe("strCalculator", () => {
  it("should return 0 for empty string", () => {
    expect(strCalculator("")).toBe(0);
  });

  it("should return 0 for string with only spaces", () => {
    expect(strCalculator("   ")).toBe(0);
  });

  it("should add a single digit number", () => {
    expect(strCalculator("5")).toBe(5);
  });

  it("should add multiple single digit numbers", () => {
    expect(strCalculator("125")).toBe(8);
  });

  it("should handle string with zeros", () => {
    expect(strCalculator("1020")).toBe(3);
  });

  it("should handle string with single zero", () => {
    expect(strCalculator("0")).toBe(0);
  });

  it("should handle string with all zeros", () => {
    expect(strCalculator("000")).toBe(0);
  });
});
