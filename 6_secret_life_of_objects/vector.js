class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	plus(vector) {
		return new Vec(this.x + vector.x, this.y + vector.y);
	}

	minus(vector) {
		return new Vec(this.x - vector.x, this.y - vector.y);
	}

	get length() {
		// Pythagorean theorem
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
}

vec1 = new Vec(2, 2);
vec2 = new Vec(3, 5);

console.log(vec1.plus(vec2));
console.log(vec1.minus(vec2));
console.log(vec2.length);
