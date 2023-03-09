const nums1 = [1, 2, 3, 1]; // Expect 4
const nums2 = [2, 7, 9, 3, 1]; // Expect 12
const nums3 = [1]; // Expect 1
const nums4 = [1, 1]; // Expect 1
const nums5 = [1, 1, 1]; // Expect 2
const nums6 = [1, 2, 1, 1]; // Expect 3
const nums7 = [1, 3, 1, 3, 100]; // Expect 103

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  if (nums.length === 3) {
    return Math.max(nums[0] + nums[2], nums[1]);
  }
  let answer = 0;
  let currentMax = 0;
  let canTake = true;
  let start = 0;

  // iterate over nums
  for (let i = start; i < nums.length; i++) {
    // console.log("i = ", i, " answer = ", answer, " canTake = ", canTake);
    // look forward 2 houses
    const house = nums[i];
    let nextHouse = nums[i + 2];
    if (!nextHouse) {
      if (!canTake) {
        answer += nums[i + 1];
      }
      break;
    }
    // if current nums[i] + nums[i + 2] > nums[i + 1]
    if (canTake && house + nextHouse > nums[i + 1]) {
      // push current house
      canTake = false;
      // keep total of nums[i] + nums[i + 2]
    } else {
      answer += currentMax;
      canTake = true;
    }
    currentMax = house + nextHouse;
  }
  return answer;
  // if not, skip current
};

console.log("Old Function:");
console.log("Expect 4: ", rob(nums1));
console.log("Expect 12: ", rob(nums2));
console.log("Expect 1: ", rob(nums3));
console.log("Expect 1: ", rob(nums4));
console.log("Expect 2: ", rob(nums5));
console.log("Expect 3: ", rob(nums6));
console.log("Expect 103: ", rob(nums7));

var robDP = function (nums) {
  let runningBest = 0;
  let previousTotal = 0;
  // iterate over nums
  for (let i = 0; i < nums.length; i++) {
    const highestTotal = Math.max(nums[i] + previousTotal, runningBest);
    previousTotal = runningBest;
    runningBest = highestTotal;
  }
  return runningBest;
};
console.log("\nDP Function:");
console.log("Expect 4: ", robDP(nums1));
console.log("Expect 12: ", robDP(nums2));
console.log("Expect 1: ", robDP(nums3));
console.log("Expect 1: ", robDP(nums4));
console.log("Expect 2: ", robDP(nums5));
console.log("Expect 3: ", robDP(nums6));
console.log("Expect 103: ", robDP(nums7));
