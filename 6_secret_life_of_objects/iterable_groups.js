class Group {
	constructor() {
		this.group = [];
	}

	add(value) {
		if (!this.has(value)) {
			this.group.push(value);
		}
	}

	delete(value) {
		this.group = this.group.filter((v) => v != value);
	}

	has(value) {
		return this.group.includes(value);
	}

	static from(collection) {
		let group = new Group();
		for (let value of collection) {
			group.add(value);
		}
		return group;
	}

	[Symbol.iterator]() {
		return new GroupIterator(this);
	}
}

class GroupIterator {
	constructor(group) {
		this.group = group;
		this.position = 0;
	}

	next() {
		if (this.position >= this.group.group.length) {
			return { done: true };
		} else {
			let result = { value: this.group.group[this.position], done: false };
			this.position++;
			return result;
		}
	}
}

for (let value of Group.from(['a', 'b', 'c'])) {
	console.log(value);
}
