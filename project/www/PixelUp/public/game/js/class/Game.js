class Game {
  constructor(idScreen, pause = false) {
    this.classPause = undefined;
    if (pause) {
      this.classPause = new Pause();
    }
    this.backgroundDeb = undefined;
<<<<<<< HEAD
=======
    this.joueur = undefined;
>>>>>>> devSymfony
    this.backgrounds = [];
    this.nbBackground = 0;
    this.idBackground = "background_game_0";
    this.idScreen = idScreen;
    this.milliseconde = 40;
<<<<<<< HEAD
    this.scoreMilliseconde = 500;
    this.score = undefined;
    this.isTtop = true;
    this.workerGame = undefined;
    this.posInitJoueur = new Position();
    this.idTypeMort = undefined;
    this.tenueJoueur = EnumTenues.NORMAL;
    this.projectDev = false;
    this.hauteurSaut = 200;
    this.millisecondeSaut = 2;
    this.millisecondeTomber = 2;
    this.keySaut = ' ';
    this.keyGauche = 'ArrowLeft';
    this.keyDroite = 'ArrowRight';
    this.keyCoucou = 'c';
    this.keyHaut = 'ArrowUp';
    this.keyBas = 'ArrowDown';
  }

  setProjectDev() {
    this.projectDev = true;
  }


  mourir(enumAction) {
    if(!this.game != undefined) {
      console.log(this.backgrounds[enumAction.background].plateformes[enumAction.collision.index]);
      this.backgrounds[enumAction.background].joueur.mourir(this.backgrounds[enumAction.background].plateformes[enumAction.collision.index]);
    }
  }

  changementTenueJoueur(tenue) {
    this.tenueJoueur = tenue;
    this.backgrounds[0].joueur.modifTenue(tenue);
    this.backgrounds[1].joueur.modifTenue(tenue);
  }

  posCroll() {
  }

  remove() {
    for (let index = 0; index < this.backgrounds.length; index++) {
      const element = this.backgrounds[index];
      if(document.getElementById(element.idBackground) != undefined) {
        document.getElementById(element.idBackground).remove();
      }
    }
  }

  keyGame(keySaut = ' ', keyGauche = 'ArrowLeft', keyDroite = 'ArrowRight', keyCoucou = 'c') {
    this.keySaut = keySaut;
    this.keyGauche = keyGauche;
    this.keyDroite = keyDroite;
    this.keyCoucou = keyCoucou;
  }

  keyGameDev(keyHaut = 'ArrowUp', keyBas = 'ArrowDown') {
    this.keyHaut = keyHaut;
    this.keyBas = keyBas;
  }

  configSaut(hauteurSaut = 200, millisecondeSaut = 2, millisecondeTomber = 2) {
    this.hauteurSaut = hauteurSaut;
    this.millisecondeSaut = millisecondeSaut;
    this.millisecondeTomber = millisecondeTomber;
  }

  setMilliseconde(milliseconde = 500) {
    this.scoreMilliseconde = milliseconde;
  }

  setMilliseconde(milliseconde = 40) {
    this.milliseconde = milliseconde;
  }

  scoreId(idScore) {
    this.score = new Score(idScore, this.scoreMilliseconde);
  }

  setIdTypeMort(idTypeMort) {
    this.idTypeMort = idTypeMort;
  }

=======
  }

  setMilliseconde(milliseconde) {
    this.milliseconde = milliseconde;
  }

