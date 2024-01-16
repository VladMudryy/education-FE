// Polymorphism allows objects of different types to be treated as objects of a common type. This is often achieved through method overriding.

class Animal {
  makeSound() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof! Woof!");
  }
}

let myPet = new Dog();
myPet.makeSound(); // Woof! Woof!
