import Animal from "./animal.js";
import Monster from "./monster.js";
import readFile from "./CustomParser.js";

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
  )
    return null;
  // create a monster using the Monster constructor
  const monster = new Monster(animal1, animal2);
  // if the constructor was succesful, the monster will have a name
  if (monster.name) {
    return monster;
  }
  // if the constructor was unsuccessful, return null
  return null;
}

function createAllMonsters(numberOfLegs) {
  // make sure we were given number of legs
  if (!numberOfLegs || typeof numberOfLegs !== "number") return null;
  // create an arr to be returned if succesful
  let arr = [];
  // filter out animals that only have the given number of legs
  const animalStock = animals.filter((animal) => {
    if (animal.numberOfLegs === numberOfLegs) return true;
  });
  // make sure we have at least two animals to combine
  if (animalStock.length < 2) return null;

  //iterate over animalStock
  animalStock.forEach((animal) => {
    // for each animal, we want to match it with another unique animal
    animalStock.forEach((secondAnimal) => {
      // if the current animal is the same as the first, skip over it
      if (secondAnimal.name === animal.name) return;
      // create attempt to create a new monster
      const newMonster = createMonster(animal, secondAnimal);
      // if succesful, newMonster will have a name
      if (newMonster.name) {
        // add a new monster to arr using the animal pair
        arr.push(newMonster);
      }
    });
  });

  return arr;
}
