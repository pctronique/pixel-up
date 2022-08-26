class MouvementJoueur {
  constructor(joueur) {
    this.folderWorker0 = folderWorker;
    if(this.folderWorker0 == undefined) {
        this.folderWorker0 = "./js/worker/";
    }
<<<<<<< HEAD
    this.mouvemeType = undefined;
    this.joueur = joueur;
    this.workerJoueurSauter = undefined;
    this.workerJoueurTomber = undefined;
    this.workerJoueurDeplacement = undefined;
    this.sauter0 = false;
    this.tomber0 = false;
    this.deplacement0 = false;
    this.move0 = false;
    this.hauteurSaut = 200;
    this.millisecondeSaut = 2;
    this.millisecondeTomber = 2;
    this.millisecondeDeplacement = 2;
    this.nbDeplacement = 1;
    this.hauteurTomber = 10000;//joueur.background.taille.y;
    this.keySaut = ' ';
    this.keyGauche = 'ArrowLeft';
    this.keyDroite = 'ArrowRight';
    this.keyHaut = 'ArrowUp';
    this.keyBas = 'ArrowDown';
    this.keyCoucou = 'c';
  }

  configSaut(hauteurSaut = 200, millisecondeSaut = 2, millisecondeTomber = 2) {
    this.hauteurSaut = hauteurSaut;
    this.millisecondeSaut = millisecondeSaut;
    this.millisecondeTomber = millisecondeTomber;
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

  deplacement(nbDeplacement, millisecondeDeplacement) {

  }

  stop() {
    this.finSauter();
    this.finTomber();
=======
    this.joueur = joueur;
    this.workerJoueurSauter = undefined;
    this.workerJoueurTomber = undefined;
    this.sauter0 = false;
    this.tomber0 = false;
    this.move0 = false;
>>>>>>> devSymfony
  }

  finSauter() {
    this.sauter0 = false;
    if(this.workerJoueurSauter != undefined) {
<<<<<<< HEAD
      this.workerJoueurSauter.postMessage([0, 0, 0, 0, false]);
=======
>>>>>>> devSymfony
      this.workerJoueurSauter.terminate();
      this.workerJoueurSauter = undefined;
    }
    this.joueur.posBackground();
    this.tomber();
  }

  finTomber() {
<<<<<<< HEAD
    this.tomber0 = false;
    if(this.workerJoueurTomber != undefined) {
      this.workerJoueurTomber.postMessage([0, 0, 0, 0, false]);
      this.workerJoueurTomber.terminate();
      this.workerJoueurTomber = undefined;
    }
    this.joueur.game.setJoueurStopTomber();
=======
    console.log("fin de tomber");
    this.tomber0 = false;
    if(this.workerJoueurTomber != undefined) {
      this.workerJoueurTomber.terminate();
      this.workerJoueurTomber = undefined;
    }
>>>>>>> devSymfony
    this.joueur.posBackground();
  }

  eventSauter() {
    let classJoueur = this.joueur;
    let classMovJoueur = this;
<<<<<<< HEAD
    let sauter = true;
    this.workerJoueurSauter.onmessage = function (e) {
      classJoueur.game.setJoueurPositionY(e.data[0]);
=======
    let idPosY = this.joueur.idPosY;
    let sauter = true;
    let sauter0 = this.sauter0;
    this.workerJoueurSauter.onmessage = function (e) {
      //if (sauter) {
      classJoueur.setPositionY(e.data[0]);
        /*if (classMovJoueur.collisionAction() != EnumAction.NULL) {
            sauter = false;
            sauter0 = false;
            classMovJoueur.finSauter();
        }
      }*/
>>>>>>> devSymfony
      sauter = e.data[1];
      if (sauter) {
        classMovJoueur.finSauter();
      }
    };
  }

<<<<<<< HEAD
  infoColision(enumCollision) {
    let tabColl = enumCollision.collision;
    let enumCollision0 = tabColl.enumCollision;
    let enumAction = tabColl.enumAction;
    let index = tabColl.index;
  }

=======
>>>>>>> devSymfony
  collisionAction() {
    if (this.joueur.background != undefined) {
        this.joueur.tabPlateforme = this.joueur.background.getPlateformes();
        this.joueur.tabAutrePlateforme = this.joueur.background.getAutrePlateformes();
    }
<<<<<<< HEAD
    let enumCollision = this.joueur.game.getEnumCollision();
    let valueCollision = enumCollision.collision;
    this.infoColision(enumCollision);
    if (valueCollision.enumCollision != EnumCollision.NULL) {
      if (valueCollision.enumAction == EnumAction.STOP || valueCollision.enumAction == EnumAction.MORT) {
        return enumCollision;
      }
    }
    return enumCollision;
=======
    let enumCollision = this.joueur.getEnumCollision();
    if (enumCollision[0] != EnumCollision.NULL) {
      //console.log(enumCollision[0]);
      if (enumCollision[1].action(enumCollision[0]) == EnumAction.STOP || enumCollision[1].action(enumCollision[0]) == EnumAction.MORT) {
        return enumCollision[1].action(enumCollision[0]);
      }
    }
    return EnumAction.NULL;
>>>>>>> devSymfony
  }

  sauter() {
    if(!this.tomber0 && !this.sauter0 && !this.move0) {
      this.sauter0 = true;
      this.workerJoueurSauter = new Worker(this.folderWorker0+"workerJoueurSauter.js");
      this.eventSauter();
<<<<<<< HEAD
      this.workerJoueurSauter.postMessage([this.joueur.pos.y, this.joueur.background.taille.y, this.hauteurSaut, this.millisecondeSaut, true]);
=======
      this.workerJoueurSauter.postMessage([this.joueur.pos.y, this.joueur.background.taille.y, 200, 5]);
>>>>>>> devSymfony
    }
  }
  
  eventTomber() {
    let classJoueur = this.joueur;
    let classMovJoueur = this;
<<<<<<< HEAD
    let tomber = true;
    this.workerJoueurTomber.onmessage = function (e) {
      if (tomber) {
        classJoueur.game.setJoueurPositionY(e.data[0]);
        let enumAction = classMovJoueur.collisionAction();

        console.log(enumAction);
        if (enumAction.collision.enumCollision != EnumCollision.NULL) {
          if(enumAction.collision.enumAction == EnumAction.MORT || enumAction.collision.enumAction == EnumAction.STOP) {
            tomber = false;
          }
          if(enumAction.collision.enumAction == EnumAction.MORT) {
            classJoueur.game.mourir(enumAction);
          }
        }
      }
      if (tomber) {
        tomber = e.data[1];
      }
      if (!tomber) {
        classMovJoueur.finTomber();
      }
    };
  }

  tomber() {
    if(!this.tomber0) {
      this.tomber0 = true;
      this.workerJoueurTomber = new Worker(this.folderWorker0+"workerJoueurTomber.js");
      this.eventTomber();
      this.workerJoueurTomber.postMessage([this.joueur.pos.y, this.joueur.background.taille.y, this.hauteurTomber, this.millisecondeTomber, true]);
    }
  }

  eventMove() {
    let classJoueur = this.joueur;
    let classMovJoueur = this;
=======
>>>>>>> devSymfony
    let idPosY = this.joueur.idPosY;
    let tomber = true;
    let sauter0 = this.sauter0;
    this.workerJoueurTomber.onmessage = function (e) {
      if (tomber) {
        classJoueur.setPositionY(e.data[0]);
<<<<<<< HEAD
        let collision = classMovJoueur.collisionAction();
        if (collision.collision.enumCollision  === EnumCollision.HAUT) {
          tomber = false;
          if(collision.collision.enumAction === EnumAction.MORT) {
            this.joueur.game.mourir(collision);
          }
=======
        if (classMovJoueur.collisionAction() != EnumAction.NULL) {
          tomber = false;
>>>>>>> devSymfony
        }
      }
      console.log(tomber);
      if (tomber) {
        tomber = e.data[1];
      }
      if (!tomber) {
<<<<<<< HEAD
=======
      //if (!this.tomber0 && !sauter0 && this.workerJoueurSauter != undefined) {
>>>>>>> devSymfony
        classMovJoueur.finTomber();
      }
    };
  }

<<<<<<< HEAD
  move() {
    
  }

  mouvement(enumMouvement) {
    let mouvem = "";
    switch (enumMouvement) {
      case EnumMouvement.HAUT:
        mouvem = "HAUT";
        break;
      case EnumMouvement.BAS:
        mouvem = "BAS";
        break;
      case EnumMouvement.DROITE:
        mouvem = "DROITE";
        break;
      case EnumMouvement.GAUCHE:
        mouvem = "GAUCHE";
        break;
      case EnumMouvement.SAUTER:
=======
  tomber() {
    if(!this.tomber0 && !this.sauter0 && !this.move0) {
      this.tomber0 = true;
      this.workerJoueurTomber = new Worker(this.folderWorker0+"workerJoueurTomber.js");
      this.eventTomber();
      this.workerJoueurTomber.postMessage([this.joueur.pos.y, this.joueur.background.taille.y, 1000, 5]);;
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
  startWorker() {
    if (this.joueur.background != undefined) {
        this.joueur.tabPlateforme = this.joueur.background.getPlateformes();
        this.joueur.tabAutrePlateforme = this.joueur.background.getAutrePlateformes();
    }
    let classJoueur = this.joueur;
    this.workerJoueur.addEventListener("message", function (e) {
      let pos = new Position(e.data[0], e.data[1]);
      classJoueur.setPosition(pos);
      /*if (classJoueur.background != undefined) {
        classJoueur.background.afficher();
      }*/
      let enumCollision = classJoueur.getEnumCollision();
      if (enumCollision[0] != EnumCollision.NULL) {
        console.log(enumCollision[0]);
      }
    });
  }

  move(eventKey) {
    if (eventKey == "ArrowRight" || eventKey == "ArrowLeft") {
      this.workerJoueurMove.postMessage([this.joueur.mouvement(eventKey), this.joueur.pos.x]);
    }
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
>>>>>>> devSymfony
        mouvem = "SAUTER";
        break;
      default:
        mouvem = "NULL";
        break;
    }
    return mouvem;
<<<<<<< HEAD
  }

  coucou() {}
=======
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
    /*if (this.joueur.background != undefined) {
        this.joueur.background.afficher();
    }*/
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
      /*if (this.joueur.background != undefined) {
        this.joueur.background.afficher();
      }*/
    }
  }
>>>>>>> devSymfony

  moveDev(eventKey) {
    let x = this.joueur.pos.x;
    let y = this.joueur.pos.y;
<<<<<<< HEAD
    let enumMouvement = this.enumMouvement(eventKey);
    if (enumMouvement == EnumMouvement.DROITE) {
      let pos = new Position(x + 1, y);
      this.joueur.setPosition(pos);
      let enumAction = this.collisionAction();
      console.log(enumAction);
    } else if (enumMouvement == EnumMouvement.GAUCHE) {
      let pos = new Position(x - 1, y);
      this.joueur.setPosition(pos);
      let enumAction = this.collisionAction();
      console.log(enumAction);
    } else if (enumMouvement == EnumMouvement.BAS) {
      let pos = new Position(x, y + 1);
      this.joueur.setPosition(pos);
      let enumAction = this.collisionAction();
      console.log(enumAction);
    } else if (enumMouvement == EnumMouvement.HAUT) {
      let pos = new Position(x, y - 1);
      this.joueur.setPosition(pos);
      let enumAction = this.collisionAction();
      console.log(enumAction);
    }
  }
  
  enumMouvement(eventKey) {
    switch (eventKey) {
      case this.keyHaut:
        return EnumMouvement.HAUT;
      case this.keyBas:
        return EnumMouvement.BAS;
      case this.keyDroite:
        return EnumMouvement.DROITE;
      case this.keyGauche:
        return EnumMouvement.GAUCHE;
      case this.keySaut:
        return EnumMouvement.SAUTER;
      case this.keyCoucou:
        return EnumMouvement.COUCOU;
      default:
        return EnumMouvement.NULL;
=======
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
>>>>>>> devSymfony
    }
  }

  choixMouvement(eventKey) {
    // private
<<<<<<< HEAD
      let enumMouvement = this.enumMouvement(eventKey);
      if(enumMouvement == EnumMouvement.SAUTER) {
        this.sauter();
      } else {
        if (this.joueur.background != undefined) {
            this.joueur.tabPlateforme = this.joueur.background.getPlateformes();
            this.joueur.tabAutrePlateforme = this.joueur.background.getAutrePlateformes();
        }
        let x = this.joueur.pos.x;
        let y = this.joueur.pos.y;
        if (enumMouvement == EnumMouvement.DROITE) {
          this.mouvemeType = this.mouvement(enumMouvement);
          for (let index = 0; index < 10; index++) {
            //let pos = new Position(x + index, y);
            this.joueur.game.setJoueurPositionX(x + index);
            if(!this.tomber0) {
              let collision = this.collisionAction();
              if (collision.collision.enumCollision  === EnumCollision.GAUCHE) {
                if(collision.collision.enumAction === EnumAction.MORT) {
                  this.joueur.game.mourir(collision);
                }
              }
              if (collision.collision.enumCollision  === EnumAction.NULL) {
                  this.tomber(); 
              }
            }
          }
        } else if (enumMouvement == EnumMouvement.GAUCHE) {
          this.mouvemeType = this.mouvement(enumMouvement);
          for (let index = 0; index < 10; index++) {
            //let pos = new Position(x - index, y);
            this.joueur.game.setJoueurPositionX(x - index);
            if(!this.tomber0) {
              let collision = this.collisionAction();
              if (collision.collision.enumCollision  === EnumCollision.DROITE) {
                if(collision.collision.enumAction === EnumAction.MORT) {
                  this.joueur.game.mourir(collision);
                }
              }
              if (collision.collision.enumCollision === EnumAction.NULL) {
                  this.tomber();
              }
=======
    
      if (this.joueur.background != undefined) {
          this.joueur.tabPlateforme = this.joueur.background.getPlateformes();
          this.joueur.tabAutrePlateforme = this.joueur.background.getAutrePlateformes();
      }
      let x = this.joueur.pos.x;
      let y = this.joueur.pos.y;
      if (eventKey == "ArrowRight") {
          this.joueur.mouvement(EnumMouvement.DROITE);
        for (let index = 0; index < 10; index++) {
          let pos = new Position(x + index, y);
          this.joueur.setPosition(pos);
          if(!this.tomber0) {
            if (this.collisionAction() == EnumAction.NULL) {
                this.tomber(); 
            }
          }
        }
      } else if (eventKey == "ArrowLeft") {
          this.joueur.mouvement(EnumMouvement.GAUCHE);
        for (let index = 0; index < 10; index++) {
          let pos = new Position(x - index, y);
          this.joueur.setPosition(pos);
          if(!this.tomber0) {
            if (this.collisionAction() == EnumAction.NULL) {
                this.tomber();
>>>>>>> devSymfony
            }
          }
        }
      }
  }
}
