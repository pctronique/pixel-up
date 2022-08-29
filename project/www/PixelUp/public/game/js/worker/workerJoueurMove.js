let largeurDeplacement = 5;
let x = 0;
let count = 0;
let isLoad = false;
let myInterval = undefined;
let droite = true;

function move() {
  if(isLoad) {
    let choixDeplacement = 0;
    let nbMouvement = 4*largeurDeplacement;
    if(droite) {
      x+=1;
    } else {
      x-=1;
    }
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
    //console.log(x);
    count++;
    if(count == nbMouvement) {
      postMessage([x, droite, false, choixDeplacement]);
    } else {
      postMessage([x, droite, true, choixDeplacement]);
    }
  }
}

onmessage = function (e) {
  isLoad = e.data[4];
  if(isLoad) {
    x = e.data[0];
    droite = e.data[1];
    largeurDeplacement = e.data[2];
    setInterval(function () {move()}, e.data[3]);
  } else if(myInterval != undefined) {
    clearInterval(myInterval);
  }
};
