const question = "Which of the letters Q, X, and Z is the least common?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

let words = scrabbleWords;
const subStrings = ["Q", "X", "Z"];

function findHowMany(arrayToFilter, letterToFind) {
  const allWords = arrayToFilter;
  const letter = letterToFind;
  let numberOfTimes = 0;
  for (i = 0; i < allWords.length; i++) {
    const word = allWords[i];
    for (f = 0; f < word.length; f++) {
      if (word[f] == letter) numberOfTimes = numberOfTimes + 1;
    }
  }
  return numberOfTimes;
}

function findLeastCommon(arrayToFilter, arrayOfLetters) {
  const allWords = arrayToFilter;
  const letters = arrayOfLetters;
  let leastCommon = "";
  let times = 99999;
  for (let i = 0; i < letters.length; i++) {
    let howManyTimes = findHowMany(allWords, letters[i]);
    if (howManyTimes < times) {
      leastCommon = letters[i];
      times = howManyTimes;
    }
  }
  return leastCommon;
}
let answer = findLeastCommon(words, subStrings);

console.log(question);
console.log(
  `${answer}, which occurs ${findHowMany(scrabbleWords, answer)} times`
);
