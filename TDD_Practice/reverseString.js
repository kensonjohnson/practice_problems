export function reverseString(string) {
  if (typeof string !== "string") return null;
  let stringArray = string.split("");
  stringArray.reverse();
  return stringArray.join("");
}
