let tBackgroundElem = document.querySelector(`.slider`);
let images = [
	`./img/stock-photo-image-of-the-painter-s-arm-hand-holding-industrial-size-spray-gun-used-for-industrial-painting-and-275357318.svg`,
  `./img/slide1.jpg`,
  `./img/slide2.jpg`
]
let i = 0;
function changeBackgroundImage() {
	if(i === images.length) {
  	i = 0;
  }
	tBackgroundElem.style.backgroundImage = `url(${images[i]})`;
  i++;
};

let interval = setInterval(changeBackgroundImage, 3000)