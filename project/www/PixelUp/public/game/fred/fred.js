//déclaration des variables que l'on a besoin
let screenGame = document.getElementById("screenGame");
let ajouter = document.getElementById("ajouter");
let nombre = 0;
	
function ajouterBackground() {
	// permet d'ajouter un nouveau canvas tout en définissant sa taille
	let newcanvas = document.createElement('canvas');
	newcanvas.width = 700;
	newcanvas.height = 1000;

	//retourne l'objet contexte de dessin du canvas
	let ctx = newcanvas.getContext("2d");
	
	//insère avant un nouveau canva et retourne le premier élément dans le screenGame
	screenGame.insertBefore(newcanvas, screenGame.querySelector("canvas"));
		 
	if (nombre == 0) {
		ctx.fillStyle = "red";
		
	} else if (nombre == 1) {
		ctx.fillStyle = "blue";
		
	} else if (nombre == 2) {
		ctx.fillStyle = "green";
		
		nombre = -1;
	}
	ctx.fillRect(0, 0, 700, 1000);

	// si le nombre est supérieur à 2 on supprime le dernier enfant dans screenGame
	if (screenGame.childElementCount > 2) {
		screenGame.removeChild(screenGame.lastChild);
	}
	nombre++;
}
//fonction mathématique écoute évènement au scroll par rapport à la taille de screenGame 
screenGame.addEventListener(
  "scroll",
  function () {
    let scrollHaut = screenGame.scrollHeight / screenGame.childElementCount -screenGame.offsetHeight;
    if (screenGame.scrollTop < scrollHaut) {
		ajouterBackground();
    }
  },
  false
  );

//on appelle les fonctions à lancer
ajouterBackground();
ajouterBackground();
screenGame.scrollTop = screenGame.scrollHeight;


