class Game {
  constructor(idScreen, pause = false) {
    this.classPause = undefined;
    if (pause) {
      this.classPause = new Pause();
    }
    this.backgroundDeb = undefined;
    this.backgrounds = [];
    this.nbBackground = 0;
    this.idBackground = "background_game_0";
    this.idScreen = idScreen;
    this.milliseconde = 40;
    this.score = undefined;
    this.isTtop = true;
    this.workerGame = undefined;
    this.posInitJoueur = new Position();
    this.idTypeMort = undefined;
  }

  changementTenueJoueur(tenue) {

  }

  posCroll() {
  }

  remove() {
    for (let index = 0; index < this.backgrounds.length; index++) {
      const element = this.backgrounds[index];
      document.getElementById(element.idBackground).remove();
    }
  }

  keyGame(keySaut = ' ', keyGauche = 'ArrowLeft', keyDroite = 'ArrowRight', keyCoucou = 'c') {
    for (let index = 0; index < this.backgrounds.length; index++) {
      const element = this.backgrounds[index];
      element.joueur.keyGame(keySaut, keyGauche, keyDroite, keyCoucou);
    }
  }

  keyGameDev(keyHaut = 'ArrowUp', keyBas = 'ArrowDown') {
    for (let index = 0; index < this.backgrounds.length; index++) {
      const element = this.backgrounds[index];
      element.joueur.keyGameDev(keyHaut, keyBas);
    }
  }

  setMilliseconde(milliseconde) {
    this.milliseconde = milliseconde;
  }

  scoreId(idScore) {
    this.score = new Score(idScore);
  }

  setIdTypeMort(idTypeMort) {
    this.idTypeMort = idTypeMort;
  }

  addBackground(tailleX, tailleY, joueurTailleX, joueurTailleY) {
    let screenGame = document.getElementById(this.idScreen);
    // permet d'ajouter un nouveau canvas tout en définissant sa taille
    let newcanvas = document.createElement('canvas');
    newcanvas.width = tailleX;
    newcanvas.height = tailleY;
    newcanvas.id = this.idBackground;
    let scrollMove = new ScrollMove(this.idScreen);
    scrollMove.debut();
    //retourne l'objet contexte de dessin du canvas
    let ctx = newcanvas.getContext("2d");
    //insère avant un nouveau canva et retourne le premier élément dans le screenGame
    screenGame.insertBefore(newcanvas, screenGame.querySelector("canvas"));
    let background = new TestBackgroundPlanete(this.idBackground, new Taille(tailleX, tailleY), scrollMove);
    
    // ludovic (debut) : pour ajouter le joueur
    let addJoueur = this.setJoueur(tailleX/2, -tailleY, joueurTailleX, joueurTailleY);
    addJoueur.setBackground(background);
    background.setJoueur(addJoueur);
    // ludovic (fin) : pour ajouter le joueur

    this.backgrounds.push(background);
    this.createBackground();
    this.deleteBackground();
  }

  createBackground() {
    this.nbBackground++;
    this.idBackground = "background_game_"+this.nbBackground;
  }

  deleteBackground() {
    let screenGame = document.getElementById(this.idScreen);
    // console.log(screenGame);
    if (screenGame.childElementCount > 2) {
      //this.scrollMove.debut();
      screenGame.removeChild(screenGame.lastChild);
      this.backgrounds.splice(0, 1);
    }

  }

  setJoueurStopTomber() {
    console.log(this.backgrounds);
      console.log('***********************');
      const element = this.backgrounds[0];
      //element.joueur.finTomber();
      if(element.joueur.pos.y < (element.taille.y-150)) {
        console.log('#######################');
        element.scrollMove.monter(((element.taille.y-element.joueur.pos.y)/(element.taille.y*2))*100);
      }
  }

  setJoueurPosition(pos) {
    this.setJoueurPositionXY(pos.x, pos.y);
  }

