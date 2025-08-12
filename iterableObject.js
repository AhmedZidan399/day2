// iterable object

let obj = {
	name: "John",
	age: 30,
	city: "New York",
};

function iterableObject(object) {
	let keys = Object.keys(object);
	let index = 0;
	return {
		next: function () {
			if (index < keys.length) {
				return {
					value: object[keys[index++]],
					done: false,
				};
			} else {
				return {
					value: undefined,
					done: true,
				};
			}
		},
	};
}

obj[Symbol.iterator] = () => iterableObject(obj);

for (item of obj) {
	console.log(item);
}