>>>>>>> devSymfony
  choixBackground(idBackground, taille, scrollMove = undefined, imgBack = undefined, imgBas = undefined) {
    switch (this.nbBackground) {
        case 0:
        return new BackgroundSousTerre(idBackground, taille, scrollMove, imgBack, imgBas);
          
        case 1:
        return new BackgroundSousMer(idBackground, taille, scrollMove, imgBack, imgBas);
           
        case 2:
        return new BackgroundTerre(idBackground, taille, scrollMove, imgBack, imgBas);
          
        case 3:
        return new BackgroundCielNuages(idBackground, taille, scrollMove, imgBack, imgBas);
          
        case 4:
        return new BackgroundCielAvions(idBackground, taille, scrollMove, imgBack, imgBas);
           
        case 5:
        return new BackgroundEspaceSatellite(idBackground, taille, scrollMove, imgBack, imgBas);
      
        case 6:
        return new BackgroundEspaceAsteroide(idBackground, taille, scrollMove, imgBack, imgBas);
           
        default:
        return new BackgroundEspaceVaisseau(idBackground, taille, scrollMove, imgBack, imgBas);
          
    }
}
<<<<<<< HEAD
  
  addBackground(tailleX, tailleY, joueurTailleX, joueurTailleY) {
=======



  addBackground(tailleX, tailleY) {
>>>>>>> devSymfony
    let screenGame = document.getElementById(this.idScreen);
    // permet d'ajouter un nouveau canvas tout en définissant sa taille
    let newcanvas = document.createElement('canvas');
    newcanvas.width = tailleX;
    newcanvas.height = tailleY;
    newcanvas.id = this.idBackground;
    let scrollMove = new ScrollMove(this.idScreen);
<<<<<<< HEAD
    scrollMove.debut();
=======
>>>>>>> devSymfony
    //retourne l'objet contexte de dessin du canvas
    let ctx = newcanvas.getContext("2d");
    //insère avant un nouveau canva et retourne le premier élément dans le screenGame
    screenGame.insertBefore(newcanvas, screenGame.querySelector("canvas"));
    let background = this.choixBackground(this.idBackground, new Taille(tailleX, tailleY), scrollMove);
<<<<<<< HEAD
    if(this.projectDev) {
      background.setProjectDev();
    }
    // ludovic (debut) : pour ajouter le joueur
    let addJoueur = this.setJoueur(tailleX/2, -tailleY, joueurTailleX, joueurTailleY);
    addJoueur.keyGame(this.keySaut, this.keyGauche, this.keyDroite, this.keyCoucou);
    addJoueur.keyGameDev(this.keyHaut, this.keyBas);
    addJoueur.configSaut(this.hauteurSaut, this.millisecondeSaut, this.millisecondeTomber);
    addJoueur.setBackground(background);
    background.setJoueur(addJoueur);

    // ludovic (fin) : pour ajouter le joueur

=======
>>>>>>> devSymfony
    this.backgrounds.push(background);
    this.createBackground();
    this.deleteBackground();
  }

  createBackground() {
    this.nbBackground++;
    this.idBackground = "background_game_"+this.nbBackground;
<<<<<<< HEAD
=======
    
    // la suite du code :

>>>>>>> devSymfony
  }

  deleteBackground() {
    let screenGame = document.getElementById(this.idScreen);
    // console.log(screenGame);
    if (screenGame.childElementCount > 2) {
<<<<<<< HEAD
      //this.scrollMove.debut();
=======
>>>>>>> devSymfony
      screenGame.removeChild(screenGame.lastChild);
      this.backgrounds.splice(0, 1);
    }

  }

<<<<<<< HEAD
  setJoueurStopTomber() {
    const element = this.backgrounds[0];
    //element.joueur.finTomber();
    if(element.joueur.pos.y < (element.taille.y-150)) {
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
      console.log({collision : enumCollision, background : 0});
      return {collision : enumCollision, background : 0};
    }
    enumCollision = this.backgrounds[1].joueur.getEnumCollision();
    if (enumCollision.enumCollision != EnumCollision.NULL) {
      console.log({collision : enumCollision, background : 1});
      return {collision : enumCollision, background : 1};
    }
    console.log({collision : enumCollision, background : -1});
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
=======
  setJoueur(posX, posY, tailleX, tailleY) {
    this.joueur = new Joueur(new Taille(tailleX, tailleY));
    this.joueur.setPosition(new Position(posX, posY));
>>>>>>> devSymfony
  }

  getJoueur() {
    return this.joueur;
  }

  afficher() {
    for (let index = 0; index < this.backgrounds.length; index++) {
      const element = this.backgrounds[index];
      if (element != undefined && this.joueur != undefined && index == 0) {
        this.joueur.setBackground(element);
        element.setJoueur(this.joueur);
        element.afficher();
      } else if (element != undefined) {
        // this.creerPlatforme();
        element.afficher();
      }
    }

  }

  eventKey(keyPress) {
<<<<<<< HEAD
    if (this.backgrounds[0].joueur != undefined) {
      if(keyPress == " ") {
        this.backgrounds[0].joueur.sauter();
      }
      this.backgrounds[0].joueur.choixMouvement(keyPress);
=======
    if (this.joueur != undefined) {
      if(keyPress == " ") {
        this.joueur.sauter();
      }
      this.joueur.choixMouvement(keyPress);
>>>>>>> devSymfony
    }
  }

  start() {
<<<<<<< HEAD
    this.isTtop = false;
    this.score.start();
      if (this.backgrounds[0].joueur != undefined) {
        let classGame = this;
        document.body.addEventListener("keydown", (event) => {
          if(!classGame.isTtop) {
            this.backgrounds[0].joueur.choixMouvement(event.key);
          }
=======
      if (this.joueur != undefined) {
        document.body.addEventListener("keydown", (event) => {
          if(event.key == " ") {
            this.joueur.sauter();
          }
          this.joueur.choixMouvement(event.key);
          //this.joueur.move(event.key);
>>>>>>> devSymfony
        });
      }

      let folderWorker0 = folderWorker;
      if(folderWorker0 == undefined) {
          folderWorker0 = "./js/worker/";
      }
<<<<<<< HEAD
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
=======
      let workerGame = new Worker(folderWorker0+"workerScore.js");
      let classGame = this;
      workerGame.onmessage = function (e) {
        classGame.afficher();
      }
      workerGame.postMessage(this.milliseconde);
  }

  startDev() {
    if (this.joueur != undefined) {
      document.body.addEventListener("keydown", (event) => {
        this.joueur.moveDev(event.key);
      });
    }
>>>>>>> devSymfony
}
  screenBottom(pos){
    this.backgrounds[0].screenBottom(pos);
  }
}
