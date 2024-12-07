import {
  cleanMulString,
  convertToArrOfNumArr,
  convertToArrOfNumArrPart2,
  multiplyAndSum,
  regexPart1,
  regexPart2,
} from "./day3";

describe("day3", () => {
  it('should clean the input and only keeps "mul(number, number)" pattern', () => {
    expect(
      cleanMulString(
        "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
        regexPart1
      )
    ).toEqual("mul(2,4)mul(5,5)mul(11,8)mul(8,5)");
  });

  it("should turn a string to an array of number arrays", () => {
    expect(convertToArrOfNumArr("mul(2,4)mul(5,5)mul(11,8)mul(8,5)")).toEqual([
      [2, 4],
      [5, 5],
      [11, 8],
      [8, 5],
    ]);
  });

  it("should multiply all the numbers inside every array on the array and add them", () => {
    expect(
      multiplyAndSum([
        [2, 4],
        [5, 5],
        [11, 8],
        [8, 5],
      ])
    ).toEqual(161);
  });

  it('should clean the input and only keeps "mul(number, number)" and "do()" and "dont()" pattern', () => {
    expect(
      cleanMulString(
        "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",
        regexPart2
      )
    ).toEqual("mul(2,4)don't()mul(5,5)mul(11,8)do()mul(8,5)");
  });

  it("should turn a string to an array of number arrays and remove the ones after don't()", () => {
    expect(
      convertToArrOfNumArrPart2(
        "mul(2,4)don't()mul(5,5)mul(11,8)do()mul(8,5)",
        regexPart2
      )
    ).toEqual([
      [2, 4],
      [8, 5],
    ]);
  });
});
