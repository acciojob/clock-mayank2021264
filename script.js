//your JS code here. If required.
function updateTime(){
	let now = new Date();
	let display = document.getElementById('timer');
	display.textContent = `${now.toLocaleDateString()},
							${now.toLocaleTimeString()}`;
}

setInterval(updateTime, 1000);

updateTime();