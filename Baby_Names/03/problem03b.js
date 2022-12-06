const question =
  "There is at least one baby name from the top 40 baby names for 2020 that, when spelled backwards, is a valid Scrabble word. Find and print all such names.";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

console.time("Total Time");
console.time("Setting up the Data");
const babyNames = fileReader("../baby_names_2020_short.txt");
console.time("Setup the Array");
const arrayOfWords = fileReader("../sowpods.txt");
console.timeEnd("Setup the Array");
console.time("Setup the Set");
const scrabbleWords = new Set(arrayOfWords);
console.timeEnd("Setup the Set");
console.timeEnd("Setting up the Data");

let answer = [];

// write a function to reverse names
function reverseWord(word) {
  let reversed = "";
  for (i = word.length - 1; i >= 0; i--) {
    reversed = reversed + word.charAt(i);
  }
  return reversed;
}

console.time("Finding the Answer");

// iterate over babyNames
babyNames.forEach((babyName) => {
  const reversedName = reverseWord(babyName).toUpperCase();
  // check each name after its reversed to each scrabble word,
  if (scrabbleWords.has(reversedName)) {
    // if a match, store name in answer array
    answer.push(babyName);
  }
});
console.timeEnd("Finding the Answer");
console.timeEnd("Total Time");

// format the answer
console.log(question);
console.log(answer);
