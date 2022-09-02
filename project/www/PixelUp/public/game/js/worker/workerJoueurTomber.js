let hauteurTomber = 200;
let y = 0;
let count = 0;
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
  }
}

onmessage = function (e) {
  isLoad = e.data[4];
  if(myInterval != undefined) {
    clearInterval(myInterval);
  }
  if(isLoad) {
    y = e.data[0];
    hauteurTomber = e.data[2];
    myInterval = setInterval(function () {sauter()}, e.data[3]);
  }
};