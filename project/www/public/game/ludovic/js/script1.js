let joueur = new Joueur(new Taille(20,50));
joueur.setPosition(new Position(350,950));

let background = new Background("background_game", new Taille(700,1000));

let game = new Game();
game.setBackgroundDeb(background);
game.setJoueur(joueur);
game.afficher();

joueur.deplacer();
joueur.sauter();

let screenGame = document.getElementById("screenGame");
screenGame.scrollTop = screenGame.scrollHeight;

