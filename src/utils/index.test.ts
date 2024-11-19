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

  it("should handle mixed comma and newline separators", () => {
    expect(strCalculator("1\n2,3")).toBe(6);
  });

  it("should handle newline as separator", () => {
    expect(strCalculator("1\n2\n3")).toBe(6);
  });

  it("should handle custom single character delimiter", () => {
    expect(strCalculator("//;\n1;2")).toBe(3);
  });

  it("should handle custom delimiter with special characters", () => {
    expect(strCalculator("//$#@\n1$#@2$#@3")).toBe(6);
  });

  it("should throw error for single negative number", () => {
    expect(() => strCalculator("-1")).toThrow(
      "negative numbers not allowed: -1"
    );
  });

  it("should throw error for multiple negative numbers", () => {
    expect(() => strCalculator("-1,-2,-3")).toThrow(
      "negative numbers not allowed: -1, -2, -3"
    );
  });

  it("should throw error for negative numbers with mixed comma and newline separators", () => {
    expect(() => strCalculator("-1\n-2,-3")).toThrow(
      "negative numbers not allowed: -1, -2, -3"
    );
  });

  it("should throw error for negative numbers with custom delimiter", () => {
    expect(() => strCalculator("//*\n-1*-2*-3")).toThrow(
      "negative numbers not allowed: -1, -2, -3"
    );
  });

  it("should throw error for mixed positive and negative numbers", () => {
    expect(() => strCalculator("1,-2,3,-4")).toThrow(
      "negative numbers not allowed: -2, -4"
    );
  });
});
