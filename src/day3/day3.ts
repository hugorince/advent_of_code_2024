const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

export const regexPart1 = /mul\(\d+,\d+\)/g;
export const regexPart2 = /mul\(\d+,\d+\)|do\(\)|don\'t\(\)/g;

export const cleanMulString = (input: string, regex: RegExp) => {
  const matches = input.match(regex);

  if (!matches) {
    return "";
  }

  return matches.join("");
};

export const convertToArrOfNumArr = (str: string) => {
  const parts = str.split("mul(").filter((part) => part.length > 0);

  return parts.map((part) => {
    return part.slice(0, -1).split(",").map(Number);
  });
};

export const convertToArrOfNumArrPart2 = (input: string, regex: RegExp) => {
  const result: number[][] = [];
  let afterDo = true;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    if (match[0].startsWith("mul")) {
      const numArr = match[0].split("mul(").join("").split(",");
      const numbers = [parseInt(numArr[0]), parseInt(numArr[1])];
      if (afterDo) result.push(numbers);
    } else if (match[0] === "do()") {
      afterDo = true;
    } else if (match[0] === "don't()") {
      afterDo = false;
    }
  }

  return result;
};

export const multiplyAndSum = (arrays: number[][]) => {
  let totalSum = 0;

  for (const pair of arrays) {
    totalSum += pair[0] * pair[1];
  }

  return totalSum;
};

console.log(
  multiplyAndSum(convertToArrOfNumArr(cleanMulString(input, regexPart1)))
);

console.log(
  multiplyAndSum(
    convertToArrOfNumArrPart2(cleanMulString(input, regexPart2), regexPart2)
  )
);
