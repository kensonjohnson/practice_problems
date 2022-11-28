const question = "What is the longest palindrome?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function findLongestWord(arrayToFilter) {
  let longestWord = arrayToFilter[0];
  const words = arrayToFilter;
  for (i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) longestWord = words[i];
  }
  return longestWord;
}

let palindromes = scrabbleWords.filter((e) => {
  if (e == reverseString(e)) return true;
});

let answer = findLongestWord(palindromes);

console.log(question);
console.log(answer);
