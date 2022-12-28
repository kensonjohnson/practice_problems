const lowercaseACharCode = "a".charCodeAt(0);
const lowercaseZCharCode = "z".charCodeAt(0);
const uppercaseACharCode = "A".charCodeAt(0);
const uppercaseZCharCode = "Z".charCodeAt(0);

function isLetter(character) {
  return isUppercase(character) || isLowercase(character);
}

function isUppercase(character) {
  const charCode = character.charCodeAt(0);
  return charCode >= uppercaseACharCode && charCode <= uppercaseZCharCode;
}

function isLowercase(character) {
  const charCode = character.charCodeAt(0);
  return charCode >= lowercaseACharCode && charCode <= lowercaseZCharCode;
}

function rot(string, shift) {
  let result = "";

  for (const c of string) {
    if (!isLetter(c)) {
      result += c;
      continue;
    }

    const charCode = c.charCodeAt(0);
    const aValue = isLowercase(c) ? lowercaseACharCode : uppercaseACharCode;
    const baseValue = charCode - aValue;
    const shiftedBaseCharCode = ((baseValue + shift) % 26) + 26;
    const shiftedCharCode = (shiftedBaseCharCode % 26) + aValue;

    result += String.fromCharCode(shiftedCharCode);
  }

  console.log(result);
  return result;
}

console.log(rot("A", -1) === "Z");
console.log(rot("A", -27) === "Z");
console.log(rot("Z", 1) === "A");
console.log(rot("Z", 27) === "A");
