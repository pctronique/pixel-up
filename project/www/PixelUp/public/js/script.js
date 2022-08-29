let folderWorker = "./game/js/worker/";

if (window.Worker) {
  let backgroundTaille = new Taille(1000, 5000);
  let game = undefined;

  game = new Game("screenGame_0");
  game.keyGame(tabConfig.key.keySaut, tabConfig.key.keyGauche, tabConfig.key.keyDroite, tabConfig.key.keyCoucou);
  game.keyGameDev(tabConfig.key.keyHaut, tabConfig.key.keyBas);
  game.configSaut(tabConfig.sautTomber.hauteurSaut, tabConfig.sautTomber.millisecondeSaut, tabConfig.sautTomber.millisecondeTomber);
  game.setMilliseconde(tabConfig.game.milliseconde);
  game.setMilliseconde(tabConfig.game.scoreMilliseconde);
  //game.setProjectDev();
  game.scoreId("score");
  game.setIdTypeMort("game_typeMort");
  game.addBackground(backgroundTaille.x, backgroundTaille.y, 100, 100);
  game.addBackground(backgroundTaille.x, backgroundTaille.y, 100, 100);
  game.setPosInitJoueur(backgroundTaille.x / 2, backgroundTaille.y - 101);
  //game.getJoueur().addListenerPos("joueur-pos-x", "joueur-pos-y");
  game.afficher();

  let screenGame = document.getElementById("screenGame_0");

  screenGame.addEventListener(
    "scroll",
    function () {
      let calcul0 =
        screenGame.scrollHeight -
        screenGame.scrollWidth +
        (screenGame.scrollWidth - screenGame.offsetHeight) -
        screenGame.scrollTop;
      let calcul4 = screenGame.scrollHeight / 2 / backgroundTaille.y;
      let st =
        -1 *
        (game.backgrounds[0].scrollMove.placeBas() /
          game.backgrounds[0].scrollMove.taillePixel());
      console.log(calcul4);
      game.screenBottom(st);
      //game.afficher();
      let scrollHaut = game.backgrounds[0].scrollMove.changeBackground();
      if (screenGame.scrollTop < scrollHaut) {
        game.addBackground(backgroundTaille.x, backgroundTaille.y);
      }
    },
    false
  );

  screenGame.scrollTop = screenGame.scrollHeight;

  function startGame(e) {
    document.getElementById("start").style.display = "none";
    game.start();
  }

  document.getElementById("start").addEventListener("click", startGame);

  document.querySelector("#button_up").addEventListener("click", function (e) {
    game.eventKey(" ");
  });
  document
    .querySelector("#button_left")
    .addEventListener("click", function (e) {
      game.eventKey("ArrowLeft");
    });
  document
    .querySelector("#button_right")
    .addEventListener("click", function (e) {
      game.eventKey("ArrowRight");
    });
} else {
  console.log("Your browser doesn't support web workers.");
}
