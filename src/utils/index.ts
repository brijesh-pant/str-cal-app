/**
 * Splits an array of strings by the provided separators.
 *
 * This function takes an array of strings `numbers` and an array of separator strings `separators`.
 * It iterates through each separator and splits each string in the `numbers` array by that separator.
 *
 * @param numbers - An array of strings to be split.
 * @param separators - An array of separator strings to use for splitting the `numbers` array.
 * @returns An array of strings, where each string has been split by the provided separators.
 */
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

/**
 * Calculates the sum of a series of numbers provided as a string.
 *
 * This function takes a string `numbers`, with optional custom separators.
 * It splits the string into an array of numbers, handles negative numbers, and returns the sum of the valid numbers.
 *
 * @param numbers - A string representing numbers, with optional custom separators.
 * @returns The sum of the valid numbers in the input string.
 * @throws {Error} If the input string contains any negative numbers.
 */
function strCalculator(numbers: string): number {
  if (numbers.trim() === "") {
    return 0;
  }

  //   Create needed separators
  const separators = [",", "\n"];
  let additionalSeparator = "";

  // Check for additional delimiter
  if (numbers.startsWith("//")) {
    const separatorEnd = numbers.indexOf("\n");
    additionalSeparator = numbers.slice(2, separatorEnd); // extract custom separator
    separators.push(additionalSeparator); // push custom separator into existing separators
    numbers = numbers.slice(separatorEnd + 1);
  }

  const numbersArr = splitBySeparators(numbers.split(separators[0]), separators)
    .filter((num) => num.trim() !== "")
    .map((num) => parseInt(num, 10))
    .filter((num) => !isNaN(num));

  // Calling add with a negative number will throw an exception
  const negativeNums = numbersArr.filter((num) => num < 0);

  if (negativeNums.length > 0) {
    throw new Error(`negative numbers not allowed: ${negativeNums.join(", ")}`);
  }

  return numbersArr.reduce((sum, num) => sum + num, 0);
}

export default strCalculator;
