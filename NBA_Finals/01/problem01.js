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
  "Write a function that takes as an argument a year and returns the winner of the NBA finals that year.";

const finalsData = csvToArray(fileReader("../nba_finals.csv"));

// function takes in a given year
function winnerAtGivenYear(year) {
  // use Array.find() to locate the object based on its "Year" property
  const obj = finalsData.find((row) => {
    if (row.Year == year) {
      return true;
    }
  });
  return obj.Winner;
}

// return the "Winner" property from the found object

console.log(question);
console.log(`In 2019, the winners were the ${winnerAtGivenYear(2019)}.`);
console.log(`In 1984, the winners were the ${winnerAtGivenYear(1984)}.`);
