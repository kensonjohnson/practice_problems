import Animal from "./animal.js";
import Monster from "./monster.js";
import readFile from "../CustomParser.js";

const animalsRaw = readFile("./animals.csv");
const animals = animalsRaw.map((animalData) => {
  return new Animal(
    animalData.animalname,
    animalData.numlegs,
    animalData.sound
  );
});

const monsters = createAllMonsters(8);
console.log(monsters);

function createMonster(animal1, animal2) {
  // make sure both arguments were passed
  if (
    !animal1 ||
    !animal2 ||
    !(animal1 instanceof Animal) ||
    !(animal2 instanceof Animal)
  ) {
    return null;
  }

  const monster = new Monster(animal1, animal2);

  if (monster === null) {
    return null;
  }
  return monster;
}

function createAllMonsters(numberOfLegs) {
  // make sure we were given number of legs
  if (!numberOfLegs || typeof numberOfLegs !== "number") {
    return null;
  }
  let arr = [];
  // filter out animals that only have the given number of legs
  const animalStock = animals.filter((animal) => {
    if (animal.numberOfLegs === numberOfLegs) {
      return true;
    }
  });
  // make sure we have at least two animals to combine
  if (animalStock.length < 2) {
    return null;
  }

  animalStock.forEach((animal) => {
    animalStock.forEach((secondAnimal) => {
      // skip if same animal
      if (secondAnimal.name === animal.name) {
        return;
      }
      const newMonster = createMonster(animal, secondAnimal);
      if (newMonster.name) {
        arr.push(newMonster);
      }
    });
  });

  return arr;
}
