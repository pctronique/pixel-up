class Joueur extends Personnage {
  constructor(taille = undefined) {
    super(taille);
    this.mouvementJoueur = new MouvementJoueur(this);
    this.couleur = "#24AE1D";
    this.game = undefined;
    this.tenue = undefined;
    this.image = undefined;
    this.couleur = undefined;
    //this.imageSrc("./img/tenues_personnage/MINEUR.png");
    //this.posImg = new Position(-43, -20);
    this.tailleImg = new Taille(100, 100);
    this.modifTenue(EnumTenues.NORMAL);
  }

  mourir(enumAction) {
    if (this.game != undefined) {
      console.log(enumAction);
      this.game.tuerJoueur(enumAction.typeMort());
    }
  }

  setGame(game) {
    this.game = game;
  }

  stop() {
    this.mouvementJoueur.stop();
  }

  coucou() {}

  changementTenue(tenue) {
    this.game.changementTenueJoueur(tenue);
  }

  modifTenue(tenue) {
    this.imageSrc('./img/tenues_personnage/'+ImageTenue.recupTenue(tenue));
    this.posImg = ImageTenue.recupPos(tenue);
    this.tenue = tenue;
  }

  keyGame(
    keySaut = " ",
    keyGauche = "ArrowLeft",
    keyDroite = "ArrowRight",
    keyCoucou = "c"
  ) {
    this.mouvementJoueur.keyGame(keySaut, keyGauche, keyDroite, keyCoucou);
  }

  keyGameDev(keyHaut = "ArrowUp", keyBas = "ArrowDown") {
    this.mouvementJoueur.keyGameDev(keyHaut, keyBas);
  }



  configSaut(hauteurSaut = 200, millisecondeSaut = 2, millisecondeTomber = 2) {
    this.mouvementJoueur.configSaut(hauteurSaut, millisecondeSaut, millisecondeTomber);
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
    /*let ctx = canvas.getContext("2d");
    ctx.fillStyle = this.couleur;
    ctx.fillRect(this.posLeft.x, this.posLeft.y, this.taille.x, this.taille.y);
    ctx.fillRect(this.posRight.x, this.posRight.y, this.taille.x, this.taille.y);
    ctx.fillRect(this.pos.x, this.pos.y, this.taille.x, this.taille.y);
    if (this.background != undefined) {
      this.background.afficherContenue();
    }*/

    this.createBorder(canvas);
    let imgJoueur = new Images(
      this.img,
      new Position(this.pos.x+this.posImg.x, this.pos.y+this.posImg.y),
      this.tailleImg,
      new Position(32, 32)
    );
    imgJoueur.setObjetDuplique(this);
    imgJoueur.select(2);
    imgJoueur.setBackground(this.background);
    imgJoueur.colorTransparance("#ffffff");
    imgJoueur.afficher(canvas);
  }

  collisionHaut() {
    return this.mouvementJoueur.collisionHaut();
  }

  moveDev(eventKey) {
    this.mouvementJoueur.moveDev(eventKey);
  }

  choixMouvement(eventKey) {
    this.mouvementJoueur.choixMouvement(eventKey);
  }

  finTomber() {
    this.mouvementJoueur.finTomber();
  }
}
