function timeGame() {
  postMessage(true);
}

onmessage = function(e) {
  setInterval(function () {timeGame()}, e.data);
}
