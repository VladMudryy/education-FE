// Encapsulation is a form of abstraction that involves bundling the data (attributes) and methods (functions) that operate on the data within a single unit (object or class).
// By encapsulating the internal details, you create a clear separation between the external interface (how the object can be used) and the internal implementation (how it achieves its functionality).

// Abstract class
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('Abstract class cannot be instantiated.');
    }
  }

  // Abstract method
  calculateArea() {
    throw new Error('Method not implemented.');
  }
}

// Concrete class
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

let myCircle = new Circle(5);
console.log(myCircle.calculateArea()); // 78.54
