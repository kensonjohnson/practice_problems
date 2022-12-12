export default class Animal {
  constructor(name, numberOfLegs, sound) {
    this.name = name || "Unknown";
    this.numberOfLegs = parseInt(numberOfLegs) || 2;
    this.sound = sound || "Unknown";
  }
}
