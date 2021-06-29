let p = document.querySelector('p');
let size;
function setSize(newSize) {
	size = newSize;
	p.style.fontSize = size + 'px';
}
setSize(20);

function handleArrow(event) {
	if (event.key == 'ArrowUp') {
		if (size > 70) {
			p.textContent = '💥';
			document.removeEventListener('keydown', handleArrow);
		} else {
			setSize(size * 1.1);
			event.preventDefault();
		}
	} else if (event.key == 'ArrowDown') {
		if (size > 3) {
			setSize(size * 0.9);
		}
		event.preventDefault();
	}
}
document.addEventListener('keydown', handleArrow);
