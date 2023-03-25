const s = "5F3Z-2e-9-w",
  k = 4;

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  const string = s.replaceAll("-", "").toUpperCase();
  const substrings = [];
  const firstGroupLength = string.length % k;
  // First substring
  if (firstGroupLength > 0) {
    substrings.push(string.slice(0, firstGroupLength));
  }

  // All remaining substrings
  for (let i = firstGroupLength; i < string.length; i += k) {
    substrings.push(string.slice(i, i + k));
  }
  return substrings.join("-");
};

console.log(licenseKeyFormatting(s, k));
