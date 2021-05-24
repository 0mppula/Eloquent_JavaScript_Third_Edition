function loop(start, test, update, body) {
	for (let value = start; test(value); value = update(value)) {
		body(value);
	}
}

loop(
	10,
	(n) => n > 0,
	(n) => n - 1,
	console.log
);
