let hauteurTomber = 200;
let y = 0;
let count = 0;
<<<<<<< HEAD
let isLoad = false;
let myInterval = undefined;

function sauter() {
  if(isLoad) {
    y += 1;
    count++;
    if(count == hauteurTomber) {
      postMessage([y, false]);
    } else {
      postMessage([y, true]);
    }
=======

function sauter() {
  y += 1;
  count++;
  if(count == hauteurTomber) {
    postMessage([y, false]);
  } else {
    postMessage([y, true]);
>>>>>>> devSymfony
  }
}

onmessage = function (e) {
<<<<<<< HEAD
  isLoad = e.data[4];
  if(isLoad) {
    y = e.data[0];
    hauteurTomber = e.data[2];
    setInterval(function () {sauter()}, e.data[3]);
  } else if(myInterval != undefined) {
    clearInterval(myInterval);
  }
=======
  y = e.data[0];
  hauteurTomber = e.data[2];
  setInterval(function () {sauter()}, e.data[3]);
>>>>>>> devSymfony
};