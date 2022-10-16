const question = "What is the shortest word that contains all 5 vowels?";

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
      if (element.includes(arrayOfSubstrings[i])) return true;
    });
  }
  return finalResult;
}

function findShortestWord(arrayToFilter) {
  let shortestWord = arrayToFilter[0];
  const words = arrayToFilter;
  for (i = 0; i < words.length; i++) {
    if (words[i].length < shortestWord.length) shortestWord = words[i];
  }
  return shortestWord;
}

let wordsWithAllVowels = filterWithSubstrings(scrabbleWords, vowels);

let answer = findShortestWord(wordsWithAllVowels);

console.log(question);
console.log(answer);
