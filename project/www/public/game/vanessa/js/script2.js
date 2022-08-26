let canvas = document.getElementById('imageTest');
let context = canvas.getContext('2d');

let imageObj = new Image();
imageObj.src = 'img/meteorite2.png';
imageObj.onload = function() {
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 22; j++) {
      context.drawImage(imageObj, j * imageObj.width, i * imageObj.height, imageObj.width, imageObj.height);
    }
  }
}
