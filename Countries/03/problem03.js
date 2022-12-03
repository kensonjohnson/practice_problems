const question = "What country names are > 50% vowels?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const countries = fileReader("../countries.txt");

let answer = [];

function isMostlyVowels(countryName) {
  let numberOfVowels = 0;
  let numberOfConsonants = 0;
  const country = countryName.toLowerCase();
  for (let i = 0; i < country.length; i++) {
    if (
      country[i] === "a" ||
      country[i] === "o" ||
      country[i] === "i" ||
      country[i] === "o" ||
      country[i] === "u"
    ) {
      numberOfVowels++;
    } else {
      numberOfConsonants++;
    }
  }

  if (numberOfVowels > numberOfConsonants) {
    return true;
  }

  return false;
}

for (i = 0; i < countries.length; i++) {
  if (isMostlyVowels(countries[i])) {
    answer.push(countries[i]);
  }
}

console.log(question);
console.log(answer);
