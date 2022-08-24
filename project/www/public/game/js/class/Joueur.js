class Joueur extends Personnage {
  constructor(taille = undefined) {
    super(taille);
    this.mouvementJoueur = new MouvementJoueur(this);
    this.imageSrc('img/personnage-1.png');
    this.couleur = "#24AE1D";
    this.game = undefined;
  }

  mourir(enumAction) {
    if(!this.game != undefined) {
      this.game.tuerJoueur(enumAction[1].typeMort());
    }
  }

  setGame(game) {
    this.game = game;
  }

  stop() {
    this.mouvementJoueur.stop();
  }
  
  coucou() {}

  changementTenue(couleur) {
    this.couleur = couleur;
  }

  sauter() {
    this.mouvementJoueur.sauter();
  }

  move(eventKey) {
    this.mouvementJoueur.move(eventKey);
  }

  mouvement(enumMouvement) {
    return this.mouvementJoueur.mouvement(enumMouvement);
  }

  deplacerSauter(eventKey) {
    this.mouvementJoueur.deplacerSauter(eventKey);
  }

  afficher(canvas) {
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = this.couleur;
    ctx.fillRect(this.posLeft.x, this.posLeft.y, this.taille.x, this.taille.y);
    ctx.fillRect(this.posRight.x, this.posRight.y, this.taille.x, this.taille.y);
    ctx.fillRect(this.pos.x, this.pos.y, this.taille.x, this.taille.y);
    if (this.background != undefined) {
      this.background.afficherContenue();
    }


    /*this.imageSrc('./img/personnage-1.png');
    let feu = new Images(this.img, this.pos, this.taille);
    feu.select(1);
    feu.colorTransparance("#ffffff");
    feu.afficher(canvas);*/
  }

  collisionHaut() {
    return this.mouvementJoueur.collisionHaut();
  }

  movPosDev() {
    this.mouvementJoueur.movPosDev();
  }

  moveDev(eventKey) {
    this.mouvementJoueur.moveDev(eventKey);
  }

  choixMouvement(eventKey) {
    this.mouvementJoueur.choixMouvement(eventKey);
  }

}
