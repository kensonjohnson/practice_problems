const s = "   -42";
const s2 = "4193 with words";
const s3 = "words 4193 with words";
const s4 = "21474836460";

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const n = s.length;
  let num = "";
  // walk the string
  for (let i = 0; i < n; i++) {
    // ignore characters other than integers and -/+
    // once a sign or number is found, start storing as string
    const char = s.charAt(i);

    if (char === " " && num.length === 0) {
      continue;
    }

    if (num.length === 0 && (char === "-" || char === "+")) {
      // progress, storing each number until a char out of def
      num += char;
      continue;
    }

    if (!isNaN(parseInt(char))) {
      if (char.charCodeAt(0) > 47 && char.charCodeAt(0) <= 57) {
        num += char;
        continue;
      }
    }

    break;
  }
  if (num === "" || num === "-" || num === "+") {
    return 0;
  }
  console.log(num);
  // convert string to int and return
  return clamp(parseInt(num), Math.pow(-2, 31), Math.pow(2, 31) - 1);
};

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

// console.log(myAtoi(s));
// console.log(myAtoi(s2));
// console.log(myAtoi(s3));
console.log(myAtoi(s4));

// console.log(
//   clamp(parseInt("21474836460"), Math.pow(-2, 31), Math.pow(2, 31) - 1)
// );
console.log(parseInt("21474836460"));
