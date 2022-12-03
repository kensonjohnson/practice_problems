const question =
  "What are the longest baby names in the top 40 baby names for 2020? Make sure you can handle if there’s a tie.";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const babyNames = fileReader("../baby_names_2020_short.txt");

let answer = [];

// sort baby names by length, longest to shortest
babyNames.sort((a, b) => {
  return b.length - a.length;
});

// iterate over baby names
for (i = 0; i < babyNames.length; i++) {
  // check if current baby name length is equal to first baby name length
  if (babyNames[i].length === babyNames[0].length) {
    // if a match, store the baby name in the answer array
    answer.push(babyNames[i]);
  } else {
    // if not a match, no more can match so break out
    break;
  }
}

// format answer
console.log(question);
console.log("The longest baby name(s) for 2020 would be:");
console.log(answer);
