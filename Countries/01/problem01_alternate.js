// Without using Array.filter()

const question =
  "What are all of the countries that have “United” in the name?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const countries = fileReader("../countries.txt");

let answer = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("United")) {
    answer.push(countries[i]);
  }
}

console.log(question);
console.log(answer);
