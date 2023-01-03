import { createGamebaord, displayBoard, findPath } from "./knight_travails.js";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

let gameboard = createGamebaord(8, 8);
const limits = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Hello brave knight! \nI am here to help you find your way.\n");
console.log("So first tell me where you are:\n");
const knightCol = await rl.question("What column are you on? ");
const knightRow = await rl.question("\nAnd on what row? ");
console.log(`\nI've got it now, you're at (${knightCol},${knightRow})\n`);
console.log("Now tell me, where do you want to go?\n");
const targetCol = await rl.question("What column are you headed to? ");
const targetRow = await rl.question("\nAnd on what row? ");
console.log("\nWell then, the best way to get there looks like this:\n");

const answer = findPath(
  { row: knightRow, col: knightCol },
  { row: targetRow, col: targetCol }
);
answer.forEach((position, index) => {
  gameboard[position[0]][position[1]] = index;
});

displayBoard(gameboard);
rl.close();
