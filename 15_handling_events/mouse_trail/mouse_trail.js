let body = document.querySelector('body');
let dots = [];

for (let i = 0; i < 12; i++) {
	let dot = document.createElement('div');
	dot.className = 'trail';
	body.append(dot);
	dots.push(dot);
}
let currentDot = 0;

window.addEventListener('mousemove', (e) => {
	let dot = dots[currentDot];
	dot.style.left = e.pageX - 3 + 'px';
	dot.style.top = e.pageY - 3 + 'px';
	currentDot = (currentDot + 1) % dots.length;
});
