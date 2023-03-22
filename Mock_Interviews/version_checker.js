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

  // split into substrings on delimiter ","
  const conditionals = conditions.split(",");
  if (!conditionals.length) {
    return false;
  }

  // process substrings

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
    const exactVersion = parseFloat(condition);
    // does not handle 0.0
    if (exactVersion && versionFloat === exactVersion) {
      return true;
    }
  }

  // check for conditional, like "<" or ">"
  // check again for "="
  // if no conditional, exact match needed

  // look for wildcard "x"
  // match the floors of version and conditional
}

// single condition is exact version, 1 == 1.0
// - means exclusion
// 56.x has a wildcard

// check("1", "1", True)
console.log(check("1", "1"));
// check("1.3", "1, 1.3", True)
console.log(check("1.3", "1, 1.3"));
// check("1.3", "1,-1.3", False)
console.log(check("1.3", "1, -1.3"));
