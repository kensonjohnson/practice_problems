const question = "What countries both begin and end with a vowel?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const countries = fileReader("../countries.txt");

let answer = [];

for (let i = 0; i < countries.length; i++) {
  const country = countries[i];

  if (
    hasVowelAtPosition(country, 0) &&
    hasVowelAtPosition(country, country.length - 1)
  ) {
    answer.push(countries[i]);
  }
}

function hasVowelAtPosition(string, index) {
  const word = string.toLowerCase();
  if (
    word.charAt(index) === "a" ||
    word.charAt(index) === "e" ||
    word.charAt(index) === "i" ||
    word.charAt(index) === "o" ||
    word.charAt(index) === "u"
  ) {
    return true;
  }
  return false;
}

console.log(question);
console.log(answer);

// var country = "Albania";
// var index = 0;
// console.log(hasConsonantAtPosition(country, index)); // should print false
