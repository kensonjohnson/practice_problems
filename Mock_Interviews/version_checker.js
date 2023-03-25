// check(version: string, conditions: string, expected_result: boolean)

// check("1", "1", True)
// check("1.3", "1, 1.3", True)
// check("1", "3", False)
// check("1.7", "2, 2.8", False)
// check("1.0", ">=1", True)
// check("1", ">=1.0", True)
// check("1.3", ">0.2,-1.333", True)
// check("1.3", ">1,-1.3", False)
// check("2", "<1.3, 56.x", False)
// check("1.0", "1, -1.2", True)
// check("1.3", ">0.9, -1.3", False)
// check("1.3", "1.x, -1.3", False)
// check("1.3", "<0.2, 1.3", True)

// return boolean
function check(version, conditions) {
  // parse to float
  const versionFloat = parseFloat(version);
  if (!versionFloat) {
    return false;
  }

  // Remove all whitespace and split into substrings on delimiter ","
  const conditionals = conditions.replace(/ /g, "").split(",");
  if (!conditionals.length) {
    return false;
  }

  // ------------ Process Substrings ------------ //

  // check for "-" to exclude version number
  for (const condition of conditionals) {
    if (condition.includes("-")) {
      const excludeVersion = condition.slice(1);
      if (versionFloat === parseFloat(excludeVersion)) {
        return false;
      }
    }
  }

  // check for exact match
  for (const condition of conditionals) {
    const exactVersion = parseFloat(condition); // setting to variable allows null checking
    // does not handle 0.0
    if (exactVersion && versionFloat === exactVersion) {
      return true;
    }
  }

  // check for conditional, like "<" or ">"
  for (const condition of conditionals) {
    if (condition.includes("<=")) {
      const conditionalVersion = parseFloat(condition.slice(2));
      if (conditionalVersion && versionFloat <= conditionalVersion) {
        return true;
      }
    }
    if (condition.includes(">=")) {
      const conditionalVersion = parseFloat(condition.slice(2));
      if (conditionalVersion && versionFloat >= conditionalVersion) {
        return true;
      }
    }
    if (condition.includes("<")) {
      const conditionalVersion = parseFloat(condition.slice(1));
      if (conditionalVersion && versionFloat < conditionalVersion) {
        return true;
      }
    }
    if (condition.includes(">")) {
      const conditionalVersion = parseFloat(condition.slice(1));
      if (conditionalVersion && versionFloat > conditionalVersion) {
        return true;
      }
    }
  }

  // look for wildcard "x"
  for (const condition of conditionals) {
    if (condition.includes("x")) {
      const wildcardVersion = parseInt(condition.replace("x", "0"));
      if (parseInt(versionFloat) === wildcardVersion) {
        return true;
      }
    }
  }
  // match the floors of version and conditional

  return false;
}

// single condition is exact version, 1 == 1.0
// - means exclusion
// 56.x has a wildcard

function test(expected, recieved) {
  return `Recieved ${recieved} ${expected === recieved ? "✅" : "❌"}`;
}

console.table([
  {
    check: '("1", "1")',
    expected: true,
    recieved: test(true, check("1", "1")),
  },
  {
    check: '("1.3", "1, 1.3")',
    expected: true,
    recieved: test(true, check("1.3", "1, 1.3")),
  },
]);
// console.table([
//   {
//     check: '("1.3", "1, 1.3")',
//     expected: "Expect true: ",
//     recieved: test(true, check("1.3", "1, 1.3")),
//   },
// ]); // Expect true
console.log('check("1", "3")', "Expect false: ", test(false, check("1", "3"))); // Expect false
console.log(
  '\ncheck("1.7", "2, 2.8")',
  "Expect false: ",
  test(false, check("1.7", "2, 2.8"))
); // Expect false
console.log(
  '\ncheck("1.0", ">=1")',
  "Expect true: ",
  test(true, check("1.0", ">=1"))
); // Expect true
console.log(
  '\ncheck("1", ">=1.0")',
  "Expect true: ",
  test(true, check("1", ">=1.0"))
); // Expect true
console.log(
  '\ncheck("1.3", ">0.2,-1.333")',
  "Expect true: ",
  test(true, check("1.3", ">0.2,-1.333"))
); // Expect true
console.log(
  '\ncheck("1.3", ">1,-1.3")',
  "Expect false: ",
  test(false, check("1.3", ">1,-1.3"))
); // Expect false
console.log(
  '\ncheck("2", "<1.3, 56.x")',
  "Expect false: ",
  test(false, check("2", "<1.3, 56.x"))
); // Expect false
console.log(
  '\ncheck("1.0", "1, -1.2")',
  "Expect true: ",
  test(true, check("1.0", "1, -1.2"))
); // Expect true
console.log(
  '\ncheck("1.3", ">0.9, -1.3")',
  "Expect false: ",
  test(false, check("1.3", ">0.9, -1.3"))
); // Expect false
console.log(
  '\ncheck("1.3", "1.x, -1.3")',
  "Expect false: ",
  test(false, check("1.3", "1.x, -1.3"))
); // Expect false
console.log(
  '\ncheck("1.3", "<0.2, 1.3")',
  "Expect true: ",
  test(true, check("1.3", "<0.2, 1.3"))
); // Expect true
console.log(
  '\ncheck("1.3", "1.x")',
  "Expect true: ",
  test(true, check("1.3", "1.x"))
); // Expect true
console.log(
  '\ncheck("2", "1.x")',
  "Expect false: ",
  test(false, check("2", "1.x"))
); // Expect false
