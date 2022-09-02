let folderWorker = "./../js/worker/";


if (window.Worker) {
  let backgroundTaille = new Taille(1000, 1000);
  let game = undefined;
  let nbGame = 0;

    let divGame = document.getElementById("game");
    let idScreen = "screenGame_0";
    let heightJoueur = 60;
    //let heightJoueur = 47;
    game = new Game("screenGame_0", tabConfigBackground, tabConfigMoveBackground);
    game.setVolumeEffet(0);
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
    game.addBackground();
    game.addBackground();
    game.setPosInitJoueur(backgroundTaille.x / 2, backgroundTaille.y - heightJoueur - 1);
    game.afficher();

    let screenGame = document.getElementById(idScreen);

    screenGame.addEventListener("scroll", function () {

        /*console.log("scrollTop0 : " + screenGame.scrollTop);
        console.log("scrollHeight0 : " + screenGame.scrollHeight);
        console.log("scrollWidth0 : " + screenGame.scrollWidth);
        console.log("offsetHeight0 : " + screenGame.offsetHeight);
        console.log("offsetWidth0 : " + screenGame.offsetWidth);
        //console.log("scrollTop01 : " + screenGame.scrollTop);*/
        let calcul0 = ((screenGame.scrollHeight - screenGame.scrollWidth) + (screenGame.scrollWidth - screenGame.offsetHeight) - screenGame.scrollTop);
        let calcul4 = (screenGame.scrollHeight / 2) / backgroundTaille.y;
        let st = -1 * (game.backgrounds[0].scrollMove.placeBas() / game.backgrounds[0].scrollMove.taillePixel());
        //console.log(calcul4);
        //game.backgrounds[0].scrollMove.bottom();
        //game.backgrounds[0].scrollMove.changeBackground();
        //game.screenBottom(st);
        //game.afficher();
        let scrollHaut = screenGame.scrollHeight / screenGame.childElementCount - screenGame.offsetHeight;
        if (screenGame.scrollTop < scrollHaut) {
           //game.addBackground(backgroundTaille.x, backgroundTaille.y, 18, 60);
        }
    }, false);

    screenGame.scrollTop = screenGame.scrollHeight;


  game.start();
  //game.startDev();

  //game.keyGame("k");

  function startGame(e) {
    game.start();
    //game.startDev();
  }

  function stopGame(e) {
    game.stop();
  }

  document.getElementById("start").addEventListener("click", startGame);
  //document.getElementById("stop").addEventListener("click", stopGame);


} else {
  console.log("Your browser doesn't support web workers.");
}
