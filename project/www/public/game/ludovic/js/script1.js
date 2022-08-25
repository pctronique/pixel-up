let folderWorker = "./../js/worker/";

if (window.Worker) {
  let backgroundTaille = new Taille(1000, 1000);
  let game = undefined;
  let nbGame = 0;

  function createGame(game) {
    if (game != undefined) {
      game.remove();
      delete game;
      game = undefined;
    }
    let idScreen = "screenGame_" + nbGame;
    console.log("screenGame_" + nbGame);
    game = new Game("screenGame_" + nbGame);
    game.scoreId("score");
    game.setIdTypeMort("game_typeMort");
    game.addBackground(backgroundTaille.x, backgroundTaille.y, 47, 48);
    game.addBackground(backgroundTaille.x, backgroundTaille.y, 47, 48);
    game.setPosInitJoueur(backgroundTaille.x / 2, backgroundTaille.y - 49);
    //game.setJoueur(backgroundTaille.x/2,backgroundTaille.y-49, 47,48);
    //game.getJoueur().addListenerPos("joueur-pos-x", "joueur-pos-y");
    game.afficher();

    let screenGame = document.getElementById(idScreen);

    screenGame.addEventListener(
      "scroll",
      function () {
        console.log("screenGame.scrollHeight : " + screenGame.scrollHeight);
        console.log("screenGame.scrollWidth : " + screenGame.scrollWidth);
        console.log("screenGame.offsetHeight : " + screenGame.offsetHeight);
        console.log("screenGame.scrollTop : " + screenGame.scrollTop);
        let st =
          -1 *
          (screenGame.scrollHeight -
            screenGame.offsetHeight -
            screenGame.scrollTop);
        game.screenBottom(st);
        //game.afficher();
        let scrollHaut =
          screenGame.scrollHeight / screenGame.childElementCount -
          screenGame.offsetHeight;
        if (screenGame.scrollTop < scrollHaut) {
          game.addBackground(backgroundTaille.x, backgroundTaille.y);
        }
      },
      false
    );

    screenGame.scrollTop = screenGame.scrollHeight;

    return game;
  }

  game = createGame(game);
  game.start();
  //game.startDev();

  //game.keyGame("k");

  function startGame(e) {
    game = createGame(game);
    game.start();
    //game.startDev();
  }

  function stopGame(e) {
    game.stop();
  }
  document.getElementById("start").addEventListener("click", startGame);
  document.getElementById("stop").addEventListener("click", stopGame);

  document
    .getElementById("game_typeMort")
    .addEventListener("change", function (e) {
      let value = parseInt(document.getElementById("game_typeMort").value);
      let message = "";
      if (value == EnumTypeMort.TOMBER) {
        message = "TOMBER";
      } else if (value == EnumTypeMort.REQUIN) {
        message = "REQUIN";
      } else if (value == EnumTypeMort.AVION) {
        message = "AVION";
      } else if (value == EnumTypeMort.ASTEROIDE) {
        message = "ASTEROIDE";
      }
      alert(message);
    });

} else {
  console.log("Your browser doesn't support web workers.");
}
