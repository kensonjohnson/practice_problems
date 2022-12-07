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
  "Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.";

const finalsData = csvToArray(fileReader("../nba_finals.csv"));

// function takes in team name as an argument
function yearsTeamWon(teamName) {
  let answer = [];

  // filter out finalsData for just rows that the given team name won
  const filtered = finalsData.filter((dataRow) => {
    if (dataRow.Winner.toLowerCase() === teamName.toLowerCase()) {
      return true;
    }
  });

  // iterate over new array
  filtered.forEach((dataRow) => {
    // push each year to the answer array
    answer.push(dataRow.Year);
  });

  // return the answer array
  return answer;
}

console.log(question);
console.log("The Los Angeles Lakers won in these years:");
console.log(yearsTeamWon("Los Angeles Lakers"));
