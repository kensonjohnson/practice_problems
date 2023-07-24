const question =
  "What are all of the letters that never appear consecutively in an English word?";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

const substrings = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function filterWithSubstrings(arrayToFilter, letterToCheck) {
  let finalResult = arrayToFilter;
  finalResult = finalResult.some((element) => {
    if (element.includes(letterToCheck)) {
      return true;
    }
  });
  return finalResult;
}

function findNonConsecutiveLetters(arrayToSearch, arrayOfLetters) {
  let nonConsecutiveLetters = [];
  for (i = 0; i < arrayOfLetters.length; i++) {
    if (
      !filterWithSubstrings(
        arrayToSearch,
        arrayOfLetters[i] + arrayOfLetters[i]
      )
    ) {
      nonConsecutiveLetters.splice(
        nonConsecutiveLetters.length,
        0,
        arrayOfLetters[i]
      );
    }
  }
  return nonConsecutiveLetters;
}
// answer = findNonConsecutiveLetters(scrabbleWords, substrings);
// console.log(question);
// console.log(answer);

function findNonConsecutiveLetters2(words) {
  const letters = new Set();

  for (const word of words) {
    const wordLength = word.length;

    for (let i = 0; i < wordLength - 1; i++) {
      const currentLetter = word[i];
      const nextLetter = word[i + 1];

      if (currentLetter !== nextLetter) {
        letters.add(currentLetter);
      }
    }
  }

  return Array.from(letters).sort();
}

console.log(findNonConsecutiveLetters2(scrabbleWords));
