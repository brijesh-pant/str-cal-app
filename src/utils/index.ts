function strCalculator(numbers: string): number {
  if (numbers.trim() === "") {
    return 0;
  }

  const separator = ",";

  const numbersArr = numbers
    .split(separator)
    .filter((num) => num.trim() !== "")
    .map((num) => parseInt(num, 10))
    .filter((num) => !isNaN(num));

  return numbersArr.reduce((sum, num) => sum + num, 0);
}

export default strCalculator;
