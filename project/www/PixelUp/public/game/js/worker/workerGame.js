let isLoad = false;
let myInterval = undefined;

function timeGame() {
  if(isLoad) {
    postMessage(true);
  }
}

onmessage = function(e) {
  isLoad = e.data[1];
  if(myInterval != undefined) {
    clearInterval(myInterval);
  }
  if(isLoad) {
    myInterval = setInterval(function () {timeGame()}, e.data[0]);
  }
}
