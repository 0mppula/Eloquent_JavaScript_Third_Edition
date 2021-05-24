const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const every = (array, test) => {
	return !array.some((x) => !test(x));
};

console.log(every([1, 3, 5], (n) => n < 10));
console.log(every([2, 4, 16], (n) => n < 10));
console.log(every([], (n) => n < 10));
