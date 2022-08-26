class Joueur extends Personnage {
  constructor(taille = undefined) {
    super(taille);
    this.mouvementJoueur = new MouvementJoueur(this);
<<<<<<< HEAD
    this.imageSrc("./img/tenues_personnage/MINEUR.png");
    this.couleur = "#24AE1D";
    this.game = undefined;
=======
    this.imageSrc('img/personnage-1.png');
>>>>>>> devSymfony
    this.tenue = undefined;
    this.image = undefined;
    this.imageTenue = new ImageTenue();
    this.couleur = undefined;
  }
<<<<<<< HEAD

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
    this.imageSrc('./img/tenues_personnage/'+this.imageTenue.recupTenue(tenue));
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

=======
  
  coucou() {}

  changementTenue(tenue) {
    this.couleur = this.imageTenue.recupTenue(tenue); 
    this.tenue = tenue;
  }

>>>>>>> devSymfony
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
<<<<<<< HEAD
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
      this.pos,
      this.taille,
      new Position(32, 32)
    );
    imgJoueur.setObjetDuplique(this);
    imgJoueur.select(2);
    imgJoueur.setBackground(this.background);
    imgJoueur.colorTransparance("#ffffff");
    imgJoueur.afficher(canvas);
=======
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = this.couleur;
    ctx.fillRect(this.pos.x, this.pos.y, this.taille.x, this.taille.y);
    if (this.background != undefined) {
      this.background.afficherContenue();
    }


    /*this.imageSrc('./img/personnage-1.png');
    let feu = new Images(this.img, this.pos, this.taille);
    feu.select(1);
    feu.setBackground(this.background);
    feu.colorTransparance("#ffffff");
    feu.afficher(canvas);*/
>>>>>>> devSymfony
  }

  collisionHaut() {
    return this.mouvementJoueur.collisionHaut();
  }

<<<<<<< HEAD
=======
  movPosDev() {
    this.mouvementJoueur.movPosDev();
  }

>>>>>>> devSymfony
  moveDev(eventKey) {
    this.mouvementJoueur.moveDev(eventKey);
  }

  choixMouvement(eventKey) {
    this.mouvementJoueur.choixMouvement(eventKey);
  }

<<<<<<< HEAD
  finTomber() {
    this.mouvementJoueur.finTomber();
  }
=======
>>>>>>> devSymfony
}
