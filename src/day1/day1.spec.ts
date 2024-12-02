import {
  findGaps,
  findSumOfWeightedOccurrences,
  splitColumns,
  turnLinesIntoArray,
} from "./day1";

describe("day1", () => {
  it("should return true", () => {
    expect(turnLinesIntoArray("df ")).toEqual(["df "]);
  });

  it("should split into 2 sorted arrays each lines", () => {
    expect(splitColumns(["22 33", "12 13"])).toEqual({
      firstNumbers: [12, 22],
      secondNumbers: [13, 33],
    });
  });

  it("should return the sum of the gaps", () => {
    expect(findGaps([1, 2, 3], [3, 4, 5])).toEqual(6);
  });

  it("should return the number of occurences multiplied by each number", () => {
    expect(findSumOfWeightedOccurrences([1, 2, 3], [1, 1, 1, 2, 2, 3])).toEqual(
      10
    );
  });
});
