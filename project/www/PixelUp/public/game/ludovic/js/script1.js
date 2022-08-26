let folderWorker = "./../js/worker/";

if (window.Worker) {
<<<<<<< HEAD
  let backgroundTaille = new Taille(1000, 1000);
  let game = undefined;
  let nbGame = 0;

    let divGame = document.getElementById("game");
    /*if (game != undefined) {
      divGame.removeChild(divGame.lastChild);
      game.remove();
      delete game;
      game = undefined;
    }*/
    let idScreen = "screenGame_0";
    /*let newDiv = document.createElement('div');
    newDiv.classList.add("screenGame");
    newDiv.id = idScreen;
    divGame.appendChild(newDiv);*/
    game = new Game("screenGame_0");
    //game.setProjectDev();
    game.scoreId("score");
    game.setIdTypeMort("game_typeMort");
    game.addBackground(backgroundTaille.x, backgroundTaille.y, 100, 100);
    game.addBackground(backgroundTaille.x, backgroundTaille.y, 100, 100);
    game.setPosInitJoueur(backgroundTaille.x / 2, backgroundTaille.y - 101);
    //game.setJoueur(backgroundTaille.x/2,backgroundTaille.y-49, 47,48);
    //game.getJoueur().addListenerPos("joueur-pos-x", "joueur-pos-y");
    game.afficher();

    let screenGame = document.getElementById(idScreen);

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


  game.start();
  //game.startDev();

  //game.keyGame("k");

  function startGame(e) {
    game.start();
    //game.startDev();
  }

  /*function stopGame(e) {
    game.stop();
  }*/
  document.getElementById("start").addEventListener("click", startGame);
  //document.getElementById("stop").addEventListener("click", stopGame);


} else {
  console.log("Your browser doesn't support web workers.");
}
=======
    
    let score = new Score("score");
    score.start();
    let game = new Game("screenGame");
    let backgroundTaille = new Taille(1000, 5000);
    game.setJoueur(backgroundTaille.x/2,backgroundTaille.y-49, 47,48);
    game.addBackground(backgroundTaille.x,backgroundTaille.y);
    game.addBackground(backgroundTaille.x,backgroundTaille.y);
    //game.getJoueur().addListenerPos("joueur-pos-x", "joueur-pos-y");
    game.afficher();

    let screenGame = document.getElementById("screenGame");
    screenGame.scrollTop = screenGame.scrollHeight;

    game.start();


    screenGame.addEventListener("scroll", function () {
        console.log("screenGame.scrollHeight : "+screenGame.scrollHeight);
        console.log("screenGame.scrollWidth : "+screenGame.scrollWidth);
        console.log("screenGame.offsetHeight : "+screenGame.offsetHeight);
        console.log("screenGame.scrollTop : "+screenGame.scrollTop);
        let st = -1 * (screenGame.scrollHeight-screenGame.offsetHeight-screenGame.scrollTop);
        console.log(st);
         game.screenBottom(st);
         //game.afficher();
         let scrollHaut = screenGame.scrollHeight / screenGame.childElementCount -screenGame.offsetHeight;
         if (screenGame.scrollTop < scrollHaut) {
            game.addBackground(backgroundTaille.x,backgroundTaille.y);
         }
     }, false);
    /*let idScore = document.getElementById("score");
    idScore.addEventListener("change", function (e) {
        if(parseInt(idScore.innerHTML) == 100) {
            score.stop();
        }
    })*/

} else {
    console.log("Your browser doesn't support web workers.");
}
>>>>>>> devSymfony
