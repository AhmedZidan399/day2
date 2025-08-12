// export all shape classes from this module

class Shape {
	constructor() {
		if (this.constructor === Shape) {
			throw new Error("Cannot instantiate abstract class Shape directly.");
		}
	}

	area() {
		throw new Error("Method 'area()' must be implemented.");
	}

	perimeter() {
		throw new Error("Method 'perimeter()' must be implemented.");
	}

	tostring() {
		return "returning area and perimeter of the shape";
	}
}

class Circle extends Shape {
	constructor(radius) {
		super();
		this.radius = radius;
	}

	area() {
		return Math.PI * this.radius ** 2;
	}

	perimeter() {
		return 2 * Math.PI * this.radius;
	}

	tostring() {
		return `${
			this.constructor.name
		} has area ${this.area()} and perimeter ${this.perimeter()}`;
	}
}

class Rectangle extends Shape {
	constructor(width, height) {
		super();
		this.width = width;
		this.height = height;
	}

	area() {
		return this.width * this.height;
	}

	perimeter() {
		return 2 * (this.width + this.height);
	}

	tostring() {
		return `${
			this.constructor.name
		} has area ${this.area()} and perimeter ${this.perimeter()}`;
	}
}

export { Circle, Rectangle };
