/* Slider */
// let tBackgroundElem = document.querySelector(`.slider`);
// let images = [
//   `./img/slide1.jpg`,
// 	`./img/1.svg`
// ]
// let i = 0;
// function changeBackgroundImage() {
// 	if(i === images.length) {
//   	i = 0;
//   }
// 	tBackgroundElem.style.background = `linear-gradient(0deg, rgba(52, 54, 59, 0.6), rgba(52, 54, 59, 0.6)), url(${images[i]}) no-repeat`;
//   i++;
// };
// let interval = setInterval(changeBackgroundImage, 5000)



/* Drop Button */
function showSearch() {
  document.querySelector(`.button_search`).style.display = 'block';
}
function showMenu() {
  document.querySelector(`.button_menu`).style.display = 'block';
}
function hideElement() {
  document.querySelector(`.button_menu`).style.display = 'none';
  document.querySelector(`.button_search`).style.display = 'none';
}
