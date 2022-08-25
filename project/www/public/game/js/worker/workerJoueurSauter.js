let hauteurSaut = 200;
let y = 0;
let count = 0;
let isLoad = false;
let myInterval = undefined;

function sauter() {
  if(isLoad) {
    y -= 1;
    count++;
    if(count == hauteurSaut) {
      postMessage([y, true]);
    } else {
      postMessage([y, false]);
    }
  }
}

onmessage = function (e) {
  isLoad = e.data[4];
  if(isLoad) {
    y = e.data[0];
    hauteurSaut = e.data[2];
    setInterval(function () {sauter()}, e.data[3]);
  } else if(myInterval != undefined) {
    clearInterval(myInterval);
  }
};
