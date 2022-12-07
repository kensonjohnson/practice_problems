import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString();
};

function csvToArray(str, delimiter = ",") {
  // get the first row as header data
  const headers = str.slice(0, str.indexOf("\n")).trim().split(delimiter);

  //put all of the remaining rows into an array
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  // Map the rows
  const arr = rows.map((row) => {
    // split values from each row into an array
    const values = row.trim().split(delimiter);
    // use headers.reduce to create an object
    const el = headers.reduce((object, header, index) => {
      // object properties derived from headers:values
      object[header] = values[index];
      return object;
    }, {});
    // the object passed as an element of the array
    return el;
  });

  // return the array
  return arr;
}

const question =
  "Which teams have made it to the NBA finals but have never won?";

const finalsData = csvToArray(fileReader("../nba_finals.csv"));

let answer = [];

// create Set of Losers and Set of Winners
let winningTeams = new Set();
let losingTeams = new Set();
finalsData.forEach((dataRow) => {
  winningTeams.add(dataRow.Winner);
  losingTeams.add(dataRow.Loser);
});

// iterate over losingTeams
losingTeams.forEach((team) => {
  // check if losing team exists in the winningTeams
  if (!winningTeams.has(team)) {
    // if it doesn't, add the team to the answer array
    answer.push(team);
  }
});

// format the answer
console.log(question);
console.log(answer);
