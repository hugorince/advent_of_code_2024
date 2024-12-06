const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

export const cleanMulString = (input: string) => {
  const regex = /mul\(\d+,\d+\)/g;
  const matches = input.match(regex);

  if (!matches) {
    return "";
  }

  return matches.join("");
};

export const convertToArrOfNumArr = (str: string) => {
  const parts = str.split("mul(").filter((part) => part.length > 0);

  return parts.map((part) => {
    const cleanedPart = part.slice(0, -1);
    const numbers = cleanedPart.split(",").map(Number);
    return numbers;
  });
};

export const multiplyAndSum = (arrays: number[][]) => {
  let totalSum = 0;

  for (const pair of arrays) {
    totalSum += pair[0] * pair[1];
  }

  return totalSum;
};

console.log(multiplyAndSum(convertToArrOfNumArr(cleanMulString(input))));
