let folderWorker = "./js/worker/";

if (window.Worker) {
  let backgroundTaille = new Taille(1000, 5000);
  let game = undefined;

  let heightJoueur = 60;
    //let heightJoueur = 47;
    game = new Game("screenGame_0", tabConfigBackground, tabConfigMoveBackground);
    game.setSplashScreen("splashScreengame");
    game.setAllImage(new AllImage(game));
    game.setTailleBackground(backgroundTaille.x, backgroundTaille.y);
    game.setTailleJoueur(18, heightJoueur);
    //game.setTailleJoueur(47, heightJoueur);
    game.keyGame(tabConfig.key.keySaut, tabConfig.key.keyGauche, tabConfig.key.keyDroite, tabConfig.key.keyCoucou);
    game.keyGameDev(tabConfig.key.keyHaut, tabConfig.key.keyBas);
    game.configSaut(tabConfig.sautTomber.hauteurSaut, tabConfig.sautTomber.millisecondeSaut, tabConfig.sautTomber.millisecondeTomber);
    game.configDeplacement(tabConfig.deplacement.largeurDeplacement, tabConfig.deplacement.millisecondeDeplacement);
    game.configCoucou(tabConfig.coucou.largeurCoucou, tabConfig.coucou.millisecondeCoucou);
    //game.setProjectDev();
    game.scoreId("score");
    game.setIdTypeMort("game_typeMort");
    game.setPosInitJoueur(backgroundTaille.x / 2, backgroundTaille.y - heightJoueur - 1);
    /*game.addBackground();
    game.addBackground();
    
    game.afficher();*/

  let screenGame = document.getElementById("screenGame_0");

  screenGame.addEventListener(
    "scroll",
    function () {
      /*let calcul0 =
        screenGame.scrollHeight -
        screenGame.scrollWidth +
        (screenGame.scrollWidth - screenGame.offsetHeight) -
        screenGame.scrollTop;
      let calcul4 = screenGame.scrollHeight / 2 / backgroundTaille.y;*/
      let st =
        -1 *
        (game.backgrounds[0].scrollMove.placeBas() /
          game.backgrounds[0].scrollMove.taillePixel());
      //console.log(calcul4);
      game.screenBottom(st);
      //game.afficher();
      /*let scrollHaut = game.backgrounds[0].scrollMove.changeBackground();
      if (screenGame.scrollTop < scrollHaut) {
        game.addBackground(backgroundTaille.x, backgroundTaille.y);
      }*/
    },
    false
  );

  screenGame.scrollTop = screenGame.scrollHeight;

  let loadSound = true;
    function changer() {
        if (loadSound) {
            play();
            document.getElementById("son_jeu").src = "img/haut_parleur_son_ouvert.png";
            loadSound = false;
        } else {
            stop();
            document.getElementById("son_jeu").src = "img/haut_parleur_son_coupe.png";
            loadSound = true;
            
        }
    }
    function startGame(e) {
      e.preventDefault();
      document.getElementById("info_Game").style.display = "none";
        changer();
        game.start();
    }


  document.getElementById("start").addEventListener("click", startGame);

  document.querySelector("#button_up").addEventListener("click", function (e) {
    e.preventDefault();
    game.eventKey(tabConfig.key.keySaut);
  });
  document
    .querySelector("#button_left")
    .addEventListener("click", function (e) {
      e.preventDefault();
      game.eventKey(tabConfig.key.keyGauche);
    });
  document
    .querySelector("#button_right")
    .addEventListener("click", function (e) {
      e.preventDefault();
      game.eventKey(tabConfig.key.keyDroite);
    });
} else {
  console.log("Your browser doesn't support web workers.");
}
document.getElementById("son_jeu").addEventListener("click", changer);
