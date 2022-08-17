class Joueur extends Personnage {
  constructor(taille = undefined) {
    super(taille);
    this.workerJoueurSauter = undefined;
    this.workerJoueur = new Worker("./../js/worker/workerJoueur.js");
    this.workerJoueurSauter = undefined;
    this.workerJoueurMove = new Worker("./../js/worker/workerJoueurMove.js");
    this.idPosX = undefined;
    this.idPosY = undefined;
    this.sauter0 = false;
  }

  addListenerPos(idPosX, idPosY) {
    /*this.idPosX = idPosX;
    this.idPosY = idPosY;
    let classJoueur = this;
    if (document.getElementById(idPosX) != undefined) {
      document.getElementById(idPosX).value = this.pos.x;
    }
    if (document.getElementById(idPosY) != undefined) {
      document.getElementById(idPosY).value = this.pos.y;
    }
    if (document.getElementById(idPosX) != undefined) {
      document.getElementById(idPosX).addEventListener("change", function (e) {
        classJoueur.setPositionXY(document.getElementById(idPosX).value, document.getElementById(idPosY).value);
        if (classJoueur.background != undefined) {
          classJoueur.background.afficher();
        }
        let enumCollision = classJoueur.getEnumCollision();
        if (enumCollision[0] != EnumCollision.NULL) {
          console.log(enumCollision[0]);
        }
      });
    }
    if (document.getElementById(idPosY) != undefined) {
      let sauter = true;
      /*document.getElementById(idPosY).addEventListener("change", function (e) {
        if(sauter) {
          classJoueur.setPositionXY(document.getElementById(idPosX).value, document.getElementById(idPosY).value);
          if (classJoueur.background != undefined) {
            classJoueur.background.afficher();
          }
          let enumCollision = classJoueur.getEnumCollision();
          if (enumCollision[0] != EnumCollision.NULL) {
            console.log(enumCollision[0]);
          }
        }
      });
    }*/
    this.startWorker();
    //this.eventSauter();
    this.eventMove();
  }

  finSauter() {
    console.log("00258");
    this.sauter0 = false;
  }

  eventSauter() {
    let classJoueur = this;
    let idPosY = this.idPosY;
    let sauter = true;
    let sauter0 = this.sauter0;
    this.workerJoueurSauter.onmessage = function (e) {
      console.log(sauter0);
      if(sauter) {
        if (document.getElementById(idPosY) != undefined) {
          document.getElementById(idPosY).value = e.data[0];
          document.getElementById(idPosY).dispatchEvent(new Event("change"));
        }
        classJoueur.setPositionY(e.data[0]);
        if (classJoueur.background != undefined) {
          classJoueur.background.afficher();
        }
        let enumCollision = classJoueur.getEnumCollision();
        if (enumCollision[0] != EnumCollision.NULL && e.data[1]) {
          console.log(enumCollision[0]);
          if(enumCollision[1].action(enumCollision[0]) == EnumAction.STOP) {
            sauter = false;
            sauter0 = false;
            classJoueur.finSauter();
          }
        }
      }
      if(sauter0) {
        sauter0 = e.data[2];
      }
      if(!sauter0 && this.workerJoueurSauter != undefined) {
        classJoueur.finSauter();
        this.workerJoueurSauter.terminate();
        this.workerJoueurSauter = undefined;
      }
    };
  }

  sauter() {
    if(!this.sauter0) {
      this.sauter0 = true;
      this.workerJoueurSauter = new Worker(
        "./../js/worker/workerJoueurSauter.js"
      );
      this.eventSauter();
      this.workerJoueurSauter.postMessage([this.pos.y]);
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
      this.workerJoueurMove.postMessage([this.mouvement(eventKey), this.pos.x]);
    }
  }

  startWorker() {
    if (this.background != undefined) {
      this.tabPlateforme = this.background.getPlateformes();
    }
    let classJoueur = this;
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

  afficher() {
    let background = document.getElementById(this.idBackground);
    let ctx = background.getContext("2d");
    ctx.fillStyle = "#24AE1D";
    ctx.fillRect(this.pos.x, this.pos.y, this.taille.x, this.taille.y);
  }

  collisionHaut() {
    let enumCollision = this.getEnumCollision();
    return enumCollision == EnumCollision.HAUT;
  }

  movPosDev() {
    if (this.background != undefined) {
      this.background.afficher();
    }
    let enumCollision = this.getEnumCollision();
    if (enumCollision[0] != EnumCollision.NULL) {
      if(enumCollision[1].action(enumCollision[0]) == EnumAction.STOP) {
        console.log("stop");
      }
      let x = this.pos.x;
      let y = this.pos.y;
      if (enumCollision[0] == EnumCollision.HAUT) {
        let pos = new Position(x, y-1);
        this.setPosition(pos);
      }/* else if (enumCollision[0] == EnumCollision.BAS) {
        let pos = new Position(x, y+1);
        this.setPosition(pos);
        this.movPosDev();
      } else if (enumCollision[0] == EnumCollision.DROITE) {
        let pos = new Position(x+1, y);
        this.setPosition(pos);
        this.movPosDev();
      } else if (enumCollision[0] == EnumCollision.GAUCHE) {
        let pos = new Position(x-1, y);
        this.setPosition(pos);
        this.movPosDev();
      }*/
      if (this.background != undefined) {
        this.background.afficher();
      }
    }
  }

  moveDev(eventKey) {
    let x = this.pos.x;
    let y = this.pos.y;
    if (eventKey == "ArrowRight") {
      let pos = new Position(x + 1, y);
      this.setPosition(pos);
      this.movPosDev();
    } else if (eventKey == "ArrowLeft") {
      let pos = new Position(x - 1, y);
      this.setPosition(pos);
      this.movPosDev();
      this.movPosDev();
    } else if (eventKey == "ArrowDown") {
      let pos = new Position(x, y + 1);
      this.setPosition(pos);
      this.movPosDev();
      this.movPosDev();
    } else if (eventKey == "ArrowUp") {
      let pos = new Position(x, y - 1);
      this.setPosition(pos);
      this.movPosDev();
      this.movPosDev();
    }
  }

  choixMouvement(eventKey) {
    // private
    if (this.background != undefined) {
      this.tabPlateforme = this.background.getPlateformes();
    }
    let x = this.pos.x;
    let y = this.pos.y;
    if (eventKey == "ArrowRight") {
      this.mouvement(EnumMouvement.DROITE);
      for (let index = 0; index < 10; index++) {
        let pos = new Position(x + index, y);
        this.setPosition(pos);
        if (this.background != undefined) {
          this.background.afficher();
        }
        let enumCollision = this.getEnumCollision();
        if (enumCollision[0] != EnumCollision.NULL) {
          console.log(enumCollision[0]);
          //break;
        }
      }
    } else if (eventKey == "ArrowLeft") {
      this.mouvement(EnumMouvement.GAUCHE);
      for (let index = 0; index < 10; index++) {
        let pos = new Position(x - index, y);
        this.setPosition(pos);
        if (this.background != undefined) {
          this.background.afficher();
        }
        let enumCollision = this.getEnumCollision();
        if (enumCollision[0] != EnumCollision.NULL) {
          console.log(enumCollision[0]);
          //break;
        }
      }
    //} else if (eventKey == "ArrowDown") {
      //this.mouvement(EnumMouvement.BAS);
      /*for (let index = 0; index < 10; index++) {
        let pos = new Position(x, y + index);
        this.setPosition(pos);
        if (this.background != undefined) {
          this.background.afficher();
        }
        let enumCollision = this.setEnumCollision();
        if (enumCollision[0] != EnumCollision.NULL) {
          console.log(enumCollision[0]);
          break;
        }
      }*/
    //} else if (eventKey == "ArrowUp") {
      //this.mouvement(EnumMouvement.HAUT);
      /*for (let index = 0; index < 10; index++) {
        let pos = new Position(x, y - index);
        this.setPosition(pos);
        if (this.background != undefined) {
          this.background.afficher();
        }
        let enumCollision = this.setEnumCollision();
        if (enumCollision[0] != EnumCollision.NULL) {
          console.log(enumCollision[0]);
          break;
        }
      }*/
    //} else if (eventKey == " ") {
      //this.mouvement(EnumMouvement.SAUTER);
      /*for (let index = 0; index < 120; index++) {
        y -= 1;
        this.pos = new Position(x, y);
        if (this.background != undefined) {
          this.background.afficher();
        }
      }
      let number = 0;
      while (this.collisionHaut() || number == 120) {
        y += 1;
        this.pos = new Position(x, y);
        if (this.background != undefined) {
          this.background.afficher();
        }
        number++;
      }*/
    }
  }
}
