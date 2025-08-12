// iterable array

let arr = ["book", "pen", "paper", "pencil"];

function* iterableArray(array) {
	for (i in array) {
		yield array[i];
	}
}

arr[Symbol.iterator] = () => iterableArray(arr);

for (let item of arr) {
	console.log(item);
}
