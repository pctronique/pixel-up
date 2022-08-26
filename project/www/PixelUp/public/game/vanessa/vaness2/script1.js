let folderWorker = "./../js/worker/";

if (window.Worker) {
    let game = new Game();
    game.setJoueur(350,948, 20,50);
    game.addBackground(700,1000);
    //game.getJoueur().addListenerPos("joueur-pos-x", "joueur-pos-y");
    //game.afficher();

    let screenGame = document.getElementById("screenGame");
    screenGame.scrollTop = screenGame.scrollHeight;

    //game.start();

    let widthBottom = 0;

    var lastScrollTop = 0;
   
    screenGame.addEventListener("scroll", function () {
       let st = -1 * ((screenGame.scrollHeight - screenGame.scrollWidth) + (screenGame.scrollWidth - screenGame.offsetHeight) - screenGame.scrollTop);
        /*screenBottom = st + 'px';    
                                                      //pour que le feu suivent le bas de l'écran au scroll
        if (widthBottom <= 700) {                     //pour augmenter en largeur progressivement le feu selon la hauteur du scroll
            st = -1 * st;
            widthBottom = 100 * (st / 10);
            ctx.fillRect(0, 0, widthBottom, 20);
        }
        if (st > lastScrollTop) {
    
        } else {
            // upscroll code
        }
        lastScrollTop = st <= 0 ? 0 : st;*/
        game.screenBottom(st);
        //game.afficher();
    }, false);
} else {
    console.log("Your browser doesn't support web workers.");
}
