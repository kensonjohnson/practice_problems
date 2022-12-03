const question =
  "What countries use only one vowel in their name (the vowel can be used multiple times)";
// For example, if the word “BEEKEEPER” were a country, it would be an answer, because it only uses “E”.

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const countries = fileReader("../countries.txt");

let answer = [];

// iterate over each country name
countries.forEach((countryName) => {
  let hasOneVowel = true;
  const country = countryName.toLowerCase();
  let currentVowel = "";
  // iterate over each char in the country name
  for (i = 0; i < country.length; i++) {
    if (
      country.charAt(i) === "a" ||
      country.charAt(i) === "e" ||
      country.charAt(i) === "i" ||
      country.charAt(i) === "o" ||
      country.charAt(i) === "u"
    ) {
      // if a vowel is found, store that value
      if (currentVowel === "") {
        currentVowel = country.charAt(i);
      }
      // continue to iterate until another vowel is found or end of word is reached
      // if another vowel is found, check against first vowel
      // if vowels match, continue iterating
      // if vowels differ, stop iterating and move on to next country name
      if (currentVowel != country.charAt(i)) {
        hasOneVowel = false;
        break;
      }
    }
  }
  // if end of counrty name is reached and only one vowel found, store the counrty name in the answer array
  if (hasOneVowel) {
    answer.push(countryName);
  }
});

console.log(question);
console.log(answer);
