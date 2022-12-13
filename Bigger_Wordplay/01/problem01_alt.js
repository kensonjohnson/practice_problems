// The question is bit ambiguous,
// so I have a variation that assumes a letter cannot appear anywhere else in the word.

import readFile from "../../CustomParser.js";

const scrabbleWords = readFile("../sowpods.txt");

const question = "What is the longest word that has no repeating letters?\n";

let answer = [];
let longestFound = 0;
let hasRepeats = false;

// iterate over scrabbleWords
scrabbleWords.forEach((word) => {
  // check if word is as long as longestFound
  if (typeof word !== "string" || word.length < longestFound) {
    // if not, skip the word
    return;
  }

  if (word.length > longestFound) {
    // if word.length is GREATER than longestFound, set the answer array to empty and store new longestFound
    answer = [];
    longestFound = word.length;
  }

  // check if word has repeating letters
  hasRepeats = false;
  const letters = new Set();
  for (let i = 0; i < word.length; i++) {
    if (letters.has(word.charAt(i))) {
      hasRepeats = true;
      break;
    }
    letters.add(word.charAt(i));
  }
  //if it does, skip to next word
  if (hasRepeats) {
    return;
  }

  // if not, push() the word to the answer array
  answer.push(word);
});

console.log(question);
console.log(`${answer.length} words fit the answer to this question:\n`);
console.log(answer);
