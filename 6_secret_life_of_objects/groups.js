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
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
