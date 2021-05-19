const returnChessboard = (width = 8, height = 8) => {
	let chessboard = [];
	for (let row = 0; row < height; row++) {
		for (let col = 0; col < width; col++) {
			chessboard.push((row + col) % 2 == 0 ? ' ' : '#');
		}
		chessboard.push('\n');
	}
	return chessboard.join('');
};

console.log(returnChessboard(10, 10));
