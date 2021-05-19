const countBs = (string) => {
	count = countChar(string, 'B');
	return count;
};

const countChar = (string, char) => {
	count = 0;
	for (let i = 0; i < string.length; i++) {
		string[i] === char && count++;
	}
	return count;
};

let str = 'The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?';
console.log(countChar(str, 'o'));
console.log(countBs('Bananas are yellow, screamed Bubbles!'));
