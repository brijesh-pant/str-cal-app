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
    expect(strCalculator("125")).toBe(125);
  });

  it("should handle string with zeros", () => {
    expect(strCalculator("1020")).toBe(1020);
  });

  it("should handle string with single zero", () => {
    expect(strCalculator("0")).toBe(0);
  });

  it("should handle string with all zeros", () => {
    expect(strCalculator("000")).toBe(0);
  });

  it("should add two numbers separated by comma", () => {
    expect(strCalculator("1,2")).toBe(3);
  });

  it("should add multiple numbers separated by commas", () => {
    expect(strCalculator("1,2,3,4,5")).toBe(15);
  });

  it("should handle empty values between commas", () => {
    expect(strCalculator("1,,2")).toBe(3);
  });

  it("should handle trailing comma", () => {
    expect(strCalculator("1,2,")).toBe(3);
  });

  it("should handle leading comma", () => {
    expect(strCalculator(",1,2")).toBe(3);
  });
});
