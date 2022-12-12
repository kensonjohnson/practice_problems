export default class Monster {
  constructor(animal1, animal2) {
    if (
      !animal1 || // we don't have an animal1
      !animal2 || // we don't have an animal2
      animal1.name === animal2.name || // we have the same animal
      animal1.numberOfLegs !== animal2.numberOfLegs // animals have different number of leg
    ) {
      return null;
    }
    this.name = animal1.name + animal2.name; // e.g. KangarooEagle
    this.numberOfLegs = animal1.numberOfLegs;
    this.head = animal1.name; // e.g. Kangaroo
    this.body = animal2.name; // e.g. Eagle
    this.sound = animal1.sound + "-" + animal2.sound; // e.g. Bark-Caw
  }
}
