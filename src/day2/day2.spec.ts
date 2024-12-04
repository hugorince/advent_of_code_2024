import {
  formatData,
  checkIfLineIsIncreasing,
  checkIfLineIsDecreasing,
  checkIfGapIsSafe,
  sumOfSafeLines,
} from "./day2";

describe("day2", () => {
  it("should format data into arrays of numbers", () => {
    expect(
      formatData("82 84 85 87 90 92 93 91\n7 10 12 14 17 19 22 22")
    ).toEqual([
      [82, 84, 85, 87, 90, 92, 93, 91],
      [7, 10, 12, 14, 17, 19, 22, 22],
    ]);
  });

  it("should check if increasing", () => {
    expect(checkIfLineIsIncreasing([1, 5, 9])).toEqual(true);
    expect(checkIfLineIsIncreasing([1, 8, 5, 9])).toEqual(false);
  });

  it("should check if decreasing", () => {
    expect(checkIfLineIsDecreasing([9, 5, 1])).toEqual(true);
    expect(checkIfLineIsDecreasing([1, 8, 5, 9])).toEqual(false);
  });

  it("should check if gap is lower than 4", () => {
    expect(checkIfGapIsSafe([8, 5, 2])).toEqual(true);
    expect(checkIfGapIsSafe([2, 5, 6])).toEqual(true);
    expect(checkIfGapIsSafe([2, 5, 10])).toEqual(false);
    expect(checkIfGapIsSafe([10, 5, 2])).toEqual(false);
    expect(checkIfGapIsSafe([1, 8, 5, 9])).toEqual(false);
  });

  it("should return the sum of safe lines", () => {
    expect(sumOfSafeLines("1 2 3\n7 5 3\n10 19 18")).toEqual(2);
  });
});
