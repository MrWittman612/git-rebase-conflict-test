console.log('hello word');
console.log('commit 2 master');
console.log('second change side branch 1');
console.log('commit 3 side branch');

function add(a, b) {
	return a + b;
}
console.log(add(2, 3));

function subtract(a, b) {
	return a - b;
}

console.log(subtract(8, 3));

function multiplies(num1, num2) {
	return num1 * num2;
}

console.log(multiplies(3, 5));

function exponentiation(num1, num2) {
	return num1 ** num2;
}

console.log(exponentiation(3, 5));

// test how long a function takes to run

function printElapsedTime(fTest) {
	let sT = Date.now(),
		vReturn = fTest(),
		eT = Date.now();

	console.log(`Elapsed time: ${String(eT - sT)} milliseconds`);
	return vReturn;
}

const doWork = add(2, 3);

const timeAdd = printElapsedTime(doWork);

console.log(timeAdd);
