console.log("click click")

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

	if(!audio) return; //if key pressed doesn't have an audio element, stop function
	audio.currentTime = 0; //rewind to start (allows you to press key multiple times quickly)
	audio.play();

	//adds highlight border to key
	key.classList.add('playing');
}

function removeTransition(e) {
	if(e.propertyName !== 'transform') return; //skip it if it's not a transform

	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)