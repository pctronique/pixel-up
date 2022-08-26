let hauteurSaut = 200;
let y = 0;
let count = 0;

function sauter() {
  y -= 1;
  count++;
  if(count == hauteurSaut) {
    postMessage([y, true]);
  } else {
    postMessage([y, false]);
  }
}

onmessage = function (e) {
  y = e.data[0];
  hauteurSaut = e.data[2];
  setInterval(function () {sauter()}, e.data[3]);
};
