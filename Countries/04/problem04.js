const question =
  "What is the shortest country name? Make sure your solution can handle ties.";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const countries = fileReader("../countries.txt");

let answer = [];

// sort the countries by length of names
countries.sort((a, b) => {
  return a.length - b.length;
});

// iterate through the countries
for (i = 0; i < countries.length; i++) {
  // compare each country with the length of the first country
  if (countries[i].length === countries[0].length) {
    // if length matches, store the country name in the answer array
    answer.push(countries[i]);
  } else {
    // if length does not match, no more countries will match so we break out
    break;
  }
}

// format answer
console.log(question);
console.log("The shortest country name(s) would be:");
console.log(answer);
