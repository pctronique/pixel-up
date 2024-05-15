let largeurCoucou = 5;
let count = 0;
let isLoad = false;
let myInterval = undefined;

function move() {
  if(isLoad) {
    let nbMouvement = 4*largeurCoucou;
    if(count == 0*largeurDeplacement) {
      choixDeplacement = 1;
    } else if(count == 1*largeurDeplacement) {
      choixDeplacement = 2;
    } else if(count == 2*largeurDeplacement) {
      choixDeplacement = 3;
    } else if(count == 3*largeurDeplacement) {
      choixDeplacement = 2;
    } else {
      choixDeplacement = 1;
    }
    count++;
    if(count == nbMouvement) {
      postMessage([choixDeplacement, false]);
    } else {
      postMessage([choixDeplacement, true]);
    }
  }
}

onmessage = function (e) {
  isLoad = e.data[2];
  if(myInterval != undefined) {
    clearInterval(myInterval);
  }
  if(isLoad) {
    largeurDeplacement = e.data[1];
    myInterval = setInterval(function () {move()}, e.data[0]);
  }
};
