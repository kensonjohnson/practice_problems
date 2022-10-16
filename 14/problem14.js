const question = "What is the longest word that contains no vowels?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader(
  "/home/kenson/repos/practice_problems/sowpods.txt"
);

const vowels = ["A", "E", "I", "O", "U", "Y"];

function filterWithSubstrings(arrayToFilter, arrayOfSubstrings) {
  let finalResult = arrayToFilter;
  for (i = 0; i < arrayOfSubstrings.length; i++) {
    finalResult = finalResult.filter((element) => {
      if (!element.includes(arrayOfSubstrings[i])) return true;
    });
  }
  return finalResult;
}

function findLongestWord(arrayToFilter) {
  let longestWord = arrayToFilter[0];
  const words = arrayToFilter;
  for (i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) longestWord = words[i];
  }
  return longestWord;
}

let wordsWithoutVowels = filterWithSubstrings(scrabbleWords, vowels);

let answer = findLongestWord(wordsWithoutVowels);

console.log(question);
console.log(answer);
