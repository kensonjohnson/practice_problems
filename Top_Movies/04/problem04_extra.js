import readFile from "../../CustomParser.js";

const question =
  "What is the earliest year on this list, and what were the films from that year?";

const movies = readFile("../top_movies.csv");

const result = movies.reduce(
  (moviesByYear, movie) => {
    // pull out into a named function
    const [lowestYear, titles] = moviesByYear;
    if (movie.releaseDate === undefined) {
      return moviesByYear;
    }
    if (movie.releaseDate < lowestYear) {
      return [movie.releaseDate, [movie.title]];
    }
    if (movie.releaseDate === lowestYear) {
      titles.push(movie.title);
    }
    return moviesByYear;
  },
  [9999, []]
);

// format answer
console.log(question);
console.log(result);
