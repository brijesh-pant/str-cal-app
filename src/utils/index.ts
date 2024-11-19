function strCalculator(numbers: string): number {
  if (numbers.trim() === "") {
    return 0;
  }

  const numbersArr = numbers.split("");
  return numbersArr.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

export default strCalculator;
