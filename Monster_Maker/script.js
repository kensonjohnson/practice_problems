import Animal from "./animal.js";
import Monster from "./monster.js";
import readFile from "./CustomParser.js";

const animalsRaw = readFile("./animals.csv");
const animals = animalsRaw.map((animalData) => {
  return new Animal(
    animalData.animalname,
    animalData.animaltype,
    animalData.numlegs,
    animalData.sound
  );
});

console.log(animals);
