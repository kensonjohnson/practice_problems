const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const strs2 = [""];
const strs3 = ["a"];

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // create Map for storing words
  const answer = new Map();
  // iterate over strs
  strs.forEach((word) => {
    // for each word,
    let sorted = word.split("").sort().join("");
    if (answer.has(sorted)) {
      // if in map, just push the word
      answer.get(sorted).push(word);
    } else {
      // if not in map, create the key and push the word
      answer.set(sorted, [word]);
    }
  });

  const final = [];
  answer.forEach((values) => {
    final.push(values);
  });

  return final;
};

console.log(groupAnagrams(strs));
