const question =
  "What is the longest word that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties.";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

let answer = [];
let tempWords = [];

// iterate over scrabbleWords
scrabbleWords.forEach((word) => {
  // create variable onlyRSTLNE to determine if a word is good to add to the tempWords Array
  let onlyRSTLNE;

  // iterate over current word
  for (let i = 0; i < word.length; i++) {
    // check if current letter is equal to R, S, T, L, N, E
    if (
      word.charAt(i) === "R" ||
      word.charAt(i) === "S" ||
      word.charAt(i) === "T" ||
      word.charAt(i) === "L" ||
      word.charAt(i) === "N" ||
      word.charAt(i) === "E"
    ) {
      // if not a match, set onlyRSTLNE to true and keep iterating
      onlyRSTLNE = true;
    } else {
      // if not a match, set onlyRSTLNE to false and break from loop
      onlyRSTLNE = false;
      break;
    }
  }
  // after the loop, check if onlyRSTLNE is true
  if (onlyRSTLNE) {
    // if true, add current word to answer Array
    tempWords.push(word);
  }
});

// sort tempWords from longest to shortest
tempWords.sort((a, b) => {
  return b.length - a.length;
});

// iterate over tempWords
for (let i = 0; i < tempWords.length; i++) {
  // check if current word is the same length as the first word in tempWords
  if (tempWords[i].length === tempWords[0].length) {
    // if a match, store the word in the answer Array
    answer.push(tempWords[i]);
  } else {
    // if not a match, no more matches can be made, so break out of loop
    break;
  }
}

// format the answer
console.log(question);
console.log(answer);
