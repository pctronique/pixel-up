let folderWorker = "./../js/worker/";

//déclaration des variables que l'on a besoin
let screenGame = document.getElementById("screenGame");
let ajouter = document.getElementById("ajouter");
let nombre = 0;
let newGame = new Game("screenGame")

function ajouterBackground() {
	// permet d'ajouter un nouveau  background tout en définissant sa taille
    
    newGame.addBackground(700, 1000);
    newGame.afficher();
}
// fonction mathématique écoute évènement au scroll par rapport à la taille de screenGame 
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
// let x = 0;
// let y = 1;
//  function getRandom() {
//     let getX = Math.round(Math.random());
//   this.y = Math.round(Math.random());
//     console.log(getX);
//   }

// for (pos = 0; pos < 20; pos++){
//     let objRndPos = new RndPos(0,0);
//     objRndPos.minMax(1, 100);
//     console.log(objRndPos.getX());
//     console.log(objRndPos.getY());
//     }



//on appelle les fonctions à lancer
ajouterBackground();
ajouterBackground();
// getRandom();
screenGame.scrollTop = screenGame.scrollHeight;


