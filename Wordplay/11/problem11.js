const question = "How many words contain the substring 'TYPE?'";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

const substring = "TYPE";

answer = scrabbleWords.filter((e) => {
  if (e.includes(substring)) return true;
});

console.log(question);
console.log(
  `There are ${answer.length} words that contain ${substring} within them.`
);
console.log("Those words are:");
console.log(answer);
