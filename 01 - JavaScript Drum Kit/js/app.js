console.log("click click")

window.addEventListener('keydown', function(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

	if(!audio)return; //if key pressed doesn't have an audio element, stop function

	audio.play()

})