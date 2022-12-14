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
    this.workerJoueurDeplacement = undefined;
    this.workerJoueurCoucou = undefined;
    this.sauter0 = false;
    this.tomber0 = false;
    this.deplacement0 = false;
    this.move0 = false;
    this.coucou0 = false;
    this.infoStopTomber = undefined;
    this.hauteurSaut = 100;
    this.millisecondeSaut = 2;
    this.millisecondeTomber = 2;
    this.millisecondeDeplacement = 8;
    //this.largeurDeplacement = 5;
    this.largeurDeplacement = 5;
    this.millisecondeCoucou = 120;
    //this.largeurDeplacement = 5;
    this.largeurCoucou = 15;
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

  configDeplacement(largeurDeplacement = 1, millisecondeDeplacement = 2) {
    this.millisecondeDeplacement = millisecondeDeplacement;
    this.largeurDeplacement = largeurDeplacement;
  }

  configCoucou(largeurCoucou = 1, millisecondeCoucou = 2) {
    this.millisecondeCoucou = millisecondeCoucou;
    this.largeurCoucou = largeurCoucou;
  }

  stop() {
    this.finSauter();
    this.finTomber();
    this.finMove();
    this.finCoucou();
  }

  finSauter() {
    this.tomber();
    if(this.workerJoueurSauter != undefined) {
      this.workerJoueurSauter.postMessage([0, 0, 0, 0, false]);
      this.workerJoueurSauter.terminate();
      this.workerJoueurSauter = undefined;
    }
    this.joueur.posBackground();
    this.sauter0 = false;
  }

  finTomber() {
    if(this.workerJoueurTomber != undefined) {
      this.workerJoueurTomber.postMessage([0, 0, 0, 0, false]);
      this.workerJoueurTomber.terminate();
      this.workerJoueurTomber = undefined;
    }
    this.joueur.game.setJoueurStopTomber(this.infoStopTomber);
    this.joueur.posBackground();
    this.tomber0 = false;
  }

  finMove() {
    if(this.workerJoueurDeplacement != undefined) {
      this.workerJoueurDeplacement.postMessage([0, 0, 0, 0, false]);
      this.workerJoueurDeplacement.terminate();
      this.workerJoueurDeplacement = undefined;
    }
    this.move0 = false;
  }

  finCoucou() {
    if(this.workerJoueurCoucou != undefined) {
      this.workerJoueurCoucou.postMessage([0, 0, false]);
      this.workerJoueurCoucou.terminate();
      this.workerJoueurCoucou = undefined;
    }
    this.coucou0 = false;
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
    let valueCollision = enumCollision.collision;
    if (valueCollision.enumCollision != EnumCollision.NULL) {
      if (valueCollision.enumAction == EnumAction.STOP || valueCollision.enumAction == EnumAction.MORT) {
        return enumCollision;
      }
    }
    return enumCollision;
  }

  sauter() {
    if(!this.move0) {
      this.joueur.game.nmDeplacement(2);
    }
    if(!this.tomber0 && !this.sauter0) {
      this.joueur.game.getMoveAutoJoueur(0);
      this.sauter0 = true;
      this.workerJoueurSauter = new Worker(this.folderWorker0+"workerJoueurSauter.js");
      this.eventSauter();
      this.workerJoueurSauter.postMessage([this.joueur.pos.y, this.joueur.background.taille.y, this.hauteurSaut, this.millisecondeSaut, true]);
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
        if (enumAction.collision.enumCollision != EnumCollision.NULL) {
          if(enumAction.collision.enumAction == EnumAction.MORT || enumAction.collision.enumAction == EnumAction.STOP) {
            classMovJoueur.infoStopTomber = enumAction;
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
    let move = true;
    this.workerJoueurDeplacement.onmessage = function (e) {
      let droite = e.data[1];
      if (move) {
        let nbDeplacement = (e.data[3] + (droite ? 3 : 0))+2;
        classJoueur.game.nmDeplacement(nbDeplacement);
        classJoueur.game.setJoueurPositionX(e.data[0]);
        let collision = classMovJoueur.collisionAction();
        if (collision.collision.enumCollision  === EnumCollision.GAUCHE && droite) {
          if(collision.collision.enumAction === EnumAction.MORT) {
            classJoueur.mourir(collision);
          }
        } else if (collision.collision.enumCollision  === EnumCollision.DROITE && !droite) {
          if(collision.collision.enumAction === EnumAction.MORT) {
            classJoueur.mourir(collision);
          }
        } 
        if (collision.collision.enumCollision  === EnumAction.NULL) {
          if(!classMovJoueur.sauter0) {
            classMovJoueur.tomber(); 
          }
        }
      }
      if (move) {
        move = e.data[2];
      }
      if (!move) {
        let nbDeplacement = (1 + (droite ? 3 : 0))+2;
        classJoueur.game.nmDeplacement(nbDeplacement);
        classMovJoueur.finMove();
      }
    };
  }

  move(enumMouvement) {
    if(!this.move0 && !this.coucou0) {
      this.joueur.game.getMoveAutoJoueur(0);
      this.move0 = true;
      this.workerJoueurDeplacement = new Worker(this.folderWorker0+"workerJoueurMove.js");
      this.eventMove();
      let droite = (enumMouvement == EnumMouvement.DROITE);
      this.workerJoueurDeplacement.postMessage([this.joueur.pos.x, droite, this.largeurDeplacement, this.millisecondeDeplacement, true]);
    }
  }

  eventCoucou() {
    let classJoueur = this.joueur;
    let classMovJoueur = this;
    let coucou = true;
    this.workerJoueurCoucou.onmessage = function (e) {
      if (coucou) {
        let nbDeplacement = e.data[0]+11;
        classJoueur.game.nmDeplacement(nbDeplacement);
      }
      if (coucou) {
        coucou = e.data[1];
      }
      if (!coucou) {
        let nbDeplacement = 13;
        classJoueur.game.nmDeplacement(nbDeplacement);
        classMovJoueur.finCoucou();
      }
    };
  }

  coucou() {
    if(!this.move0 && !this.coucou0 && !this.tomber0 && !this.sauter0) {
      this.coucou0 = true;
      this.workerJoueurCoucou = new Worker(this.folderWorker0+"workerJoueurCoucou.js");
      this.eventCoucou();
      this.workerJoueurCoucou.postMessage([this.millisecondeCoucou, this.largeurCoucou, true]);
    }
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

  moveDev(eventKey) {
    let x = this.joueur.pos.x;
    let y = this.joueur.pos.y;
    let enumMouvement = this.enumMouvement(eventKey);
    if (enumMouvement == EnumMouvement.DROITE) {
      let pos = new Position(x + 1, y);
      this.joueur.game.setJoueurPositionX(x+1);
      let enumAction = this.collisionAction();
    } else if (enumMouvement == EnumMouvement.GAUCHE) {
      let pos = new Position(x - 1, y);
      this.joueur.game.setJoueurPositionX(x-1);
      let enumAction = this.collisionAction();
    } else if (enumMouvement == EnumMouvement.BAS) {
      let pos = new Position(x, y + 1);
      this.joueur.game.setJoueurPositionY(y+1);
      let enumAction = this.collisionAction();
    } else if (enumMouvement == EnumMouvement.HAUT) {
      let pos = new Position(x, y - 1);
      this.joueur.game.setJoueurPositionY(y-1);
      let enumAction = this.collisionAction();
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
          this.move(EnumMouvement.DROITE);
        } else if (enumMouvement == EnumMouvement.GAUCHE) {
          this.move(EnumMouvement.GAUCHE);
        } else if (enumMouvement == EnumMouvement.COUCOU) {
          this.coucou();
        }
      }
  }
}
