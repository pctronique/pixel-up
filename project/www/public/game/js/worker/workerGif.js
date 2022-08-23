let result = 0;
let nbFrame = 0;

function addScore() {
  result++;
  if (nbFrame == result) {
    result = 0;
  }
  postMessage(result);
}

onmessage = function (e) {
  nbFrame = e.data[1];
  setInterval(function () {
    addScore();
  }, e.data[0]);
};
