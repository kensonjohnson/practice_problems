// You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].

// Implement the SmallestInfiniteSet class:

// SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain all positive integers.
// int popSmallest() Removes and returns the smallest integer contained in the infinite set.
// void addBack(int num) Adds a positive integer num back into the infinite set, if it is not already
// in the infinite set.

// Example 1:

// Input
// ["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack",
// "popSmallest", "popSmallest", "popSmallest"]
// [[], [2], [], [], [], [1], [], [], []]

// Output
// [null, null, 1, 2, 3, null, 1, 4, 5]

// Explanation
// SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
// smallestInfiniteSet.addBack(2);    // 2 is already in the set, so no change is made.
// smallestInfiniteSet.popSmallest(); // return 1, since 1 is the smallest number, and
// remove it from the set.
// smallestInfiniteSet.popSmallest(); // return 2, and remove it from the set.
// smallestInfiniteSet.popSmallest(); // return 3, and remove it from the set.
// smallestInfiniteSet.addBack(1);    // 1 is added back to the set.
// smallestInfiniteSet.popSmallest(); // return 1, since 1 was added back to the set and
// is the smallest number, and remove it from the set.
// smallestInfiniteSet.popSmallest(); // return 4, and remove it from the set.
// smallestInfiniteSet.popSmallest(); // return 5, and remove it from the set.

var SmallestInfiniteSet = function () {
  // Given the constraints of only needing to pop the SMALLEST value,
  // we can simply store the highest number that we have "popped" off.
  // We start off with 1 because: 1 <= num <= 1000
  // In this way, we are implicitly storing 1 to Infinity.
  this.lastCount = 1;
  // We need a place to store numbers that are added back if they
  // are also lower than the highest number we have popped.
  this.addedBack = [];
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  // We just have to check if anything is in the addedBack array.
  // We assume that the array is sorted in descending order, so
  // we can just pop off the last element.
  if (this.addedBack.length) {
    return this.addedBack.pop();
  } else {
    // Otherwise, we return the count and increment it AFTER the return.
    return this.lastCount++; // This returns then performs the increment.
  }
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  // We only have to store the num given if it is LESS than the highest number
  // we've already popped.
  if (num < this.lastCount) {
    // We have to check and see if the number already exists in the addedBack
    // array. Read this check as "if num doesn't exist."
    if (
      !this.addedBack.some((number) => {
        return number === num;
      })
    ) {
      // We add the num to our addedBack array and sort descending
      this.addedBack.push(num);
      this.addedBack.sort((a, b) => {
        return b - a;
      });
    }
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
