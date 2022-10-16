const question =
  "What are all of the words that have all 5 vowels, in alphabetical order?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader(
  "/home/kenson/repos/practice_problems/sowpods.txt"
);

const vowels = ["A", "E", "I", "O", "U"];

function filterWithSubstrings(arrayToFilter, arrayOfSubstrings) {
  let finalResult = arrayToFilter;
  for (i = 0; i < arrayOfSubstrings.length; i++) {
    finalResult = finalResult.filter((element) => {
      if (element.includes(arrayOfSubstrings[i])) return true;
    });
  }
  return finalResult;
}

function areVowelsInOrder(stringToCheck) {
  const word = stringToCheck;
  const wordLength = stringToCheck.length;
  //setting to A which is the lowest vowel
  let currentVowel = "A";

  for (i = 0; i < wordLength; i++) {
    if (
      word[i] == "A" ||
      word[i] == "E" ||
      word[i] == "I" ||
      word[i] == "O" ||
      word[i] == "U"
    ) {
      //check if vowel found above is lower than currently saved vowel
      if (word[i] < currentVowel) {
        return false;
      } else {
        //store the found vowel to check against the next one
        currentVowel = word[i];
      }
    }
  }
  return true;
}

let filteredWords = filterWithSubstrings(scrabbleWords, vowels);

let answer = filteredWords.filter((e) => {
  if (areVowelsInOrder(e)) return true;
});

console.log(question);
console.log(`${answer.length} matches were found:`);
console.log(answer);
