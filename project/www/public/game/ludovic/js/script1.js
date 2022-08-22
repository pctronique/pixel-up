if (window.Worker) {
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
         game.afficher();
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