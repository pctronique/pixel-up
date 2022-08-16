let result = 0;

function addScore() {
  result++;
}

onmessage = function(e) {
  let value = e.data;
  result = value;
  let workerResult = result;
  console.log(result + " / " + e.data);
  while(result == e.data) {
    console.log("0014");
    workerResult = result;
    setInterval(addScore, 1000);
  }
  postMessage(workerResult);
}
