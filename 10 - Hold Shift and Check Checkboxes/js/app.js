console.log("hello, hello")

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

function handleCheck(e) {
	let inBetween = false;

	if(e.shiftKey && this.checked) {
		// loop over ever single checkbox
		checkboxes.forEach(checkbox => {
			console.log(checkbox)
			if(checkbox === this || checkbox === lastChecked){
				inBetween = !inBetween;
				console.log("starting to check if their inBetween")
			}

			if(inBetween){
				checkbox.checked = true;
			}
		})
	}

	lastChecked = this;
	console.log(e)
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));