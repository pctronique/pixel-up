class Game {
  constructor(idScreen, tabConfigBackground = undefined, tabConfigMovBackground = undefined, pause = false) {
    this.nbscroll = 0;
    this.classPause = undefined;
    if (pause) {
      this.classPause = new Pause();
    }
    this.tabConfigMovBackground = tabConfigMovBackground;
    this.scrollMove = new ScrollMove(idScreen, this);
    this.tailleBackground = new Taille(0, 0);
    this.tailleJoueur = new Taille(0, 0);
    this.backgroundDeb = undefined;
    this.backgrounds = [];
    this.nbBackground = 0;
    this.idBackground = "background_game_0";
    this.idScreen = idScreen;
    this.milliseconde = 40;
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
    this.millisecondeDeplacement = 8;
    //this.largeurDeplacement = 5;
    this.largeurDeplacement = 1;
    this.millisecondeCoucou = 8;
    this.largeurCoucou = 1;
    this.keySaut = " ";
    this.keyGauche = "ArrowLeft";
    this.keyDroite = "ArrowRight";
    this.keyCoucou = "c";
    this.keyHaut = "ArrowUp";
    this.keyBas = "ArrowDown";
    this.tabConfigBackground = tabConfigBackground;
    this.volumeEffet = 100;
    this.activeAutoScroll(false);
  }

  activeAutoScroll(active) {
    this.scrollMove.setAutoScrollActive(active);
  }

  setVolumeEffet(volume) {
    this.volumeEffet = volume;
  }

  setTailleBackground(width, height) {
    this.tailleBackground = new Taille(width, height);
    this.scrollMove.setBackgroundTaille(this.tailleBackground);
  }

  setTailleJoueur(width, height) {
    this.tailleJoueur = new Taille(width, height);
  }

  setProjectDev() {
    this.projectDev = true;
  }

  mourir(enumAction) {

    if(!this.isTtop) {
      if (!this.game != undefined) {
        if (enumAction.collision.plateforme) {
          this.backgrounds[enumAction.background].joueur.mourir(
            this.backgrounds[enumAction.background].plateformes[
              enumAction.collision.index
            ]
          );
        } else {
          this.backgrounds[enumAction.background].joueur.mourir(
            this.backgrounds[enumAction.background].tabAutrePlateforme[
              enumAction.collision.index
            ]
          );
        }
      }
    }
  }

  changementTenueJoueur(tenue) {
    this.tenueJoueur = tenue;
    this.backgrounds[0].joueur.modifTenue(tenue);
    this.backgrounds[1].joueur.modifTenue(tenue);
    console.log(this.tenueJoueur);
    console.log(this.backgrounds[0].joueur);
    console.log(this.backgrounds[1].joueur);
  }

  nmDeplacement(num) {
    this.backgrounds[0].joueur.nmDeplacement(num);
    this.backgrounds[1].joueur.nmDeplacement(num);
  }

  posCroll() {}

  remove() {
    for (let index = 0; index < this.backgrounds.length; index++) {
      const element = this.backgrounds[index];
      if (document.getElementById(element.idBackground) != undefined) {
        document.getElementById(element.idBackground).remove();
      }
    }
  }

  keyGame(
    keySaut = " ",
    keyGauche = "ArrowLeft",
    keyDroite = "ArrowRight",
    keyCoucou = "c"
  ) {
    this.keySaut = keySaut;
    this.keyGauche = keyGauche;
    this.keyDroite = keyDroite;
    this.keyCoucou = keyCoucou;
  }

  keyGameDev(keyHaut = "ArrowUp", keyBas = "ArrowDown") {
    this.keyHaut = keyHaut;
    this.keyBas = keyBas;
  }

  configSaut(hauteurSaut = 200, millisecondeSaut = 2, millisecondeTomber = 2) {
    this.hauteurSaut = hauteurSaut;
    this.millisecondeSaut = millisecondeSaut;
    this.millisecondeTomber = millisecondeTomber;
  }

  configDeplacement(largeurDeplacement = 1, millisecondeDeplacement = 2) {
    this.millisecondeDeplacement = millisecondeDeplacement;
    this.largeurDeplacement = largeurDeplacement;
  }

  configCoucou(largeurCoucou = 1, millisecondeCoucou = 2) {
    this.millisecondeCoucou = millisecondeCoucou;
    this.largeurCoucou = largeurCoucou;
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

  choixMov() {
    let config = undefined;
    let configMov = undefined;
    switch (this.nbBackground) {
      case 0:
        if (this.tabConfigMovBackground != undefined) {
          config = this.tabConfigMovBackground.SOUS_TERRE;
        }
        break;
      case 1:
        if (this.tabConfigMovBackground != undefined) {
          config = this.tabConfigMovBackground.SOUS_MER;
        }
        break;
      case 2:
        if (this.tabConfigMovBackground != undefined) {
          config = this.tabConfigMovBackground.TERRE;
        }
        break;
      case 3:
        if (this.tabConfigMovBackground != undefined) {
          config = this.tabConfigMovBackground.CIEL_NUAGE;
        }
        break;
      case 4:
        if (this.tabConfigMovBackground != undefined) {
          config = this.tabConfigMovBackground.CIEL_AVIONS;
        }
        break;
      case 5:
        if (this.tabConfigMovBackground != undefined) {
          config = this.tabConfigMovBackground.ESPACE_ASTEROIDE;
        }
        break;
      case 6:
        if (this.tabConfigMovBackground != undefined) {
          config = this.tabConfigMovBackground.ESPACE_SATELLITE;
        }
        break;
      default:
        if (this.tabConfigMovBackground != undefined) {
          config = this.tabConfigMovBackground.ESPACE_VAISSEAU;
        }
    }
    if(config != undefined) {
      configMov = new ConfigMoveUser(config.hauteurSaut, config.millisecondeSaut, 
            config.millisecondeTomber, config.millisecondeDeplacement, 
            config.largeurDeplacement, config.millisecondeCoucou, config.largeurCoucou);
    }
    return configMov;
  }

  choixBackground(
    idBackground,
    taille,
    scrollMove = undefined,
    imgBack = undefined,
    imgBas = undefined
  ) {
    let configMov = this.choixMov();
    let config = undefined;
    switch (this.nbBackground) {
      case 0:
        if (this.tabConfigBackground != undefined) {
          config = this.tabConfigBackground.SOUS_TERRE;
        }
        return new BackgroundSousTerre(
          idBackground,
          taille,
          scrollMove,
          config,
          configMov,
          this.volumeEffet,
          imgBack,
          imgBas
        );

      case 1:
        if (this.tabConfigBackground != undefined) {
          config = this.tabConfigBackground.SOUS_MER;
        }
        return new BackgroundSousMer(
          idBackground,
          taille,
          scrollMove,
          config,
          configMov,
          this.volumeEffet,
          imgBack,
          imgBas
        );

      case 2:
        if (this.tabConfigBackground != undefined) {
          config = this.tabConfigBackground.TERRE;
        }
        return new BackgroundTerre(
          idBackground,
          taille,
          scrollMove,
          config,
          configMov,
          this.volumeEffet,
          imgBack,
          imgBas
        );

      case 3:
        if (this.tabConfigBackground != undefined) {
          config = this.tabConfigBackground.CIEL_NUAGE;
        }
        return new BackgroundCielNuages(
          idBackground,
          taille,
          scrollMove,
          config,
          configMov,
          this.volumeEffet,
          imgBack,
          imgBas
        );

      case 4:
        if (this.tabConfigBackground != undefined) {
          config = this.tabConfigBackground.CIEL_AVIONS;
        }
        return new BackgroundCielAvions(
          idBackground,
          taille,
          scrollMove,
          config,
          configMov,
          this.volumeEffet,
          imgBack,
          imgBas
        );

      case 5:
        if (this.tabConfigBackground != undefined) {
          config = this.tabConfigBackground.ESPACE_ASTEROIDE;
        }
        return new BackgroundEspaceSatellite(
          idBackground,
          taille,
          scrollMove,
          config,
          configMov,
          this.volumeEffet,
          imgBack,
          imgBas
        );

      case 6:
        if (this.tabConfigBackground != undefined) {
          config = this.tabConfigBackground.ESPACE_SATELLITE;
        }
        return new BackgroundEspaceAsteroide(
          idBackground,
          taille,
          scrollMove,
          config,
          configMov,
          this.volumeEffet,
          imgBack,
          imgBas
        );

      default:
        if (this.tabConfigBackground != undefined) {
          config = this.tabConfigBackground.ESPACE_VAISSEAU;
        }
        return new BackgroundEspaceVaisseau(
          idBackground,
          taille,
          scrollMove,
          config,
          configMov,
          this.volumeEffet,
          imgBack,
          imgBas
        );
    }
  }

  addBackground() {
    if(this.backgrounds.length < 2 || this.backgrounds[0].moveBack) {
      //if(this.nbscroll >= 1 || this.backgrounds.length < 2) {
      let screenGame = document.getElementById(this.idScreen);
      // permet d'ajouter un nouveau canvas tout en définissant sa taille
      let newcanvas = document.createElement("canvas");
      newcanvas.width = this.tailleBackground.x;
      newcanvas.height = this.tailleBackground.y;
      newcanvas.id = this.idBackground;
      //insère avant un nouveau canva et retourne le premier élément dans le screenGame
      screenGame.insertBefore(newcanvas, screenGame.querySelector("canvas"));
      let background = this.choixBackground(
        this.idBackground,
        this.tailleBackground,
        this.scrollMove
      );
      if (this.projectDev) {
        background.setProjectDev();
      }
      // ludovic (debut) : pour ajouter le joueur
      let posJoueur = new Position(
        this.tailleBackground.x / 2,
        -this.tailleBackground.y
      );
      if (this.backgrounds.length > 0) {
        let posJoueurRecup = this.backgrounds[this.backgrounds.length - 1].joueur
          .pos;
        posJoueur = new Position(
          posJoueurRecup.x,
          -this.tailleBackground.y + posJoueurRecup.y
        );
      } else if (this.backgrounds.length > 1) {
        let posJoueurRecup = this.backgrounds[this.backgrounds.length - 1].joueur
          .pos;
        posJoueur = new Position(
          posJoueurRecup.x - posJoueur.taille.x,
          -this.tailleBackground.y + posJoueurRecup.y + posJoueur.taille.y
        );
      }
      let addJoueur = this.setJoueur(
        posJoueur.x,
        posJoueur.y,
        this.tailleJoueur.x,
        this.tailleJoueur.y,
        background
      );
      addJoueur.keyGame(
        this.keySaut,
        this.keyGauche,
        this.keyDroite,
        this.keyCoucou
      );
      addJoueur.modifTenue(this.tenueJoueur);
      addJoueur.keyGameDev(this.keyHaut, this.keyBas);
      addJoueur.configSaut(
        this.hauteurSaut,
        this.millisecondeSaut,
        this.millisecondeTomber
      );
      addJoueur.configDeplacement(
        this.largeurDeplacement,
        this.millisecondeDeplacement
      );
      addJoueur.configCoucou(this.largeurCoucou, this.millisecondeCoucou);
      addJoueur.setBackground(background);
      addJoueur.configMoveUser(background.configMoveUser);
      background.setJoueur(addJoueur);

      // ludovic (fin) : pour ajouter le joueur
      this.backgrounds.push(background);
      this.createBackground();
      this.deleteBackground();
      this.backgrounds[0].scrollMove.monter();
      this.scrollMove.backgroundMove(this.backgrounds[0]);
      // ludovic (fin) : pour ajouter le joueur
    }
  }

  createBackground() {
    this.nbBackground++;
    this.idBackground = "background_game_" + this.nbBackground;
  }

  deleteBackground() {
    let screenGame = document.getElementById(this.idScreen);
    // console.log(screenGame);
    if (screenGame.childElementCount > 2) {
      this.backgrounds[0].scrollMove.debut();
      //this.scrollMove.debut();
      screenGame.removeChild(screenGame.lastChild);
      this.backgrounds.splice(0, 1);
      this.backgrounds[0].scrollMove.recalculPos();
    }
    if(this.backgrounds.lenght > 2) {
      this.backgrounds.splice(0, 1);
    }
    this.nbscroll = 0;
  }

  effetGameOver(){
    let effetGameOver = new EffetsSonores("son/gameOver.mp3", 100, true);
    effetGameOver.start();
  }

  setJoueurStopTomber(enumAction) {
    this.nbscroll++;
    const element = this.backgrounds[0];
    if (enumAction != undefined) {
      this.backgrounds[enumAction.background].plateformes[
        enumAction.collision.index
      ].effetSaut();
    }
    if(!element.valideTenue() && !this.isTtop) {
      this.effetGameOver();
      this.tuerJoueur(element.typeMortTenue());
    }
    if (!this.isTtop) {
      element.scrollMove.changeBackground();
      element.scrollMove.bottom();
    }
  }

  moveScrollAvecJoueur() {
    const element = this.backgrounds[0];
    element.scrollMove.monter();
    this.backgrounds[0].moveBack = true;
  }

  setJoueurPosition(pos) {
    this.setJoueurPositionXY(pos.x, pos.y);
  }

  setJoueurPositionXY(posX, posY) {
    this.backgrounds[0].joueur.setPositionXY(posX, posY);
    this.backgrounds[1].joueur.setPositionXY(
      posX,
      posY + this.backgrounds[1].taille.y
    );
    this.moveScrollAvecJoueur();
  }

  setJoueurPositionX(posX) {
    this.backgrounds[0].joueur.setPositionX(posX);
    this.backgrounds[1].joueur.setPositionX(posX);
    this.moveScrollAvecJoueur();
  }

  setJoueurPositionY(posY) {
    this.backgrounds[0].joueur.setPositionY(posY);
    this.backgrounds[1].joueur.setPositionY(
      posY + this.backgrounds[1].taille.y
    );
    this.moveScrollAvecJoueur();
  }

  getEnumCollision() {
    let enumCollision = this.backgrounds[0].joueur.getEnumCollision();
    if (enumCollision.enumCollision != EnumCollision.NULL) {
      this.backgrounds[0].joueur.configMoveUser(this.backgrounds[0].configMoveUser);
      this.backgrounds[1].joueur.configMoveUser(this.backgrounds[0].configMoveUser);
      this.getMoveAutoJoueur(this.backgrounds[0].plateformes[
        enumCollision.index
      ].deplacementImg);
      return { collision: enumCollision, background: 0 };
    }
    enumCollision = this.backgrounds[1].joueur.getEnumCollision();
    if (enumCollision.enumCollision != EnumCollision.NULL) {
      this.backgrounds[0].joueur.configMoveUser(this.backgrounds[1].configMoveUser);
      this.backgrounds[1].joueur.configMoveUser(this.backgrounds[1].configMoveUser);
      this.getMoveAutoJoueur(this.backgrounds[1].plateformes[
        enumCollision.index
      ].deplacementImg);
      return { collision: enumCollision, background: 1 };
    }
    return { collision: enumCollision, background: -1 };
  }

  getEnumCollisionGD() {
    let enumCollision = this.backgrounds[0].joueur.getEnumCollisionGD();
    if (enumCollision.enumCollision != EnumCollision.NULL) {
      this.backgrounds[0].joueur.configMoveUser(this.backgrounds[0].configMoveUser);
      this.backgrounds[1].joueur.configMoveUser(this.backgrounds[0].configMoveUser);
      this.getMoveAutoJoueur(this.backgrounds[0].plateformes[
        enumCollision.index
      ].deplacementImg);
      return { collision: enumCollision, background: 0 };
    }
    enumCollision = this.backgrounds[1].joueur.getEnumCollisionGD();
    if (enumCollision.enumCollision != EnumCollision.NULL) {
      this.backgrounds[0].joueur.configMoveUser(this.backgrounds[1].configMoveUser);
      this.backgrounds[1].joueur.configMoveUser(this.backgrounds[1].configMoveUser);
      this.getMoveAutoJoueur(this.backgrounds[1].plateformes[
        enumCollision.index
      ].deplacementImg);
      return { collision: enumCollision, background: 1 };
    }
    return { collision: enumCollision, background: -1 };
  }

  getMoveAutoJoueur(deplacement) {
    this.backgrounds[0].joueur.deplacementImg = deplacement;
    this.backgrounds[1].joueur.deplacementImg = deplacement;
  }

  setPosInitJoueur(posX, posY) {
    this.backgrounds[0].joueur.setPositionXY(posX, posY);
  }

  setJoueur(posX, posY, tailleX, tailleY, background) {
    let joueur = new Joueur(new Taille(tailleX, tailleY));
    joueur.setBackground(background);
    joueur.setPosition(new Position(posX, posY));
    joueur.setGame(this);
    return joueur;
  }

  tuerJoueur(enumTypeMort) {
    if (enumTypeMort != EnumTypeMort.NULL) {
      if (
        this.idTypeMort != undefined &&
        document.getElementById(this.idTypeMort) != undefined
      ) {
        document.getElementById(this.idTypeMort).value = enumTypeMort;
        document
          .getElementById(this.idTypeMort)
          .dispatchEvent(new Event("change"));
      }
      this.stop();
    }
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
        element.afficher();
      }
    }
  }

  eventKey(keyPress) {
    if (this.backgrounds[0].joueur != undefined) {
      if (keyPress == " ") {
        this.backgrounds[0].joueur.sauter();
      }
      this.backgrounds[0].joueur.choixMouvement(keyPress);
    }
  }

  start() {
    this.isTtop = false;
    this.score.start();
    this.scrollMove.start();
    if (this.backgrounds[0].joueur != undefined) {
      let classGame = this;
      document.body.addEventListener("keydown", (event) => {
        if (!classGame.isTtop) {
          this.backgrounds[0].joueur.choixMouvement(event.key);
        }
      });
    }

    let folderWorker0 = folderWorker;
    if (folderWorker0 == undefined) {
      folderWorker0 = "./js/worker/";
    }
    this.workerGame = new Worker(folderWorker0 + "workerScore.js");
    let classGame = this;
    this.workerGame.onmessage = function (e) {
      classGame.afficher();
    };
    this.workerGame.postMessage([this.milliseconde, true]);
  }

  stop() {
    this.isTtop = true;
    this.score.stop();
    this.scrollMove.stop();
    if (this.backgrounds[0] != undefined) {
      this.backgrounds[0].stop();
    }
    if (this.workerGame != undefined) {
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
    if (folderWorker0 == undefined) {
      folderWorker0 = "./js/worker/";
    }
    this.workerGame = new Worker(folderWorker0 + "workerScore.js");
    let classGame = this;
    this.workerGame.onmessage = function (e) {
      classGame.afficher();
    };
    this.workerGame.postMessage([this.milliseconde, true]);
  }

  screenBottom(pos) {
    this.backgrounds[0].screenBottom(pos);
  }

  collisionActionGameAll() {
    let enumCollision = this.getEnumCollisionGD();
    let valueCollision = enumCollision.collision;
    if (valueCollision.enumCollision != EnumCollision.NULL) {
      if (valueCollision.enumAction == EnumAction.MORT) {
        this.mourir(enumCollision);
      }
    }
  }
}
