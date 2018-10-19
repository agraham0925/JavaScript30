console.log("hello, is it me you're looking for?")

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
	this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));