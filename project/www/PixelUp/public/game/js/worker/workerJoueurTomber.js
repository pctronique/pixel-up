let hauteurTomber = 200;
let y = 0;
let count = 0;

function sauter() {
  y += 1;
  count++;
  if(count == hauteurTomber) {
    postMessage([y, false]);
  } else {
    postMessage([y, true]);
  }
}

onmessage = function (e) {
  y = e.data[0];
  hauteurTomber = e.data[2];
  setInterval(function () {sauter()}, e.data[3]);
};