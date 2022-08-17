if (window.Worker) {
    let game = new Game();
    game.setJoueur(350,948, 20,50);
    game.addBackground(700,1000);
    game.getJoueur().addListenerPos("joueur-pos-x", "joueur-pos-y");
    game.afficher();

    let screenGame = document.getElementById("screenGame");
    screenGame.scrollTop = screenGame.scrollHeight;

    game.start();

} else {
    console.log("Your browser doesn't support web workers.");
}