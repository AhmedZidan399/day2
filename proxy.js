// proxy
const person = {
	name: "John",
	age: 30,
	address: "new cairo",
};

const personProxy = new Proxy(person, {
	get(target, prop) {
		if (target.hasOwnProperty(prop)) {
			// if (target.prop !== undefined) {
			// if (prop in target) {
			return target[prop];
		} else {
			return `Property ${prop} does not exist.`;
		}
	},
	set(target, prop, value) {
		if (prop === "name" && (typeof value !== "string" || value.length > 7)) {
			throw new Error(`${prop} must be a string and less than 7 char.`);
		} else if (prop === "age" && (typeof value !== "number" || value < 0)) {
			throw new Error(`${prop} must be a positive number.`);
		} else if (prop === "address" && typeof value !== "string") {
			throw new Error(`${prop} must be a string.`);
		}
		target[prop] = value;
		return true;
	},
});

personProxy.address = "cairo"; // valid
personProxy.address = 123; // Error: address must be a string.
personProxy.name = "John Doe"; // Error: name must be a string and less than 7 char.
personProxy.age = -5; // Error: age must be a positive number.
