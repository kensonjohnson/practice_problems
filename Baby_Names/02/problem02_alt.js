const question =
  "What are the longest baby names in the top 40 baby names for 2020? Make sure you can handle if there’s a tie.";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const babyNames = fileReader("../baby_names_2020_short.txt");

let answer = [];
let maxLength = 0;

// iterate over babyNames
babyNames.forEach((babyName) => {
  // check length of each name and compare with max length found so far
  if (babyName.length > maxLength) {
    // if length is shorter, store new max length
    maxLength = babyName.length;
  }
});

// iterate over babyNames
babyNames.forEach((babyName) => {
  // check if babyName is the same length as maxLength
  if (babyName.length === maxLength) {
    // if a match, store babyname in answer array
    answer.push(babyName);
  }
});

// format answer
console.log(question);
console.log("The longest baby name(s) for 2020 would be:");
console.log(answer);
