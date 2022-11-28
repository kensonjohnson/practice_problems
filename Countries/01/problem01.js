const question =
  "What are all of the countries that have “United” in the name?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const countries = fileReader("../countries.txt");

const answer = countries.filter((country) => {
  if (country.includes("United")) return true;
});

console.log(question);
console.log(answer);
