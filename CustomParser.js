import fs, { readFileSync } from "fs";

export default function readFile(path, delimeter = ",") {
  try {
    if (!path) {
      throw TypeError("FileParser", {
        cause: "Filepath cannot be 'undefined'.",
      });
    }
    if (typeof path !== "string") {
      throw TypeError("FileParser", {
        cause: "Path must be of type 'String'.",
      });
    }
  } catch (err) {
    console.error(`${err.name} from ${err.message}: ${err.cause}`);
    console.error(err.stack);
    if (err) return null;
  }

  const ext = getExtFromPath(path);

  if (ext === "txt") {
    return fs.readFileSync(path, "utf8").toString().trim().split(/\r?\n/);
  }

  if (ext === "csv") {
    return csvToArray(path);
  }
}

function getExtFromPath(string) {
  // a file name should always have at least one "."
  const splitString = string.toString().trim().split(".");
  // the file extension is the last item in the array
  return splitString.pop();
}

function csvToArray(path, delimiter = ",") {
  const fileReader = function (filepath) {
    return readFileSync(filepath, "utf8").toString();
  };
  const str = fileReader(path);
  //first row should be header information
  const unformattedHeaders = str
    .slice(0, str.indexOf("\n"))
    .trim()
    .split(delimiter);
  const headers = formatHeaders(unformattedHeaders);

  // the remaining rows are the actual data
  const rows = str
    .slice(str.indexOf("\n") + 1)
    .trim()
    .split(/\r?\n/);

  // we want an array to return, so we use Array.map()
  const arr = rows.map((row) => {
    // split values from each row into an array
    let values = row.trim().split(delimiter);
    // If it has double qoutes, then we need further processing
    if (row.includes('"')) {
      values = handleDoubleQuotes(row, delimiter);
    }
    // we are creating an object, so we use the headers array to create property names
    const el = headers.reduce((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });

  return arr;
}

function handleDoubleQuotes(string, delimiter) {
  // split the string on the quotes
  const hasDoubleQuote = string.split('"');
  // iterate over the new resulting array
  for (let i = 0; i < hasDoubleQuote.length; i++) {
    // the characters we want to replace will only be on odd numbered indexes
    if (i % 2 !== 0) {
      // replace commas with tildes so String.split(delimiter) creates the array we want
      hasDoubleQuote[i] = hasDoubleQuote[i].replaceAll(",", "~");
    }
  }
  // flatten back to a string so we can split on the delimiter
  const commasReplaced = hasDoubleQuote.join("");
  let newRow = commasReplaced.split(delimiter);

  for (let i = 0; i < newRow.length; i++) {
    // replace tildes with commas
    if (newRow[i].includes("~")) {
      newRow[i] = newRow[i].replaceAll("~", ",");
    }
  }
  return newRow;
}

function formatHeaders(headersArray) {
  let formattedHeaders = [];

  headersArray.forEach((header) => {
    // a header title might multiple words
    // we just want to convert those to camelCase
    if (header.includes(" ")) {
      const seperateWords = header.split(" ");
      let formattedHeader = convertToCamelCase(seperateWords);
      return formattedHeaders.push(formattedHeader);
    }

    // a header might have a dash seperating multiple words
    // we want to remove the dash and convert to camelCase
    if (header.includes("-")) {
      const seperateWords = header.split("-");
      const formattedHeader = convertToCamelCase(seperateWords);
      return formattedHeaders.push(formattedHeader);
    }

    // if no formatting is needed, just add it to the array
    formattedHeaders.push(header.toLowerCase());
  });
  return formattedHeaders;
}

function convertToCamelCase(arrayOfStrings) {
  let camelCase = "";
  arrayOfStrings.forEach((string) => {
    if (string === arrayOfStrings[0]) {
      //make sure the first word is all lower case
      camelCase = string.toLowerCase();
    } else {
      // make sure that the remaining words all have the first letter capitalized
      const string1 = string.toLowerCase();
      camelCase =
        camelCase + string1.charAt(0).toUpperCase() + string1.slice(1);
    }
  });
  return camelCase;
}
