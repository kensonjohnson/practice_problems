import { data } from "./2022_13_data.js";

const test2 = `[1,1,3,1,1]
[1,1,5,1,1]

[[1],[2,3,4]]
[[1],4]

[9]
[[8,7,6]]

[[4,4],4,4]
[[4,4],4,4,4]

[7,7,7,7]
[7,7,7]

[]
[3]

[[[]]]
[[]]

[1,[2,[3,[4,[5,6,7]]]],8,9]
[1,[2,[3,[4,[5,6,0]]]],8,9]`;

console.log(sumIndicesOfGoodPairs(test2));

function sumIndicesOfGoodPairs(data) {
  const parsedData = parseData(data);
  let sum = 0;
  parsedData.forEach(([left, right], index) => {
    // console.log(sum);
    // console.log("customSort: ", customSort(left, right));
    if (customSort(left, right) >= 0) {
      sum += index + 1;
    }
  });
  return sum;
}

// takes in a string literal
function parseData(data) {
  const elements = data.split("\n\n");
  const parsedData = [];
  elements.forEach((pairString) => {
    parsedData.push(pairString.split("\n"));
  });
  return parsedData;
}

function customSort(a, b) {
  console.log("Data is: ", a, b);
  // check if both a and b are numbers
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  }

  // check if just "a" is a number
  if (typeof a === "number") {
    // cast "a" to a list
    const listA = [a];
    let left = 0;
    let right = 0;
    // iterate until a sorting value can be determined
    while (left < listA.length || right < b.length) {
      const leftValue = listA[left];
      const rightValue = b[right];

      // start with null checking
      if (!leftValue && rightValue) {
        return -1; // should stay as is
      }
      if (leftValue && !rightValue) {
        return 1; // should swap places
      }
      if (leftValue !== rightValue) {
        // if both values exist and aren't equal,
        // return their difference
        return leftValue - rightValue;
      }

      left++;
      right++;
    }
  }

  // check if just "b" is a number
  if (typeof b === "number") {
    const listB = [b];
    let left = 0;
    let right = 0;
    while (left < a.length || right < listB.length) {
      const leftValue = a[left];
      const rightValue = listB[right];

      // start with null checking
      if (!leftValue && rightValue) {
        return -1; // should stay as is
      }
      if (leftValue && !rightValue) {
        return 1; // should swap places
      }
      if (leftValue !== rightValue) {
        // if both values exist and aren't equal,
        // return their difference
        return leftValue - rightValue;
      }

      left++;
      right++;
    }
  }

  // if we make it this far, both "a" and "b" are lists
  let left = 0;
  let right = 0;
  while (left < a.length || right < b.length) {
    const leftValue = a[left];
    const rightValue = b[right];

    // start with null checking
    if (!leftValue && !rightValue) {
      return 0;
    }
    if (!leftValue) {
      return -1; // should stay as is
    }
    if (!rightValue) {
      return 1; // should swap places
    }
    if (leftValue !== rightValue) {
      // if both values exist and aren't equal,
      // return their difference
      return leftValue - rightValue;
    }

    left++;
    right++;
  }

  // returns < 0 sorts to left
  // returns > 0 sorts to right
  // returns 0 stays in place
}

const test = [
  [7, 7, 7],
  [7, 7, 7],
];

function isRightOrder(left, right) {
  // Base Case 1
  // if both are numbers
  if (typeof left === "number" && typeof right === "number") {
    return left <= right;
  }

  // Base Case 2
  // if either are undefined
  // if left defined and right undefined, return false
  // if left undefined and right defined, return true
  if (typeof left === "undefined" && typeof right !== "undefined") {
    return true;
  }
  if (typeof left !== "undefined" && typeof right === "undefined") {
    return false;
  }

  // Base Case 3 = Maybe
  // if both undefined, return true
  if (typeof left === "undefined" && typeof right === "undefined") {
    return true;
  }

  // confirm a is list or cast
  if (typeof left === "number") {
    left = [left];
  }
  // confirm b is list or cast
  if (typeof right === "number") {
    right = [right];
  }
  // set index to 0
  let leftIndex = 0;
  let rightIndex = 0;
  let inRightOrder = true;
  // Check each element in left and right

  // return continue
}