  setJoueurPositionXY(posX, posY) {
    this.backgrounds[0].joueur.setPositionXY(posX, posY);
    this.backgrounds[1].joueur.setPositionXY(posX, posY+this.backgrounds[1].taille.y);
  }

  setJoueurPositionX(posX) {
    this.backgrounds[0].joueur.setPositionX(posX);
    this.backgrounds[1].joueur.setPositionX(posX);
  }

  setJoueurPositionY(posY) {
    this.backgrounds[0].joueur.setPositionY(posY);
    this.backgrounds[1].joueur.setPositionY(posY+this.backgrounds[1].taille.y);
  }

  getEnumCollision() {
    let enumCollision = this.backgrounds[0].joueur.getEnumCollision();
    if (enumCollision.enumCollision != EnumCollision.NULL) {
      return {collision : enumCollision, background : 0};
    }
    enumCollision = this.backgrounds[1].joueur.getEnumCollision();
    if (enumCollision.enumCollision != EnumCollision.NULL) {
      return {collision : enumCollision, background : 1};
    }
    return {collision : enumCollision, background : -1};
  }

  setPosInitJoueur(posX, posY) {
    this.backgrounds[0].joueur.setPositionXY(posX, posY);
  }

  setJoueur(posX, posY, tailleX, tailleY) {
    let joueur = new Joueur(new Taille(tailleX, tailleY));
    joueur.setPosition(new Position(posX, posY));
    joueur.setGame(this);
    return joueur;
  }

  tuerJoueur(enumTypeMort) {
    if(this.idTypeMort != undefined && document.getElementById(this.idTypeMort) != undefined) {
      document.getElementById(this.idTypeMort).value = enumTypeMort;
      document.getElementById(this.idTypeMort).dispatchEvent(new Event("change"));
    }
    this.stop();
  }

  getJoueur() {
    return this.joueur;
  }

  afficher() {
    for (let index = 0; index < this.backgrounds.length; index++) {
      const element = this.backgrounds[index];
      element.afficher();
    }

  }

  eventKey(keyPress) {
    if (this.backgrounds[0].joueur != undefined) {
      if(keyPress == " ") {
        this.backgrounds[0].joueur.sauter();
      }
      this.backgrounds[0].joueur.choixMouvement(keyPress);
    }
  }

  start() {
    this.isTtop = false;
    this.score.start();
      if (this.backgrounds[0].joueur != undefined) {
        let classGame = this;
        document.body.addEventListener("keydown", (event) => {
          if(!classGame.isTtop) {
            this.backgrounds[0].joueur.choixMouvement(event.key);
          }
        });
      }

      let folderWorker0 = folderWorker;
      if(folderWorker0 == undefined) {
          folderWorker0 = "./js/worker/";
      }
      this.workerGame = new Worker(folderWorker0+"workerScore.js");
      let classGame = this;
      this.workerGame.onmessage = function (e) {
        classGame.afficher();
      }
      this.workerGame.postMessage([this.milliseconde, true]);
  }

  stop() {
    this.isTtop = true;
    this.score.stop();
    if (this.backgrounds[0] != undefined) {
      this.backgrounds[0].stop();
    }
    if(this.workerGame != undefined) {
      this.workerGame.postMessage([0, false]);
      this.workerGame.terminate();
      this.workerGame = undefined;
    }
  }

  startDev() {
    if (this.backgrounds[0] != undefined) {
      document.body.addEventListener("keydown", (event) => {
        this.backgrounds[0].joueur.moveDev(event.key);
      });
    }

    let folderWorker0 = folderWorker;
    if(folderWorker0 == undefined) {
        folderWorker0 = "./js/worker/";
    }
    this.workerGame = new Worker(folderWorker0+"workerScore.js");
    let classGame = this;
    this.workerGame.onmessage = function (e) {
      classGame.afficher();
    }
    this.workerGame.postMessage([this.milliseconde, true]);
}
  screenBottom(pos){
    this.backgrounds[0].screenBottom(pos);
  }
}
