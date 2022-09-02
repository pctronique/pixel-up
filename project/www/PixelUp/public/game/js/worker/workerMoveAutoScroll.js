let nb = 0;
let multiple = 5;
let isLoad = false;
let myInterval = undefined;

function sauter() {
  if (isLoad) {
    nb += 1;
    if (nb == multiple) {
      postMessage([nb, false]);
    } else {
      postMessage([nb, true]);
    }
  }
}

onmessage = function (e) {
  isLoad = e.data[2];
  if (myInterval != undefined) {
    clearInterval(myInterval);
  }
  if (isLoad) {
    multiple = e.data[0];
    myInterval = setInterval(function () {
      sauter();
    }, e.data[1]);
  }
};
