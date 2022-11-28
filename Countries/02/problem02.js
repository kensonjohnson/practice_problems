const question = "What countries both begin and end with a vowel?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const countries = fileReader("../countries.txt");

let answer = [];

// for (let i = 0; i < countries.length; i++) {
//   const country = countries[i];
//   const firstLetter = country[0].toLowerCase();
//   console.log(firstLetter);
// }

for (let i = 0; i < countries.length; i++) {
  let firstLetterCheck = false;
  let lastLetterCheck = false;
  const country = countries[i];
  const firstLetter = country[0].toLowerCase();
  const lastLetter = country[country.length - 1].toLowerCase();
  if (
    firstLetter === "a" ||
    firstLetter === "e" ||
    firstLetter === "i" ||
    firstLetter === "o" ||
    firstLetter === "u"
  ) {
    firstLetterCheck = true;
  }

  if (
    lastLetter === "a" ||
    lastLetter === "e" ||
    lastLetter === "i" ||
    lastLetter === "o" ||
    lastLetter === "u"
  ) {
    lastLetterCheck = true;
  }
  if (firstLetterCheck && lastLetterCheck) {
    answer.push(countries[i]);
  }
}
console.log(question);
console.log(answer);
