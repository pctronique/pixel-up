let folderWorker = "./js/worker/";

if (window.Worker) {
    let game = new Game("screenGame");
    game.scoreId("score");
    game.setIdTypeMort("game_typeMort");
    let backgroundTaille = new Taille(1000, 5000);
    game.setPosInitJoueur(backgroundTaille.x/2,backgroundTaille.y-49);
    game.setJoueur(backgroundTaille.x/2,backgroundTaille.y-49, 47,48);
    game.addBackground(backgroundTaille.x,backgroundTaille.y);
    game.addBackground(backgroundTaille.x,backgroundTaille.y);
    //game.getJoueur().addListenerPos("joueur-pos-x", "joueur-pos-y");
    game.afficher();

    let screenGame = document.getElementById("screenGame");
    //screenGame.scrollTop = screenGame.scrollHeight;


    game.start();
    function startGame(e) {
        game.start();
    }

    function stopGame(e) {
        game.stop();
    }

    document.getElementById("start").addEventListener("click", startGame);
    document.getElementById("stop").addEventListener("click", stopGame);
    screenGame.addEventListener("scroll", function () {
        let st = -1 * (screenGame.scrollHeight-screenGame.offsetHeight-screenGame.scrollTop);
         game.screenBottom(st);
         let scrollHaut = game.backgrounds[0].scrollMove.changeBackground();
         if (screenGame.scrollTop < scrollHaut) {
            game.addBackground(backgroundTaille.x,backgroundTaille.y);
         }
     }, false);

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

    screenGame.scrollTop = screenGame.scrollHeight;

} else {
    console.log("Your browser doesn't support web workers.");
}