let folderWorker = "./../js/worker/";

//déclaration des variables que l'on a besoin
let screenGame = document.getElementById("screenGame");
let ajouter = document.getElementById("ajouter");
let nombre = 0;
let game = new Game("screenGame");
let backgroundTaille = new Taille(1000, 5000);
game.setJoueur(backgroundTaille.x/2,backgroundTaille.y-49, 47,48);
game.addBackground(backgroundTaille.x,backgroundTaille.y);
game.addBackground(backgroundTaille.x,backgroundTaille.y);
//game.getJoueur().addListenerPos("joueur-pos-x", "joueur-pos-y");
game.afficher();

    
screenGame.scrollTop = screenGame.scrollHeight;

game.start();

// fonction mathématique écoute évènement au scroll par rapport à la taille de screenGame 
 screenGame.addEventListener(
   "scroll",
  function () {
     let scrollHaut = screenGame.scrollHeight / screenGame.childElementCount -screenGame.offsetHeight;
     if (screenGame.scrollTop < scrollHaut) {
      game.addBackground(backgroundTaille.x,backgroundTaille.y);
     }
  },
   false
);

// getRandom();
screenGame.scrollTop = screenGame.scrollHeight;


