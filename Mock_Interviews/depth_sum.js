// given an array sum all integers in the array
// each element has either an integer or an array of the same structure
// if an integer is in a nested array, multiply that by the depth before summing

const data = [1, [1, [1]], 5, [3], [2]];
const empty = [];
const allNums = [1, 2, 3, 4, 5];

function depthSum(element, level = 1) {
  let integerSum = 0;
  // filter out the nested arrays into a sub-array
  element.forEach((element) => {
    if (typeof element === "number") return (integerSum += element * level);
    integerSum += depthSum(element, level + 1);
  });

  return integerSum;
}

function depthSumWithReducer(array, level = 1) {
  return array.reduce((sum, element) => {
    if (typeof element === "number") return sum + element * level;
    return sum + depthSumWithReducer(element, level + 1);
  }, 0);
}

console.log(depthSum(data));
console.log(depthSumWithReducer(data));
console.log(depthSum(empty));
console.log(depthSumWithReducer(empty));
console.log(depthSum(allNums));
console.log(depthSumWithReducer(allNums));
