function treeGraph(depth, branches) {
	let graph = [new GraphNode()];
	if (depth > 1) {
		for (let i = 0; i < branches; i++) {
			let subGraph = treeGraph(depth - 1, branches);
			graph[0].connect(subGraph[0]);
			graph = graph.concat(subGraph);
		}
	}
	return graph;
}

class GraphNode {
	constructor() {
		this.pos = new Vec(Math.random() * 1000, Math.random() * 1000);
		this.edges = [];
	}
	connect(other) {
		this.edges.push(other);
		other.edges.push(this);
	}
	hasEdge(other) {
		return this.edges.includes(other);
	}
}

class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	plus(other) {
		return new Vec(this.x + other.x, this.y + other.y);
	}
	minus(other) {
		return new Vec(this.x - other.x, this.y - other.y);
	}
	times(factor) {
		return new Vec(this.x * factor, this.y * factor);
	}
	get length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
}

// Since we will want to inspect the layouts our code produces, let's
// first write code to draw a graph onto a canvas. Since we don't know
// in advance how big the graph is, the `Scale` object computes a
// scale and offset so that all nodes fit onto the given canvas.

// The function starts by drawing the edges, so that they appear
// behind the nodes. Since the nodes on _both_ side of an edge refer
// to each other, and we don't want to draw every edge twice, edges
// are only drawn then the target comes _after_ the current node in
// the `graph` array.

// When the edges have been drawn, the nodes are drawn on top of them
// as purple discs. Remember that the last argument to `arc` gives the
// rotation, and we have to pass something bigger than 2π to get a
// full circle.

// Finding a scale at which to draw the graph is done by finding the
// top left and bottom right corners of the area taken up by the
// nodes. The offset at which nodes are drawn is based on the top left
// corner, and the scale is based on the size of the canvas divided by
// the distance between those corners. The function reserves space
// along the sides of the canvas based on the `nodeSize` variable, so
// that the circles drawn around nodes’ center points don't get cut off.

class Scale {
	constructor(graph, width, height) {
		let xs = graph.map((node) => node.pos.x);
		let ys = graph.map((node) => node.pos.y);
		let minX = Math.min(...xs);
		let minY = Math.min(...ys);
		let maxX = Math.max(...xs);
		let maxY = Math.max(...ys);

		this.offsetX = minX;
		this.offsetY = minY;
		this.scaleX = (width - 2 * nodeSize) / (maxX - minX);
		this.scaleY = (height - 2 * nodeSize) / (maxY - minY);
	}

	// The `x` and `y` methods convert from graph coordinates into
	// canvas coordinates.
	x(x) {
		return this.scaleX * (x - this.offsetX) + nodeSize;
	}
	y(y) {
		return this.scaleY * (y - this.offsetY) + nodeSize;
	}
}

function findPath(a, b) {
	let work = [[a]];
	for (let path of work) {
		let end = path[path.length - 1];
		if (end == b) return path;
		for (let next of end.edges) {
			if (!work.some((path) => path[path.length - 1] == next)) {
				work.push(path.concat([next]));
			}
		}
	}
}

let graph = treeGraph(4, 4);
let root = graph[0],
	leaf = graph[graph.length - 1];
console.log(findPath(root, leaf).length);
// → 4

leaf.connect(root);
console.log(findPath(root, leaf).length);
// → 2
