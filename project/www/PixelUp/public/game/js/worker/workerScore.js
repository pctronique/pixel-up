let result = 0;
<<<<<<< HEAD
let isLoad = false;
let myInterval = undefined;

function addScore() {
  if(isLoad) {
    result++;
    postMessage(result);
  }
}

onmessage = function(e) {
  isLoad = e.data[1];
  if(isLoad) {
    myInterval = setInterval(function () {addScore()}, e.data[0]);
  } else if(myInterval != undefined) {
    clearInterval(myInterval);
  }
=======

function addScore() {
  result++;
  postMessage(result);
}

onmessage = function(e) {
  setInterval(function () {addScore()}, e.data);
>>>>>>> devSymfony
}
