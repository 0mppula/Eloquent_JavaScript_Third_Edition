a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function reverseArray(array) {
	let newArray = [];
	for (let i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i]);
	}

	return newArray;
}

function reverseArrayInPlace(array) {
	for (let i = 0; i < array.length / 2; i++) {
		let first = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = first;
	}

	return array;
}

console.log(`reverseArray(): \t${reverseArray(a)}`);
console.log(`Original Array: \t${a}`);
console.log(`reverseArrayInPlace(): \t${reverseArrayInPlace(a)}`);
console.log(`Original Array: \t${a}`);
