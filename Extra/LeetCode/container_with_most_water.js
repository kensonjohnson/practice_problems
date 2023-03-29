// You are given an integer array height of length n. There are n vertical lines
// drawn such that the two endpoints of the ith line are (i, 0) and
// (i, height[i]).

// Find two lines that together with the x-axis form a container, such that
// the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:
const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
const height2 = [1, 1];
// Output: 1

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // Setup our left and right "pointers"
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  // Store our answer
  let biggestContainerStorage = 0;

  // Loop until pointers cross
  while (leftIndex < rightIndex) {
    // Get the heights of both walls and caclulate the dimensions of the current container
    const leftWallHeight = height[leftIndex];
    const rightWallHeight = height[rightIndex];
    const bottomWidth = rightIndex - leftIndex;
    const shortWall = Math.min(leftWallHeight, rightWallHeight);
    const currentContainerSorage = bottomWidth * shortWall;

    // Check against our biggest container found so far
    biggestContainerStorage = Math.max(
      currentContainerSorage,
      biggestContainerStorage
    );
    // If the left wall is the short wall, move point to the right,
    // otherwise move the right pointer to the left
    shortWall == leftWallHeight ? leftIndex++ : rightIndex--;
  }

  return biggestContainerStorage;
};
