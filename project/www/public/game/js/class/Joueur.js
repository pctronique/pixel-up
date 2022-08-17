class Joueur extends Personnage {
  constructor(taille = undefined) {
    super(taille);
    this.workerJoueurSauter = undefined;
    this.workerJoueur = new Worker("./../js/worker/workerJoueur.js");
    this.workerJoueurSauter = new Worker("./../js/worker/workerJoueurSauter.js");
    this.workerJoueurMove = new Worker("./../js/worker/workerJoueurMove.js");
    this.startWorker();
    this.eventSauter();
    this.eventMove();
  }

  eventSauter() {
    let classJoueur = this;
    this.workerJoueurSauter.addEventListener("message", function (e) {
      classJoueur.setPositionY(e.data[0]);
      if (classJoueur.background != undefined) {
        classJoueur.background.afficher();
      }
      let enumCollision = classJoueur.getEnumCollision();
      if (enumCollision[0] != EnumCollision.NULL) {
        console.log(enumCollision[0]);
      }
    });
  }

  sauter() {
    this.workerJoueurSauter.postMessage([this.pos.y]);
  }
  
  eventMove() {
    let classJoueur = this;
    this.workerJoueurMove.addEventListener("message", function (e) {
      classJoueur.setPositionX(e.data[0]);
      if (classJoueur.background != undefined) {
        classJoueur.background.afficher();
      }
      let enumCollision = classJoueur.getEnumCollision();
      if (enumCollision[0] != EnumCollision.NULL) {
        console.log(enumCollision[0]);
      }
    });
  }

  move(eventKey) {
    if(eventKey == "ArrowRight" || eventKey == "ArrowLeft") {
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
    let enumCollision = this.setEnumCollision();
    return enumCollision == EnumCollision.HAUT;
  }

  choixMouvement(eventKey) {
    // private
    /*if (this.background != undefined) {
      this.tabPlateforme = this.background.getPlateformes();
    }*/
    /*let x = this.pos.x;
    let y = this.pos.y;*/
    if (eventKey == "ArrowRight") {
      this.mouvement(EnumMouvement.DROITE);
      /*for (let index = 0; index < 10; index++) {
        let pos = new Position(x + index, y);
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
    } else if (eventKey == "ArrowLeft") {
      this.mouvement(EnumMouvement.GAUCHE);
      /*for (let index = 0; index < 10; index++) {
        let pos = new Position(x - index, y);
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
    } else if (eventKey == "ArrowDown") {
      this.mouvement(EnumMouvement.BAS);
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
    } else if (eventKey == "ArrowUp") {
      this.mouvement(EnumMouvement.HAUT);
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
    } else if (eventKey == " ") {
      this.mouvement(EnumMouvement.SAUTER);
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
