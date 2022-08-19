onmessage = function (e) {
    let y = e.data[0];
    while (number < e.data[1]) {
      y += 1;
      postMessage([y, true, true]);
      number+=1;
    }
    postMessage([y, false, false]);
  };