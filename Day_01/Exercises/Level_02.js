import Animal from "./Level_01.js"

// 1) Override the method you create in Animal class
class AnimalInfo extends Animal {
  constructor(name, age, color, legs, registered) {
  super(name, age, color, legs)
  this.registered = registered;
  }

  get getRegistered() {
    return registered
  }
}

let human = new AnimalInfo("Praneeth", 28, "tan", 2, true)

console.log(human)
