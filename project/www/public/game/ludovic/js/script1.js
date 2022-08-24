let folderWorker = "./../js/worker/";

if (window.Worker) {
    let game = new Game("screenGame");
    game.scoreId("score");
    game.setIdTypeMort("game_typeMort");
    let backgroundTaille = new Taille(1000, 1000);
    game.setPosInitJoueur(backgroundTaille.x/2,backgroundTaille.y-49);
    game.addBackground(backgroundTaille.x,backgroundTaille.y);
    game.addBackground(backgroundTaille.x,backgroundTaille.y);
    game.setJoueur(backgroundTaille.x/2,backgroundTaille.y-49, 47,48);
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
        console.log("screenGame.scrollHeight : "+screenGame.scrollHeight);
        console.log("screenGame.scrollWidth : "+screenGame.scrollWidth);
        console.log("screenGame.offsetHeight : "+screenGame.offsetHeight);
        console.log("screenGame.scrollTop : "+screenGame.scrollTop);
        let st = -1 * (screenGame.scrollHeight-screenGame.offsetHeight-screenGame.scrollTop);
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

    screenGame.scrollTop = screenGame.scrollHeight;

} else {
    console.log("Your browser doesn't support web workers.");
}