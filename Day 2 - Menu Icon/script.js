const icon = document.getElementById("icon");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");

let toggled = false;

icon.addEventListener("click", () => {
	const animation = toggled ? "rev" : "";
	toggled = !toggled;
	
	line1.style.animation = `line1Anim1${animation} .75s ease forwards`;
	line2.style.animation = `line2Anim1${animation} .75s ease forwards`;
	line3.style.animation = `line3Anim1${animation} .75s ease forwards`;
})