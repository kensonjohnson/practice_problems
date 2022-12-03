const question =
  "There is at least one country name that contains another country name. Find all of these cases.";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const countries = fileReader("../countries.txt");

let answer = [];

// iterate over each country name
countries.forEach((country) => {
  for (i = 0; i < countries.length; i++) {
    // skip the current counrty
    if (countries[i] === country) {
      continue;
    }
    // check if that country name is contained within any other country name
    if (countries[i].includes(country)) {
      // if it is, store that in an object
      // store the object in the answer array
      answer.push({ country: countries[i], includes: country });
    }
  }
});

// iterate over the answer array to format the output
answer.forEach((answer) => {
  console.log(`${answer.includes} is contained within ${answer.country}`);
});
