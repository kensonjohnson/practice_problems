// Write a function that takes as input two arguments:

// 1. An array of numbers
// 2. An integer `k`

// and returns an array with all of the pairs of numbers from that array that
// sum to `k`. You can’t use the same number twice. You can assume that there
// are no duplicate numbers in the array.

const testArray = [1, 9, 6, 3, 5, 4];

const k = 10; // we expect [[1,9], [6,4]]

// function takes in array of number and integer k
function pairSum(arrayOfNumbers, k) {
  let result = [];
  // interage over array
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    // check if current number can total k with any other number
    for (let j = i + 1; j < arrayOfNumbers.length; j++) {
      if (arrayOfNumbers[i] === arrayOfNumbers[j]) continue;
      if (arrayOfNumbers[i] + arrayOfNumbers[j] === k) {
        // if it can, store that pair as an array, in an answer array
        result.push([arrayOfNumbers[i], arrayOfNumbers[j]]);
      }
    }
  }
  return result;
}

console.log(pairSum(testArray, k));
