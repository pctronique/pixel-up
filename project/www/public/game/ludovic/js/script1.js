if (window.Worker) {
    let game = new Game();
    game.addBackground(700,1000);
    game.setJoueur(350,950, 20,50);
    game.afficher();

    let screenGame = document.getElementById("screenGame");
    screenGame.scrollTop = screenGame.scrollHeight;

    game.start();

} else {
    console.log("Your browser doesn't support web workers.");
}