const question =
  "What are the shortest words that start with “PRO” and end in “ING”? Make sure your solution can handle ties.";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

let answer = [];
let tempWords = [];
const startsWith = "PRO";
const endsWith = "ING";

// iterate over scrabbleWords
scrabbleWords.forEach((word) => {
  // check if current word starts with PRO and ends with ING
  if (word.startsWith(startsWith) && word.endsWith(endsWith)) {
    // if a match, store word in tempWords Array
    tempWords.push(word);
  }
});

// sort tempWords by word length from shortest to longest
tempWords.sort((a, b) => {
  return a.length - b.length;
});

// iterate over tempWords
for (let i = 0; i < tempWords.length; i++) {
  // check if word is equal to the length of the first word in tempWords
  if (tempWords[i].length === tempWords[0].length) {
    // if a match, store word in aswer Array
    answer.push(tempWords[i]);
  } else {
    // if not a match, no more matches can be made, break out of loop
    break;
  }
}

// format the answer
console.log(question);
console.log(answer);
