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
  "Print out a ranking of who has won the MVP more than once, by times won";

const finalsData = csvToArray(fileReader("../nba_finals.csv"));

// create something to hold the MVPs and there wins
let mvpList = [];

// iterate over finalsData
finalsData.forEach((dataRow) => {
  // check if MVP property is an empty string, if it is then continue to next iteration
  if (dataRow.MVP == "") return;

  // check if the MVP already exists in the array
  const index = mvpList.findIndex((obj) => {
    if (obj.name === dataRow.MVP) {
      return true;
    }
  });
  if (index === -1) {
    // if they don't, add them and their win
    mvpList.push({ name: dataRow.MVP, wins: 1 });
  } else {
    // if they do, increment their wins
    mvpList[index].wins++;
  }
});

// after the loop finishes, sort the MVPs based on their wins
mvpList.sort((a, b) => {
  return b.wins - a.wins;
});

// format the answer
console.log(question);
mvpList.forEach((winner) => {
  if (winner.wins > 1) {
    console.log(`${winner.wins} times: ${winner.name}`);
  }
});
