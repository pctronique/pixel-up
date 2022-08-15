onmessage = function (e) {
  let y = e.data[0];
  for (let index = 0; index < 120; index+=5) {
    y -= 5;
    postMessage([y, false, false]);
  }
  let number = 0;
  while (number < 120) {
    y += 5;
    postMessage([y, true, false]);
    number+=5;
  }
  postMessage([y, false, true]);
};
