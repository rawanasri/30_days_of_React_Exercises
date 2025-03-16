// 1) Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor (name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  
  getName() {
    return this.name
  }

  getAge() {
    return this.age
  }

  getColor() {
    return this.color
  }

  getLegs() {
    return this.legs
  }
}

// 2) Create a Dog and Cat child class from the Animal Class.
let dog = new Animal("Lassie", 4, "Brown", 4)
let cat = new Animal("Timothy", 2, "Black & White", 4)

// *Exercise 02*

class AnimalInfo extends Animal {
  constructor(name, age, color, legs, gender) {
  super(name, age, color, legs)
  this.gender = gender
  }
}

let human = new AnimalInfo("Praneeth", 28, "Tan", 2, "Male")
console.log(human)
