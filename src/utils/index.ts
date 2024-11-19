function splitBySeparators(numbers: string[], separators: string[]) {
  for (let i = 0; i < separators.length; i++) {
    const separatedNums: string[] = [];
    for (let j = 0; j < numbers.length; j++) {
      separatedNums.push(...numbers[j].split(separators[i]));
    }
    numbers = separatedNums;
  }

  return numbers;
}

function strCalculator(numbers: string): number {
  if (numbers.trim() === "") {
    return 0;
  }

  const separators = [",", "\n"];

  const numbersArr = splitBySeparators(numbers.split(separators[0]), separators)
    .filter((num) => num.trim() !== "")
    .map((num) => parseInt(num, 10))
    .filter((num) => !isNaN(num));

  return numbersArr.reduce((sum, num) => sum + num, 0);
}

export default strCalculator;
