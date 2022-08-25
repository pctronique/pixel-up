class MouvementJoueur {
  constructor(joueur) {
    this.folderWorker0 = folderWorker;
    if(this.folderWorker0 == undefined) {
        this.folderWorker0 = "./js/worker/";
    }
    this.mouvemeType = undefined;
    this.joueur = joueur;
    this.workerJoueurSauter = undefined;
    this.workerJoueurTomber = undefined;
    this.sauter0 = false;
    this.tomber0 = false;
    this.move0 = false;
    this.hauteurSaut = 200;
    this.millisecondeSaut = 2;
    this.millisecondeTomber = 2;
    this.hauteurTomber = 1000;
    this.keySaut = ' ';
    this.keyGauche = 'ArrowLeft';
    this.keyDroite = 'ArrowRight';
    this.keyHaut = 'ArrowUp';
    this.keyBas = 'ArrowDown';
    this.keyCoucou = 'c';
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

  stop() {
    this.finSauter();
    this.finTomber();
  }

  finSauter() {
    this.sauter0 = false;
    if(this.workerJoueurSauter != undefined) {
      this.workerJoueurSauter.postMessage([0, 0, 0, 0, false]);
      this.workerJoueurSauter.terminate();
      this.workerJoueurSauter = undefined;
    }
    this.joueur.posBackground();
    this.tomber();
  }

  finTomber() {
    this.tomber0 = false;
    if(this.workerJoueurTomber != undefined) {
      this.workerJoueurTomber.postMessage([0, 0, 0, 0, false]);
      this.workerJoueurTomber.terminate();
      this.workerJoueurTomber = undefined;
    }
    this.joueur.posBackground();
  }

  eventSauter() {
    let classJoueur = this.joueur;
    let classMovJoueur = this;
    let sauter = true;
    this.workerJoueurSauter.onmessage = function (e) {
      classJoueur.game.setJoueurPositionY(e.data[0]);
      sauter = e.data[1];
      if (sauter) {
        classMovJoueur.finSauter();
      }
    };
  }

  collisionAction() {
    if (this.joueur.background != undefined) {
        this.joueur.tabPlateforme = this.joueur.background.getPlateformes();
        this.joueur.tabAutrePlateforme = this.joueur.background.getAutrePlateformes();
    }
    let enumCollision = this.joueur.game.getEnumCollision();
    if (enumCollision[0] != EnumCollision.NULL) {
      let enumAction = enumCollision[1].action(enumCollision[0]);
      if (enumAction == EnumAction.STOP || enumAction == EnumAction.MORT) {
        return [enumAction, enumCollision[1]];
      }
    }
    return [EnumAction.NULL, undefined];
  }

  sauter() {
    if(!this.tomber0 && !this.sauter0 && !this.move0) {
      this.sauter0 = true;
      this.workerJoueurSauter = new Worker(this.folderWorker0+"workerJoueurSauter.js");
      this.eventSauter();
      this.workerJoueurSauter.postMessage([this.joueur.pos.y, this.joueur.background.taille.y, 200, 2, true]);
    }
  }
  
  eventTomber() {
    let classJoueur = this.joueur;
    let classMovJoueur = this;
    let tomber = true;
    this.workerJoueurTomber.onmessage = function (e) {
      if (tomber) {
        classJoueur.game.setJoueurPositionY(e.data[0]);
        let enumAction = classMovJoueur.collisionAction();
        if (enumAction[0] != EnumAction.NULL) {
          if(enumAction[0] == EnumAction.MORT) {
            classJoueur.mourir(enumAction);
          }
          tomber = false;
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
      this.workerJoueurTomber.postMessage([this.joueur.pos.y, this.joueur.background.taille.y, 1000, 2, true]);
    }
  }

  eventMove() {
    let classJoueur = this.joueur;
    let classMovJoueur = this;
    let idPosY = this.joueur.idPosY;
    let tomber = true;
    let sauter0 = this.sauter0;
    this.workerJoueurTomber.onmessage = function (e) {
      if (tomber) {
        classJoueur.setPositionY(e.data[0]);
        if (classMovJoueur.collisionAction() != EnumAction.NULL) {
          tomber = false;
        }
      }
      console.log(tomber);
      if (tomber) {
        tomber = e.data[1];
      }
      if (!tomber) {
        classMovJoueur.finTomber();
      }
    };
  }

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
        mouvem = "SAUTER";
        break;
      default:
        mouvem = "NULL";
        break;
    }
    return mouvem;
  }

  coucou() {}

  moveDev(eventKey) {
    let x = this.joueur.pos.x;
    let y = this.joueur.pos.y;
    let enumMouvement = this.enumMouvement(eventKey);
    if (enumMouvement == EnumMouvement.DROITE) {
      let pos = new Position(x + 1, y);
      this.joueur.setPosition(pos);
      this.joueur.movPosDev();
    } else if (enumMouvement == EnumMouvement.GAUCHE) {
      let pos = new Position(x - 1, y);
      this.joueur.setPosition(pos);
      this.joueur.movPosDev();
      this.joueur.movPosDev();
    } else if (enumMouvement == EnumMouvement.BAS) {
      let pos = new Position(x, y + 1);
      this.joueur.setPosition(pos);
      this.joueur.movPosDev();
      this.joueur.movPosDev();
    } else if (enumMouvement == EnumMouvement.HAUT) {
      let pos = new Position(x, y - 1);
      this.joueur.setPosition(pos);
      this.joueur.movPosDev();
      this.joueur.movPosDev();
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
    }
  }

  choixMouvement(eventKey) {
    // private
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
              if (this.collisionAction()[0]  == EnumAction.NULL) {
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
              if (this.collisionAction()[0] == EnumAction.NULL) {
                  this.tomber();
              }
            }
          }
        }
      }
  }
}
