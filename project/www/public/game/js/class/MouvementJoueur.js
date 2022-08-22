class MouvementJoueur {
  constructor(joueur) {
    this.joueur = joueur;
    this.workerJoueurSauter = undefined;
    this.workerJoueurTomber = undefined;
    this.sauter0 = false;
  }

  finSauter() {
    this.sauter0 = false;
    if(this.workerJoueurSauter != undefined) {
      this.workerJoueurSauter.terminate();
      this.workerJoueurSauter = undefined;
    }
    this.joueur.posBackground();
  }

  eventSauter() {
    let classJoueur = this.joueur;
    let classMovJoueur = this;
    let idPosY = this.joueur.idPosY;
    let sauter = true;
    let sauter0 = this.sauter0;
    this.workerJoueurSauter.onmessage = function (e) {
      if (sauter) {
        classJoueur.setPositionY(e.data[0]);
        if (classJoueur.background != undefined) {
          classJoueur.background.afficher();
        }
        let enumCollision = classJoueur.getEnumCollision();
        if (enumCollision[0] != EnumCollision.NULL && e.data[1]) {
          //console.log(enumCollision[0]);
          if (enumCollision[1].action(enumCollision[0]) == EnumAction.STOP) {
            sauter = false;
            sauter0 = false;
            classMovJoueur.finSauter();
          }
        }
      }
      if (sauter0) {
        sauter0 = e.data[2];
        sauter = e.data[2];
        //console.log(sauter0);
        if (!sauter0) {
          classMovJoueur.finSauter();
        }
      }
    };
  }

  sauter() {
    if (!this.sauter0) {
      this.sauter0 = true;
      this.workerJoueurSauter = new Worker("./../js/worker/workerJoueurSauter.js");
      this.eventSauter();
      this.workerJoueurSauter.postMessage([this.joueur.pos.y, this.joueur.background.taille.y]);
    }
  }
  
  eventTomber() {
    let classJoueur = this.joueur;
    let classMovJoueur = this;
    let idPosY = this.joueur.idPosY;
    let sauter = true;
    let sauter0 = this.sauter0;
    this.workerJoueurTomber.onmessage = function (e) {
      if (sauter) {
        classJoueur.setPositionY(e.data[0]);
        if (classJoueur.background != undefined) {
          classJoueur.background.afficher();
        }
        let enumCollision = classJoueur.getEnumCollision();
        if (enumCollision[0] != EnumCollision.NULL && e.data[1]) {
          //console.log(enumCollision[0]);
          if (enumCollision[1].action(enumCollision[0]) == EnumAction.STOP) {
            sauter = false;
            sauter0 = false;
            classMovJoueur.finSauter();
          }
        }
      }
      if (sauter0) {
        sauter0 = e.data[2];
      }
      if (!sauter0 && this.workerJoueurSauter != undefined) {
        classMovJoueur.finSauter();
        this.workerJoueurSauter.terminate();
        this.workerJoueurSauter = undefined;
        classJoueur.posBackground();
      }
    };
  }

  tomber() {
    if (!this.sauter0) {
      this.sauter0 = true;
      this.workerJoueurTomber = new Worker("./../js/worker/workerJoueurTomber.js");
      this.eventTomber();
      this.workerJoueurTomber.postMessage([this.joueur.pos.y, this.joueur.background.taille.y]);
    }
  }



  eventMove() {
    let classJoueur = this;
    let idPosX = this.idPosX;
    this.workerJoueurMove.addEventListener("message", function (e) {
      if (document.getElementById(idPosX) != undefined) {
        document.getElementById(idPosX).value = e.data[0];
        document.getElementById(idPosX).dispatchEvent(new Event("change"));
      }
      /*classJoueur.setPositionX(e.data[0]);
        if (classJoueur.background != undefined) {
          classJoueur.background.afficher();
        }
        let enumCollision = classJoueur.getEnumCollision();
        if (enumCollision[0] != EnumCollision.NULL) {
          console.log(enumCollision[0]);
        }*/
    });
  }

  move(eventKey) {
    if (eventKey == "ArrowRight" || eventKey == "ArrowLeft") {
      this.workerJoueurMove.postMessage([this.joueur.mouvement(eventKey), this.joueur.pos.x]);
    }
  }

  startWorker() {
    if (this.joueur.background != undefined) {
        this.joueur.tabPlateforme = this.joueur.background.getPlateformes();
    }
    let classJoueur = this.joueur;
    this.workerJoueur.addEventListener("message", function (e) {
      let pos = new Position(e.data[0], e.data[1]);
      classJoueur.setPosition(pos);
      if (classJoueur.background != undefined) {
        classJoueur.background.afficher();
      }
      let enumCollision = classJoueur.getEnumCollision();
      if (enumCollision[0] != EnumCollision.NULL) {
        console.log(enumCollision[0]);
      }
    });
  }

  mouvement(enumMouvement) {
    let mouvem = "";
    switch (enumMouvement) {
      case "ArrowUp":
        mouvem = "HAUT";
        break;
      case "ArrowDown":
        mouvem = "BAS";
        break;
      case "ArrowRight":
        mouvem = "DROITE";
        break;
      case "ArrowLeft":
        mouvem = "GAUCHE";
        break;
      case " ":
        mouvem = "SAUTER";
        break;
      default:
        mouvem = "NULL";
        break;
    }
    return mouvem;
    /*let plateformesCollision = undefined;
      if (this.background != undefined) {
        plateformesCollision = this.background.getPlateformesCollision();
      }
      this.workerJoueur.postMessage([mouvem, this.pos.x, this.pos.y, plateformesCollision, 0]);*/
  }
  coucou() {}

  changementTenue() {}

  deplacerSauter(eventKey) {
    this.choixMouvement(eventKey);
  }

  collisionHaut() {
    let enumCollision = this.joueur.getEnumCollision();
    return enumCollision == EnumCollision.HAUT;
  }

  movPosDev() {
    if (this.joueur.background != undefined) {
        this.joueur.background.afficher();
    }
    let enumCollision = this.joueur.getEnumCollision();
    if (enumCollision[0] != EnumCollision.NULL) {
      if (enumCollision[1].action(enumCollision[0]) == EnumAction.STOP) {
        console.log("stop");
      }
      let x = this.joueur.pos.x;
      let y = this.joueur.pos.y;
      if (enumCollision[0] == EnumCollision.HAUT) {
        let pos = new Position(x, y - 1);
        this.joueur.setPosition(pos);
      }
      if (this.joueur.background != undefined) {
        this.joueur.background.afficher();
      }
    }
  }

  moveDev(eventKey) {
    let x = this.joueur.pos.x;
    let y = this.joueur.pos.y;
    if (eventKey == "ArrowRight") {
      let pos = new Position(x + 1, y);
      this.joueur.setPosition(pos);
      this.joueur.movPosDev();
    } else if (eventKey == "ArrowLeft") {
      let pos = new Position(x - 1, y);
      this.joueur.setPosition(pos);
      this.joueur.movPosDev();
      this.joueur.movPosDev();
    } else if (eventKey == "ArrowDown") {
      let pos = new Position(x, y + 1);
      this.joueur.setPosition(pos);
      this.joueur.movPosDev();
      this.joueur.movPosDev();
    } else if (eventKey == "ArrowUp") {
      let pos = new Position(x, y - 1);
      this.joueur.setPosition(pos);
      this.joueur.movPosDev();
      this.joueur.movPosDev();
    }
  }

  choixMouvement(eventKey) {
    // private
    if (this.joueur.background != undefined) {
        this.joueur.tabPlateforme = this.joueur.background.getPlateformes();
    }
    let x = this.joueur.pos.x;
    let y = this.joueur.pos.y;
    if (eventKey == "ArrowRight") {
        this.joueur.mouvement(EnumMouvement.DROITE);
      for (let index = 0; index < 10; index++) {
        let pos = new Position(x + index, y);
        this.joueur.setPosition(pos);
        if (this.joueur.background != undefined) {
            this.joueur.background.afficher();
        }
        let enumCollision = this.joueur.getEnumCollision();
        //console.log(enumCollision[0]);
        if (enumCollision[0] == EnumCollision.NULL) {
            //console.log("0024");
            this.tomber(); 
          //break;
        }
      }
    } else if (eventKey == "ArrowLeft") {
        this.joueur.mouvement(EnumMouvement.GAUCHE);
      for (let index = 0; index < 10; index++) {
        let pos = new Position(x - index, y);
        this.joueur.setPosition(pos);
        if (this.joueur.background != undefined) {
            this.joueur.background.afficher();
        }
        let enumCollision = this.joueur.getEnumCollision();
        //console.log(enumCollision[0]);
        if (enumCollision[0] == EnumCollision.NULL) {
            //console.log("0025");
            this.tomber();
          //break;
        }
      }
    }
  }
}
