// Abstraction: Representing a generic shape
class Shape {
  constructor(color) {
    this.color = color;
  }

  // Abstraction: Abstract method to calculate area
  calculateArea() {
    throw new Error("This method must be overridden in derived classes");
  }

  // Encapsulation: Getter and setter for color property
  getColor() {
    return this.color;
  }

  setColor(newColor) {
    this.color = newColor;
  }

  // Polymorphism: Method to display information about the shape
  displayInfo() {
    console.log(`This is a ${this.color} shape.`);
  }
}

// Inheritance: Creating a derived class - Circle
class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  // Overriding the calculateArea method for circles
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  // Polymorphism: Overriding the displayInfo method for circles
  displayInfo() {
    console.log(`This is a ${this.color} circle with radius ${this.radius}.`);
  }
}

// Inheritance: Creating another derived class - Rectangle
class Rectangle extends Shape {
  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
  }

  // Overriding the calculateArea method for rectangles
  calculateArea() {
    return this.width * this.height;
  }

  // Polymorphism: Overriding the displayInfo method for rectangles
  displayInfo() {
    console.log(
      `This is a ${this.color} rectangle with dimensions ${this.width}x${this.height}.`
    );
  }
}

// Example usage
const redCircle = new Circle(5, "red");
const blueRectangle = new Rectangle(4, 6, "blue");

redCircle.displayInfo();
console.log(`Area of the circle: ${redCircle.calculateArea()}`);

blueRectangle.displayInfo();
console.log(`Area of the rectangle: ${blueRectangle.calculateArea()}`);
