let hauteurSaut = 200;

function timeGame() {
  postMessage(true);
}

onmessage = function (e) {
  let y = e.data[0];
  for (let index = 0; index < 200; index+=1) {
    y -= 1;

    postMessage([y, false, true]);
  }
  let number = 0;
  while (number < e.data[1]) {
    y += 1;
    postMessage([y, true, true]);
    number+=1;
  }
  postMessage([y, false, false]);
};
