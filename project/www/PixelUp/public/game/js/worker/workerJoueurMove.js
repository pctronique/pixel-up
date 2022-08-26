onmessage = function (e) {
  let eventKey = e.data[0];
  let x = e.data[1];
  let xend = x;
  if (eventKey == "DROITE") {
    for (let index = 0; index < 10; index+=5) {
      xend = x + index;
      postMessage([xend, false]);
    }
  } else if (eventKey == "GAUCHE") {
    for (let index = 0; index < 10; index+=5) {
      xend = x - index;
      postMessage([xend, false]);
    }
  }
  postMessage([xend, true]);
};
