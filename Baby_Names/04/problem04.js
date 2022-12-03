const question =
  "What are all of the names that were top 40 baby names in both 1880 and 2020?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const babyNames = fileReader("../baby_names_2020_short.txt");
const babyNames1880 = fileReader("../baby_names_1880_short.txt");

let answer = [];

// iterate over 1880 baby names
babyNames1880.forEach((name) => {
  // for each name in 1880 baby names, iterate over 2020 baby names
  babyNames.forEach((name2020) => {
    // check each 2020 baby name against 2020 baby name
    if (name === name2020) {
      // if a match, store the name in the answer array
      answer.push(name);
    }
  });
});

// format answer
console.log(question);
console.log(answer);
