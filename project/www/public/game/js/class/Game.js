class Game {
  constructor(pause = false) {
    this.classPause = undefined;
    if (pause) {
      this.classPause = new Pause();
    }
    this.backgroundDeb = undefined;
    this.joueur = undefined;
    this.backgrounds = [];
    this.nbBackground = 0;
    this.idBackground = "background_game_0";

  }

  addBackground(tailleX, tailleY) {
    let background = new Background(this.idBackground, new Taille(tailleX, tailleY));
    background.creerPlatformeBottom();
    this.backgrounds.push(background); 
  }

  createBackground() {
    this.idBackground = "background_game_"+this.nbBackground;
    this.nbBackground++;
    // la suite du code :

  }

  deleteBackground() {
    this.backgrounds.splice(0, 1);
    // la suite du code :

  }

  setJoueur(posX, posY, tailleX, tailleY) {
    this.joueur = new Joueur(new Taille(tailleX, tailleY));
    this.joueur.setPosition(new Position(posX, posY));
  }

  getJoueur() {
    return this.joueur;
  }

  afficher() {
    if (this.backgrounds[0] != undefined && this.joueur != undefined) {
      this.joueur.setBackground(this.backgrounds[0]);
      this.backgrounds[0].setJoueur(this.joueur);
      this.backgrounds[0].afficher();
    } else if (this.backgrounds[0] != undefined) {
      this.creerPlatforme();
      this.backgrounds[0].afficher();
    }
  }

  start() {
      if (this.joueur != undefined) {
        document.body.addEventListener("keydown", (event) => {
          if(event.key == " ") {
            this.joueur.sauter();
          }
          this.joueur.choixMouvement(event.key)
          //this.joueur.move(event.key);
        });
      }
  }

  startDev() {
    if (this.joueur != undefined) {
      document.body.addEventListener("keydown", (event) => {
        this.joueur.moveDev(event.key);
      });
    }
}
  screenBottom(pos){
    this.backgrounds[0].screenBottom(pos);
  }
}
