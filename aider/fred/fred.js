let nb = 0;

// Obtient une référence au nœud parent
let screenGame = document.getElementById("screenGame");
function addCanvas() {
  // Crée le nouveau nœud à insérer
  let newNode = document.createElement("canvas");
  newNode.width = 700;
  newNode.height = 1000;

  let sp2 = screenGame.querySelector("canvas");
  screenGame.insertBefore(newNode, sp2);

  let ctx = newNode.getContext("2d");
  if (nb == 0) {
    ctx.fillStyle = "red";
  } else if (nb == 1) {
    ctx.fillStyle = "blue";
  } else if (nb == 2) {
    ctx.fillStyle = "green";
    nb = -1;
  }
  ctx.fillRect(0, 0, 700, 1000);

  if (screenGame.childElementCount > 2) {
    screenGame.removeChild(screenGame.lastChild);
  }

  nb++;
}

addCanvas();
addCanvas();

screenGame.scrollTop = screenGame.scrollHeight;
screenGame.addEventListener(
  "scroll",
  function () {
    let calcul0 =
      screenGame.scrollHeight / screenGame.childElementCount -
      screenGame.offsetHeight;
    if (screenGame.scrollTop < calcul0) {
      addCanvas();
    }
  },
  false
);
