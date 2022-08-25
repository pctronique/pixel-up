let folderWorker = "./js/worker/";

if (window.Worker) {

    let backgroundTaille = new Taille(1000, 5000);
    let game = undefined;
    let nbGame = 0;

    function createGame(game) {
    if (game != undefined) {
      game.remove();
      delete game;
      game = undefined;
    }
    /*let idScreen = "screenGame_" + nbGame;
    console.log(idScreen);*/
    game = new Game("screenGame_0");
    game.scoreId("score");
    game.setIdTypeMort("game_typeMort");
    game.addBackground(backgroundTaille.x, backgroundTaille.y, 47, 48);
    game.addBackground(backgroundTaille.x, backgroundTaille.y, 47, 48);
    game.setPosInitJoueur(backgroundTaille.x / 2, backgroundTaille.y - 49);
    //game.getJoueur().addListenerPos("joueur-pos-x", "joueur-pos-y");
    game.afficher();

    let screenGame = document.getElementById("screenGame_0");

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

    screenGame.scrollTop = screenGame.scrollHeight;

    return game;
  }

  game = createGame(game);

    game.start();

    function startGame(e) {
        game.start();
    }

    function stopGame(e) {
        game.stop();
    }

     document.getElementById("game_typeMort").addEventListener("change", function (e) {
         let value = parseInt(document.getElementById("game_typeMort").value);
         let message = "";
         if(value == EnumTypeMort.TOMBER) {
             message = "TOMBER";
         } else if(value == EnumTypeMort.REQUIN) {
             message = "REQUIN";
         } else if(value == EnumTypeMort.AVION) {
             message = "AVION";
         } else if(value == EnumTypeMort.ASTEROIDE) {
             message = "ASTEROIDE";
         }
         alert(message);
     })
    
    document.querySelector('#button_up').addEventListener("click", function (e) {
        game.eventKey(' ');
    });
    document.querySelector('#button_left').addEventListener("click", function (e) {
        game.eventKey('ArrowLeft');
    });
    document.querySelector('#button_right').addEventListener("click", function (e) {
        game.eventKey('ArrowRight');
    });

} else {
    console.log("Your browser doesn't support web workers.");
}