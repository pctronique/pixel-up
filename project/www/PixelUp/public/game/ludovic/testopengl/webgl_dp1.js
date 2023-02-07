"use strict";

main();

//
// Début ici
//
function main() {
  const canvas = document.querySelector("#glCanvas");
  // Initialisation du contexte WebGL
  const gl = canvas.getContext("webgl");

  // Continuer seulement si WebGL est disponible et fonctionnel
  if (!gl) {
    alert("Impossible d'initialiser WebGL. Votre navigateur ou votre machine peut ne pas le supporter.");
    return;
  }

  // Définir la couleur d'effacement comme étant le noir, complètement opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Effacer le tampon de couleur avec la couleur d'effacement spécifiée
  gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
}