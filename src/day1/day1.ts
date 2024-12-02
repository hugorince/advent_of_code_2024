const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

export const turnLinesIntoArray = (input: string) => {
  return input.split("\n");
};

export const splitColumns = (array: string[]) => {
  const firstNumbers: number[] = [];
  const secondNumbers: number[] = [];

  array.forEach((item) => {
    const [first, second] = item.split(/\s+/).map(Number);

    firstNumbers.push(first);
    secondNumbers.push(second);
  });

  firstNumbers.sort();
  secondNumbers.sort();

  return { firstNumbers, secondNumbers };
};

const { firstNumbers, secondNumbers } = splitColumns(turnLinesIntoArray(input));

export const findGaps = (array1: number[], array2: number[]): number => {
  return array1.reduce((sum, num, index) => {
    return sum + Math.abs(num - array2[index]);
  }, 0);
};

export const findSumOfWeightedOccurrences = (
  firstNumbers: number[],
  secondNumbers: number[]
): number => {
  let totalSum = 0;

  firstNumbers.forEach((num) => {
    const count = secondNumbers.filter((n) => n === num).length;
    totalSum += num * count;
  });

  return totalSum;
};

console.log(findGaps(firstNumbers, secondNumbers));
console.log(findSumOfWeightedOccurrences(firstNumbers, secondNumbers));
