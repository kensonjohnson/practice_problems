import { ranges1, ranges2 } from "./2022_04_data.js";

function findPairs(pairs) {
  const parsedByLine = pairs.split("\n");
  const parsedByComma = parsedByLine.map((string) => {
    // makes array of two strings ['2-4', '6-8']
    const inBetween = string.split(",");
    // splits those substrings into arrays of integers representing ranges
    // [[2,4], [6,8]]
    return inBetween.map((subString) => {
      // splits ranges into this: ['2','4']
      const ranges = subString.split("-");
      return ranges.map((number) => parseInt(number));
    });
  });
  // store total inclusions
  return parsedByComma.reduce((inclusions, pair) => {
    const [range1, range2] = pair;
    if (range1[0] <= range2[0] && range1[1] >= range2[1]) {
      // if yes, increment total inclusions found
      return inclusions + 1;
    }
    if (range1[0] >= range2[0] && range1[1] <= range2[1]) {
      return inclusions + 1;
    }
    return inclusions;
  }, 0);
}

console.log(findPairs(ranges1));
console.log(findPairs(ranges2));
