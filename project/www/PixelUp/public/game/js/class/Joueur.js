class Joueur extends Personnage {
  constructor(taille = undefined) {
    super(taille);
    this.mouvementJoueur = new MouvementJoueur(this);
    this.couleur = "#24AE1D";
    this.game = undefined;
    this.tenue = undefined;
    this.tenueOld = undefined;
    this.image = undefined;
    this.couleur = undefined;
    this.nmDepl = 2;
    this.tailleImg = new Taille(100, 100);
    //this.tailleImg = new Taille(47, 47);
    this.modifTenue(EnumTenues.NORMAL);
  }

  /*visibleGame() {
    visibleGame();
    console.log("visibleGame");
    console.log(this);
  }*/

  nmDeplacement(num) {
    this.nmDepl = num;
  }

  mourir(enumAction) {
    if (this.game != undefined) {
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
    if(this.tenue != tenue) {
      this.tenueOld = this.tenue;
      this.imageSrc('./img/tenues_personnage/'+ImageTenue.recupTenue(tenue));
      //this.imageSrc('./img/personnage-1.png');
      this.posImg = ImageTenue.recupPos(tenue);
      this.tenue = tenue;
    }
  }

  configMoveUser(configMoveUser) {
    if(configMoveUser != undefined) {
      this.configSaut(configMoveUser.hauteurSaut, configMoveUser.millisecondeSaut, configMoveUser.millisecondeTomber);
      this.configDeplacement(configMoveUser.largeurDeplacement, configMoveUser.millisecondeDeplacement);
      this.configCoucou(configMoveUser.largeurCoucou, configMoveUser.millisecondeCoucou);
    }
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

  configDeplacement(largeurDeplacement = 1, millisecondeDeplacement = 2) {
    this.mouvementJoueur.configDeplacement(largeurDeplacement, millisecondeDeplacement);
  }

  configCoucou(largeurCoucou = 1, millisecondeCoucou = 2) {
    this.mouvementJoueur.configCoucou(largeurCoucou, millisecondeCoucou);
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

    this.deplacement();
    /*this.createBorder(canvas);
    let ctx = canvas.getContext("2d");
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
      new Position(96, 96)
    );
    imgJoueur.setObjetDuplique(this);
    imgJoueur.select(this.nmDepl);
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
