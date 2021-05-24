let nestedArrays = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
	['m', 'n', 'o'],
	['p', 'q', 'r'],
	['s', 't', 'u'],
	['v', 'w', 'x'],
	['y', 'z', 'x'],
];

function flatten(array) {
	let newArray = array.reduce((flat, item) => flat.concat(item), []);
	console.log(newArray);
}

flatten(nestedArrays);
