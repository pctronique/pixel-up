onmessage = function (e) {
  let eventKey = e.data[0];
  let x = e.data[1];
  let y = e.data[2];
  if (eventKey == "DROITE") {
    for (let index = 0; index < 10; index+=5) {
      postMessage([x + index, y, 1]);
    }
  } else if (eventKey == "GAUCHE") {
    for (let index = 0; index < 10; index+=5) {
      postMessage([x - index, y, 1]);
    }
  } else if (eventKey == "BAS") {
    for (let index = 0; index < 10; index+=5) {
      postMessage([x, y + index, 1]);
    }
  } else if (eventKey == "HAUT") {
    for (let index = 0; index < 10; index+=5) {
      postMessage([x, y - index, 1]);
    }
  } else if (eventKey == "SAUTER") {
    for (let index = 0; index < 120; index+=5) {
      y -= 5;
      postMessage([x, y, 0]);
    }
    let number = 0;
    while (number < 120) {
      y += 5;
      postMessage([x, y, 1]);
      number+=5;
    }
  }
};
