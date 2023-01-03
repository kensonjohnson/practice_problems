import { reverseString } from "./reverseString.js";

test("Takes in string and returns that string reversed", () => {
  expect(reverseString("test")).toBe("tset");
});

test("Returns null if it doesn't recieve a string", () => {
  expect(reverseString(123)).toBeNull();
});
