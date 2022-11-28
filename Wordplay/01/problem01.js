const question = "What are all of the words containing UU?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

const substring = "UU";

let filteredWords = scrabbleWords.filter((element) => {
  if (element.includes(substring)) return true;
});

console.log(question);
console.log(`${filteredWords.length} matches found:`);
console.log(filteredWords);
