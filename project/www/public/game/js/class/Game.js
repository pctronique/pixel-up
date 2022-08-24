class Game {
  constructor(idScreen, pause = false) {
    this.classPause = undefined;
    if (pause) {
      this.classPause = new Pause();
    }
    this.backgroundDeb = undefined;
    this.joueur = undefined;
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
    let background = new Background(this.idBackground, new Taille(tailleX, tailleY), scrollMove);
    this.backgrounds.push(background);
    this.createBackground();
    this.deleteBackground();
    
    let addJoueur = this.setJoueur(tailleX/2, -tailleY, joueurTailleX, joueurTailleY);
  }

  createBackground() {
    this.nbBackground++;
    this.idBackground = "background_game_"+this.nbBackground;
    
    // la suite du code :

  }

  deleteBackground() {
    let screenGame = document.getElementById(this.idScreen);
    // console.log(screenGame);
    if (screenGame.childElementCount > 2) {
      screenGame.removeChild(screenGame.lastChild);
      this.backgrounds.splice(0, 1);
    }

  }

  setPosInitJoueur(posX, posY) {
    this.posInitJoueur = new Position(posX, posY);
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
    if (this.joueur != undefined) {
      if(keyPress == " ") {
        this.joueur.sauter();
      }
      this.joueur.choixMouvement(keyPress);
    }
  }

  start() {
    this.isTtop = false;
    this.score.start();
      if (this.joueur != undefined) {
        //this.joueur.setPosition(this.posInitJoueur);
        let classGame = this;
        document.body.addEventListener("keydown", (event) => {
          if(!classGame.isTtop) {
            if(event.key == " ") {
              this.joueur.sauter();
            }
            this.joueur.choixMouvement(event.key);
          }
          //this.joueur.move(event.key);
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
      this.workerGame.postMessage(this.milliseconde);
  }

  stop() {
    this.isTtop = true;
    this.score.stop();
    if (this.joueur != undefined) {
      this.joueur.stop();
    }
    if(this.workerGame != undefined) {
      this.workerGame.terminate();
      this.workerGame = undefined;
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
