let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ", " 
	+ color3.value +")";
	h3.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);


color1.addEventListener("input", setGradient());
color2.addEventListener("input", setGradient());
color3.addEventListener("input", setGradient());



button.addEventListener("click", getRandomColor);

function randomColor() {
	let color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' 
    + (Math.floor(Math.random() * 256)) + ',' 
    + (Math.floor(Math.random() * 256)) + ',' 
	+ (Math.floor(Math.random() * 256)) + ')';
  return color;
}

function getRandomColor() {
	let rndColor1 = randomColor();
    let rndColor2 = randomColor();
    let rndColor3 = randomColor();
	body.style.background = "linear-gradient(to right, " + rndColor1 + ", " + rndColor2 + ", "
	+ rndColor3 +")";
	h3.textContent = body.style.background + ";";
}
