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
  }

  addBackground(tailleX, tailleY) {
    let screenGame = document.getElementById(this.idScreen);
    // permet d'ajouter un nouveau canvas tout en définissant sa taille
    let newcanvas = document.createElement('canvas');
    newcanvas.width = tailleX;
    newcanvas.height = tailleY;
    newcanvas.id = this.idBackground;
    let scrollMove = new ScrollMove(this.idScreen);
    //retourne l'objet contexte de dessin du canvas
    let ctx = newcanvas.getContext("2d");
    //insère avant un nouveau canva et retourne le premier élément dans le screenGame
    screenGame.insertBefore(newcanvas, screenGame.querySelector("canvas"));
    let background = new Background(this.idBackground, new Taille(tailleX, tailleY), scrollMove);
    this.backgrounds.push(background);
    this.createBackground();
    this.deleteBackground();
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

  setJoueur(posX, posY, tailleX, tailleY) {
    this.joueur = new Joueur(new Taille(tailleX, tailleY));
    this.joueur.setPosition(new Position(posX, posY));
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
      if (this.joueur != undefined) {
        document.body.addEventListener("keydown", (event) => {
          if(event.key == " ") {
            this.joueur.sauter();
          }
          this.joueur.choixMouvement(event.key);
          //this.joueur.move(event.key);
        });
      }

      let folderWorker0 = folderWorker;
      if(folderWorker0 == undefined) {
          folderWorker0 = "./js/worker/";
      }
      let workerGame = new Worker(folderWorker0+"workerScore.js");
      let classGame = this;
      workerGame.onmessage = function (e) {
        classGame.afficher();
      }
      workerGame.postMessage(40);
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
