// In a town, there are n people labeled from 1 to n. There is a rumor that one of
// these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that
// the person labeled ai trusts the person labeled bi.

// Return the label of the town judge if the town judge exists and can be identified,
// or return -1 otherwise.

// Example 1:
const n = 2;
const trust = [[1, 2]];
// Output: 2

// Example 2:
const n2 = 3,
  trust2 = [
    [1, 3],
    [2, 3],
  ];
// Output: 3

// Example 3:
const n3 = 3,
  trust3 = [
    [1, 3],
    [2, 3],
    [3, 1],
  ];
// Output: -1

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (n, trust) {
  // create adjList
  const adjList = new Map();
  // create map of how many trust each person
  const howManyTrust = new Map();
  for (let i = 1; i <= n; i++) {
    howManyTrust.set(i, 0);
  }
  for (let i = 0; i < trust.length; i++) {
    const [k, v] = trust[i];
    if (!adjList.has(k)) {
      adjList.set(k, []);
    }
    adjList.get(k).push(v);
    const currentNumber = howManyTrust.get(v);
    howManyTrust.set(v, currentNumber + 1);
  }

  let judge = -1;
  // use adjList to find candidates
  // iterate over candidates and determine if they are trusted by anyone
  howManyTrust.forEach((trustedBy, person) => {
    if (trustedBy === n - 1) {
      // if person trusts another, not the judge
      if (!adjList.has(person)) {
        judge = person;
      }
    }
  });

  return judge;
};

console.log(findJudge(n, trust));
console.log(findJudge(n2, trust2));
console.log(findJudge(n3, trust3));
