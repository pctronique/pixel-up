let result = 0;

function addScore() {
  result++;
  postMessage(result);
}

onmessage = function(e) {
  setInterval(function () {addScore()}, 100);
}
