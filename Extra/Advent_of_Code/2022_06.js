import { data } from "./2022_06_data.js";

const sample = "mjqjpqmgbljsphdztnvjfqwrcgsmlb"; // Expect 7

function findIndexOfUniqueMarker(message, length) {
  // iterate over string
  for (let i = 0; i < message.length - length; i++) {
    // slice from index to index + length
    const subString = message.slice(i, i + length);
    if (hasNoDuplicates(subString)) {
      return i + length;
    }
  }
}

function hasNoDuplicates(subString) {
  const uniqueCharacters = new Set(subString);
  return uniqueCharacters.size === subString.length;
}

console.log(findIndexOfUniqueMarker(sample, 4)); // Expect 7
console.log(findIndexOfUniqueMarker(data, 4));

console.log(findIndexOfUniqueMarker(sample, 14));
console.log(findIndexOfUniqueMarker(data, 14));
