import { capitalize } from "./capitalize.js";

test("Returns null if something other than a string is passed in.", () => {
  const result = capitalize(123);
  expect(result).toBeNull();
});

test("Returns a string with only the first letter capitalized.", () => {
  const result = capitalize("tEsT");
  expect(result).toBe("Test");
});
