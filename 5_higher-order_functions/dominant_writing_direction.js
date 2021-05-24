// load dependencies
require('./scripts.js');

const countBy = (items, groupName) => {
	let counts = [];

	for (let item of items) {
		let name = groupName(item);
		let known = counts.findIndex((count) => count.name === name);
		if (known === -1) {
			counts.push({ name, count: 1 });
		} else {
			counts[known].count++;
		}
	}

	return counts;
};

const characterScript = (code) => {
	for (let script of SCRIPTS) {
		if (
			script.ranges.some(([from, to]) => {
				return code >= from && code < to;
			})
		) {
			return script;
		}
	}
	return null;
};

const dominantDirection = (text) => {
	const directions = countBy(text, (char) => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.direction : 'none';
	}).filter(({ name }) => name !== 'none');

	if (directions.length === 0) return 'none';

	return directions.reduce((a, b) => (a.count > b.count ? a : b)).name;
};

console.log(dominantDirection('Hello!'));
// → ltr
console.log(dominantDirection('Hey, مساء الخير'));
// → rtl
