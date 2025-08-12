// fibonacci generator
function* fibonacciGenerator(number) {
	let a = 0,
		b = 1,
		c = 0;
	for (let i = 0; i < number; i++) {
		yield a;
		c = a;
		a = b;
		b = c + b;
          //[a, b] = [b, a + b];
	}
}
// 0 1 1 2 3 5 8 13 21 34 55 89 144 233
let fib = fibonacciGenerator(14);

console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());

// fibonacci generator
function* fibonacciGenerator1(number) {
	let a = 0,
		b = 1;
	while(a < number) {
          yield a;
          [a, b] = [b, a + b];
	}
}
// 0 1 1 2 3 5 8 13 21 34 55 89 144 233

let fib1 = fibonacciGenerator1(80);