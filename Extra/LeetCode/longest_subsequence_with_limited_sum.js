/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  const answer = [];
  const n = nums.length;
  // sort nums ascending
  nums.sort((a, b) => {
    return a - b;
  });
  // iterate over queries
  queries.forEach((query) => {
    // do greedy algo to find longest
    let queryLength = 0;
    let index = 0;
    while (query > 0 && index < n) {
      query -= nums[index];
      if (query < 0) {
        break;
      }
      queryLength++;
      index++;
    }
    answer.push(queryLength);
  });
  return answer;
};
