// Given an array of strings words (without duplicates), return all the concatenated
// words in the given list of words.

// A concatenated word is defined as a string that is comprised entirely of at least
// two shorter words (not necesssarily distinct) in the given array.

// Example 1:
const words1 = [
  "cat",
  "cats",
  "catsdogcats",
  "dog",
  "dogcatsdog",
  "hippopotamuses",
  "rat",
  "ratcatdogcat",
];
// Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
// Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats";
// "dogcatsdog" can be concatenated by "dog", "cats" and "dog";
// "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

// Example 2:
const words2 = ["cat", "dog", "catdog"];
// Output: ["catdog"]

/**
 * @param {string[]} words
 * @return {string[]}
 */
// var findAllConcatenatedWordsInADict = function (words) {
//   const dictionary = new Set(words);
//   const answer = [];

//   words.forEach((word) => {
//     dictionary.delete(word);
//     if (validateWordsRecursively(word, dictionary)) {
//       answer.push(word);
//     }
//     dictionary.add(word);
//   });

//   return answer;
// };

// function validateWordsRecursively(word, dictionary) {
//   if (dictionary.has(word)) {
//     return true;
//   }

//   for (let i = 1; i < word.length; i++) {
//     if (dictionary.has(word.slice(0, i))) {
//       return validateWordsRecursively(word.slice(i), dictionary);
//     }
//   }
//   return false;
// }
var findAllConcatenatedWordsInADict = function (words) {
  const dictionary = new Set(words);
  const answer = [];

  for (const word of words) {
    //"cat", "dog", "catdog"
    const seen = new Map();
    dictionary.delete(word);
    if (validateWordsRecursively(word, dictionary, seen)) answer.push(word);
    dictionary.add(word);
  }
  return answer;
};

function validateWordsRecursively(word, dictionary, seen) {
  if (word.length == 0) return true;
  if (seen.has(word)) return seen.get(word);

  for (let i = 1; i <= word.length; i++) {
    const leftWord = word.slice(0, i);
    const rightWord = word.slice(i);

    if (dictionary.has(leftWord)) {
      if (
        dictionary.has(rightWord) ||
        validateWordsRecursively(rightWord, dictionary, seen)
      ) {
        seen.set(word, true);
        return true;
      }
    }
  }
  seen.set(word, false);
  return false;
}

console.log(findAllConcatenatedWordsInADict(words1));
console.log(findAllConcatenatedWordsInADict(words2));

// function dfs(word, set, memo) {
//   if (word.length === 0) return false;
//   if (memo.has(word)) return memo.get(word);

//   for (let i = 1; i < word.length; i++) {
//     const left = word.substring(0, i);
//     const right = word.substring(i);

//     if (set.has(left)) {
//       if (set.has(right) || dfs(right, set, memo)) {
//         memo.set(word, true);
//         return true;
//       }
//     }
//   }

//   memo.set(word, false);
//   return false;
// }

function dfs(word, set) {
  if (word.length === 0) return false;

  for (let i = 1; i < word.length; i++) {
    const left = word.substring(0, i);
    const right = word.substring(i);

    if (set.has(left)) {
      if (set.has(right) || dfs(right, set)) {
        return true;
      }
    }
  }

  return false;
}
