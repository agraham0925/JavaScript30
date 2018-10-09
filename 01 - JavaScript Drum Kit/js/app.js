console.log("click click")

window.addEventListener('keydown', function(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

	if(!audio)return; //if key pressed doesn't have an audio element, stop function
	audio.currentTime = 0; //rewind to start (allows you to press key multiple times quickly)
	audio.play()
	console.log(key)
})