let folderWorker = "./../js/worker/";

//déclaration des variables que l'on a besoin
let screenGame = document.getElementById("screenGame_0");
let ajouter = document.getElementById("ajouter");
let nombre = 0;
let game = new Game("screenGame_0");
let backgroundTaille = new Taille(1000, 5000);
game.scoreId("score");
    game.setIdTypeMort("game_typeMort");
    game.addBackground(backgroundTaille.x, backgroundTaille.y, 100, 100);
    game.addBackground(backgroundTaille.x, backgroundTaille.y, 100, 100);
    game.setPosInitJoueur(backgroundTaille.x / 2, backgroundTaille.y - 101);
//game.getJoueur().addListenerPos("joueur-pos-x", "joueur-pos-y");
game.afficher();

    
screenGame.scrollTop = screenGame.scrollHeight;

game.start();

// fonction mathématique écoute évènement au scroll par rapport à la taille de screenGame 
screenGame.addEventListener("scroll", function () {
   let calcul0 = ((screenGame.scrollHeight - screenGame.scrollWidth) + (screenGame.scrollWidth - screenGame.offsetHeight) - screenGame.scrollTop);
   let calcul4 = (screenGame.scrollHeight / 2) / backgroundTaille.y;
   let st = -1 * (game.backgrounds[0].scrollMove.placeBas() / game.backgrounds[0].scrollMove.taillePixel());
   console.log(calcul4);
   game.screenBottom(st);
   //game.afficher();
   let scrollHaut = game.backgrounds[0].scrollMove.changeBackground();
   if (screenGame.scrollTop < scrollHaut) {
       game.addBackground(backgroundTaille.x, backgroundTaille.y);
   }
}, false);

// getRandom();
screenGame.scrollTop = screenGame.scrollHeight;


