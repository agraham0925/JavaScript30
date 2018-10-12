console.log('hi')

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {

	const now = new Date();

	// getting the seconds of the current minute
	const seconds = now.getSeconds();
	// changing seconds to degrees to animate clock
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	
	// same for minutes
	const mins = now.getMinutes();
	const minsDegrees  = ((mins / 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

	// same for hours
	const hour = now.getMinutes();
	const hourDegrees  = ((mins / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

// run setDate function every second
setInterval(setDate, 1000);