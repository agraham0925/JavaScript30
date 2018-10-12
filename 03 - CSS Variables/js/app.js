console.log('helloooooooo');

// gets all the controls
const inputs = document.querySelectorAll('.controls input');


function handleUpdate() {
	// to handle adding px for spacing and blur
	const suffix = this.dataset.sizing || '';

	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))