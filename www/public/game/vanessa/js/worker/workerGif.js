let result = 0;
let nbFrame = 0;
let isLoad = false;
let myInterval = undefined;

function addScore() {
  if(isLoad) {
    result++;
    if (nbFrame == result) {
      result = 0;
    }
    postMessage(result);
  }
}

onmessage = function (e) {
  isLoad = e.data[2];
  if(isLoad) {
    nbFrame = e.data[1];
    setInterval(function () {
      addScore();
    }, e.data[0]);
  } else if(myInterval != undefined) {
    clearInterval(myInterval);
  }
};
