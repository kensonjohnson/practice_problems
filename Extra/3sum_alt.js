const test1 = [-1, 0, 1, 2, -1, -4];
const test2 = [0, 1, 1];
const test3 = [0, 0, 0];

function threeSum(nums) {
  let results = [];

  if (!Array.isArray(nums) || nums.length < 3) {
    return results;
  }

  const map = {};
  const length = nums.length;
  for (var i = 0; i < length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }

  nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; nums[i] <= 0 && i < length - 1; i++) {
    let negativeNumber = nums[i];
    map[negativeNumber]--;
    if (i > 0 && negativeNumber === nums[i - 1]) {
      continue;
    }
    let j;
    for (j = length - 1; j > i && nums[j] >= 0; j--) {
      let positiveNumber = nums[j];
      map[positiveNumber]--;
      if (j < length - 1 && positiveNumber === nums[j + 1]) {
        continue;
      }
      let difference = 0 - negativeNumber - positiveNumber;
      if (map[difference] > 0) {
        results.push([negativeNumber, difference, positiveNumber]);
      }
      if (difference >= positiveNumber) {
        j--;
        break;
      }
    }

    for (++j; j < length; j++) {
      map[nums[j]] += 1;
    }
  }

  return results;
}

console.log(threeSum(test1));
// console.log(threeSum(test2));
// console.log(threeSum(test3));
