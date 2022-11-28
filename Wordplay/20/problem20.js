// This file needs to be in the same folder as a copy of sowpods.txt
// to run.
const fs = require("fs");
const text = fs.readFileSync("sowpods.txt").toString("utf-8");
const words = text.split("\n");

var specialLetters = "QXYZ";
var answers = [];
var isAMatch; // moved setting the variable to inside the for loop

for (let i = 0; i < words.length - 1; i++) {
  isAMatch = true; // this makes sure that the variable gets reset each time it iterates
  for (let j = 0; j < specialLetters.length - 1; j++) {
    if (!words[i].includes(specialLetters[j])) {
      isAMatch = false;
    }
  }
  if (isAMatch) {
    answers.push(words[i]); // changed answers.push(words[j]) to answers.push(words[i])
  }
}

for (let i = 0; i < answers.length; i++) {
  console.log(answers[i]);
}
