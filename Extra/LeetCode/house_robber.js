const nums1 = [1, 2, 3, 1]; // Expect 4
const nums2 = [2, 7, 9, 3, 1]; // Expect 12

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let answer = 0;
  let currentMax = 0;
  let canTake = true;
  // iterate over nums
  for (let i = 0; i < nums.length; i++) {
    // look forward 2 houses
    const house = nums[i];
    const nextHouse = nums[i + 2];
    if (!nextHouse) {
      break;
    }
    // if current nums[i] + nums[i + 2] > nums[i + 1]
    if (house + nextHouse > currentMax && canTake) {
      // push current house
      answer += currentMax;
      // keep total of nums[i] + nums[i + 2]
    } else {
      canTake = true;
    }
    currentMax = house + nextHouse;
  }
  return answer;
  // if not, skip current
};

console.log(rob(nums1));
