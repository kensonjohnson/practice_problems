// Write a function that takes as input two arguments:

// 1. An array of numbers
// 2. An integer `k`

// and returns the `k` largest values from that array. The order of the elements
// in the returned array doesn’t matter.

// function takes array of number and integer
function largestElements(arrayOfNumbers, k) {
  // sort array from highest to lowest
  arrayOfNumbers.sort((a, b) => {
    return b - a;
  });

  // return array of numbers from the front, equal to integer k
  return arrayOfNumbers.slice(0, 3);
}
console.log(largestElements([5, 16, 7, 9, -1, 4, 3, 11, 2], 3));
