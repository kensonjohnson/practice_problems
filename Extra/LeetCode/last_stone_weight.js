// You are given an array of integers stones where stones[i] is the weight
// of the ith stone.

// We are playing a game with the stones. On each turn, we choose the
// heaviest two stones and smash them together. Suppose the heaviest two
// stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight
// y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones
// left, return 0.

// Example 1:

const stones1 = [2, 7, 4, 1, 8, 1];
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

// Example 2:
const stones2 = [1];
// Output: 1

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  // iterate until only one stone is left
  while (stones.length > 1) {
    stones.sort((a, b) => {
      return a - b;
    }); // sort the stones in ascending order;
    stones[stones.length - 2] =
      stones[stones.length - 1] - stones[stones.length - 2]; //smash the first and second stones ie the stones with largest weight ans assign the remaining stone weight to 1st index
    stones.pop(); // Remove the last item in the array
  }
  return stones[0]; // return the only stone left
};

console.log(lastStoneWeight(stones1));
console.log(lastStoneWeight(stones2));
