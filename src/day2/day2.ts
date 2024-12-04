const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

const turnLinesIntoArray = (input: string) => {
  return input.split("\n");
};

const turnStringIntoArrayOfNum = (str: string) => {
  const arr = str.split(" ");
  return arr.map((str) => parseInt(str));
};

export const formatData = (input: string) => {
  const arr = turnLinesIntoArray(input);
  return arr.map((str) => turnStringIntoArrayOfNum(str));
};

export const checkIfLineIsIncreasing = (arr: number[]) => {
  const checks = arr.filter(
    (num, index) => index === 0 || num > arr[index - 1]
  );
  return checks.length === arr.length;
};

export const checkIfLineIsDecreasing = (arr: number[]) => {
  const checks = arr.filter(
    (num, index) => index === 0 || num < arr[index - 1]
  );
  return checks.length === arr.length;
};

export const checkIfGapIsSafe = (arr: number[]) => {
  const isIncreasing = checkIfLineIsIncreasing(arr);
  const isDecreasing = checkIfLineIsDecreasing(arr);

  if (!isIncreasing && !isDecreasing) return false;

  if (isIncreasing) {
    const checks = arr.filter(
      (num, index) => index === 0 || num - arr[index - 1] < 4
    );
    return checks.length === arr.length;
  }

  const checks = arr.filter(
    (num, index) => index === 0 || arr[index - 1] - num < 4
  );
  return checks.length === arr.length;
};

export const sumOfSafeLines = (input: string) => {
  const data = formatData(input);
  return data.filter((arr) => checkIfGapIsSafe(arr)).length;
};

console.log(sumOfSafeLines(input));
