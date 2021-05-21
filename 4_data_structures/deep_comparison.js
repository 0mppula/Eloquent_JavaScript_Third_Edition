function deepEqual(val1, val2) {
	if (val1 === val2) {
		return true;
	}
	if (val1 == null || typeof val1 != 'object' || val2 == null || typeof val2 != 'object') {
		return false;
	}
	let keys1 = Object.keys(val1),
		keys2 = Object.keys(val2);

	if (keys1.length != keys2.length) return false;

	for (let key of keys1) {
		if (!keys2.includes(key) || !deepEqual(val1[key], val2[key])) return false;
	}

	return true;
}

let obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
