const test = `root: pppw + sjmn
dbpl: 5
cczh: sllz + lgvd
zczc: 2
ptdq: humn - dvpt
dvpt: 3
lfqf: 4
humn: 5
ljgn: 2
sjmn: drzm * dbpl
sllz: 4
pppw: cczh / lfqf
lgvd: ljgn * ptdq
drzm: hmdt - zczc
hmdt: 32`;

import { data } from "./2022_21_data.js";

function evaluateRiddle(riddle) {
  // split data into key --> value pairs
  const jobs = riddle.split("\n");

  const monkeys = new Map();
  // Add all the monkeys and their job
  jobs.forEach((job) => {
    const [monkey, task] = job.split(": ");
    monkeys.set(monkey, task);
  });

  // DFS to evaluate
  return evaluate(monkeys.get("root"), monkeys);
}

// function takes in id
function evaluate(value, dictionary) {
  // TODO: Null checking

  // Base Case:
  // value parses to integer
  if (Number.isInteger(parseInt(value))) {
    return parseInt(value);
  }

  // pre, parse the string
  const job = value.split(" ");
  // recurse, evaluate each string
  const leftResult = evaluate(dictionary.get(job[0]), dictionary);
  const rightResult = evaluate(dictionary.get(job[2]), dictionary);
  // post, perform the operation with results, return that
  const operator = job[1];
  if (operator === "+") {
    return leftResult + rightResult;
  }
  if (operator === "-") {
    return leftResult - rightResult;
  }
  if (operator === "/") {
    return leftResult / rightResult;
  }
  if (operator === "*") {
    return leftResult * rightResult;
  }
}

console.log(evaluateRiddle(test)); // Expect 152
console.log(evaluateRiddle(data)); // Expect 268597611536314
