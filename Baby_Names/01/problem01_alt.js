const question =
  "What is the shortest baby name in the top 40 baby names for 2020?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const babyNames = fileReader("../baby_names_2020_short.txt");

let answer = [];
let shortestLength = 99;

// iterate over babyNames
babyNames.forEach((babyName) => {
  // check length of each name and compare with shortest length found so far
  if (babyName.length < shortestLength) {
    // if length is shorter, store new max length
    shortestLength = babyName.length;
  }
});

// iterate over babyNames
babyNames.forEach((babyName) => {
  // check if babyName is the same length as shortestLength
  if (babyName.length === shortestLength) {
    // if a match, store babyname in answer array
    answer.push(babyName);
  }
});

// format answer
console.log(question);
console.log("The shortest baby name(s) for 2020 would be:");
console.log(answer);
