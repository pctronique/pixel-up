let folderWorker = "./js/worker/";

if (window.Worker) {
    /*let score = new Score("score");
    score.start();*/
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

    let scrollMove = new ScrollMove();
    screenGame.addEventListener("scroll", function () {
        let calcul0 = ((screenGame.scrollHeight - screenGame.scrollWidth) + (screenGame.scrollWidth - screenGame.offsetHeight) - screenGame.scrollTop);
        let calcul4 = (screenGame.scrollHeight/2)/backgroundTaille.y;
        let st = -1 * (game.backgrounds[0].scrollMove.placeBas()/game.backgrounds[0].scrollMove.taillePixel());
        console.log(calcul4);
         game.screenBottom(st);
         game.afficher();
         let scrollHaut = game.backgrounds[0].scrollMove.changeBackground();
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
    
    document.querySelector('#button_up').addEventListener("click", function (e) {
        console.log("0001");
        game.eventKey(' ');
    });
    document.querySelector('#button_left').addEventListener("click", function (e) {
        console.log("0002");
        game.eventKey('ArrowLeft');
    });
    document.querySelector('#button_right').addEventListener("click", function (e) {
        console.log("0003");
        game.eventKey('ArrowRight');
    });

} else {
    console.log("Your browser doesn't support web workers.");
}