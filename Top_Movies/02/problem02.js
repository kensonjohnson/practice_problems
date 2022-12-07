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
    let values = row.trim().split(delimiter);
    if (row.includes('"')) {
      values = handleDoubleQuotes(row, delimiter);
    }
    // use headers.reduce to create an object
    const el = headers.reduce((object, header, index) => {
      // if there is a space between words, we need to format like a property name
      if (header.includes(" ")) {
        const seperateWords = header.split(" ");
        // this can only handle a single space, for now
        let formated = seperateWords[0].toLowerCase() + seperateWords[1];
        object[formated] = values[index];
      } else {
        // object properties derived from headers:values
        object[header.toLowerCase()] = values[index];
      }

      return object;
    }, {});
    // the object passed as an element of the array
    return el;
  });

  // return the array
  return arr;
}

function handleDoubleQuotes(string, delimiter) {
  const hasDoubleQuote = string.split('"');
  for (let i = 0; i < hasDoubleQuote.length; i++) {
    if (i % 2 !== 0) {
      hasDoubleQuote[i] = hasDoubleQuote[i].replaceAll(",", "~");
    }
  }
  const commasReplaced = hasDoubleQuote.join("");
  let newRow = commasReplaced.split(delimiter);
  for (let i = 0; i < newRow.length; i++) {
    if (newRow[i].includes("~")) {
      newRow[i] = newRow[i].replaceAll("~", ",");
    }
  }
  return newRow;
}

const question =
  "What is the highest grossing movie from Universal Pictures, domestically?";

const movies = csvToArray(fileReader("../top_movies.csv"));

// set a variable to hold highest found number
let maxSales = 0;
let indexOfMovie = 0;

// interate over movies
for (let i = 0; i < movies.length; i++) {
  // check current movie usSales against known value
  if (movies[i].usSales !== undefined && movies[i].usSales > maxSales) {
    // if higher, store the higher value and index of current movie
    maxSales = movies[i].usSales;
    indexOfMovie = i;
  }
}

// grab movie at indexOfMovie and return as the answer

console.log(question);
console.log(indexOfMovie);
console.log(movies[indexOfMovie].title);
