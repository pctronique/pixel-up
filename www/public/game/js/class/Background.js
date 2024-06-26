class Background {
  constructor(
    idBackground,
    taille,
    scrollMove = undefined,
    tabConfig = undefined,
    configMoveUser = undefined,
    volumeEffet =100,
    imgBack = undefined,
    imgBas = undefined
  ) {
    this.volumeEffet = volumeEffet;
    this.configMoveUser = configMoveUser;
    this.taille = taille;
    this.imgBack = imgBack;
    this.imgBas = imgBas;
    this.joueur = undefined;
    this.idBackground = idBackground;
    this.plateformes = [];
    this.tabAutrePlateforme = [];
    //this.plateformesCollision = [];
    this.screen_bottom = undefined;
    this.plateformePourTenue = undefined;
    this.tenue = undefined;
    this.imageSource = undefined;
    this.canvasBackground = undefined;
    this.pos = new Position(0, 0);
    this.widthBottom = 0;
    this.scrollMove = scrollMove;
    this.nbDisplayPlt = 0;
    this.nbDisplayOther = 0;
    this.stopDisplay = true;
    this.projectDev = false;
    this.minX = 70;
    this.maxX = 102;
    this.minY = 10;
    this.maxY = 70;
    this.nbPgLine = -1;
    this.nbPgSepareLine = -1;
    this.nbPgTotal = -1;
    this.isPiege = false;
    this.stopPg = false;
    this.tenueBackground = undefined;
    this.moveBack = false;
    if (tabConfig == undefined) {
      this.creerPlatforme(50, 300, 25, 80);
    } else {
      this.nbPgLine = tabConfig.nbPiege.nbPgLine;
      this.nbPgSepareLine = tabConfig.nbPiege.nbPgSepareLine;
      this.nbPgTotal = tabConfig.nbPiege.nbPgTotal;
      this.creerPlatforme(
        tabConfig.minX,
        tabConfig.maxX,
        tabConfig.minY,
        tabConfig.maxY
      );
    }
    this.creerPlatforme();
    //this.creerPlatformeBottom(undefined);//new PlateformePiegeHaut());
    this.creerPlateformeTenue(undefined, undefined);
  }

  setTenueBackground(tenue) {
    this.tenueBackground = tenue;
  }

  valideTenue() {
    return this.tenueBackground == this.joueur.tenue || this.tenueBackground == this.joueur.tenueOld;
  }

  typeMortTenue() {
    //this.moveBack = false;
    return EnumTypeMort.NULL;
  }

  setProjectDev() {
    this.projectDev = true;
    for (let index = 0; index < this.tabAutrePlateforme.length; index++) {
      const element = this.tabAutrePlateforme[index];
      element.setProjectDev();
    }
    for (let index = 0; index < this.plateformes.length; index++) {
      const element = this.plateformes[index];
      element.setProjectDev();
    }
  }

  typeClass() {
    return "background";
  }

  imageSrc(src) {
    this.imageSource = src;
  }

  idSreenValue(idScreen) {
    this.idScreen = idScreen;
  }

  creerPlateformePourTenue(
    plateformePourTenue,
    posPlateforme = new Position(0, 0)
  ) {
    this.plateformePourTenue = plateformePourTenue;
    let pos = new Position(
      this.taille.x - this.plateformePourTenue.taille.x + posPlateforme.x,
      this.plateformePourTenue.taille.y + posPlateforme.y
    );
    if (this.plateformePourTenue != undefined) {
      this.plateformePourTenue.volume = this.volumeEffet;
      this.plateformePourTenue.setBackground(this);
      this.plateformePourTenue.setPosition(pos);
      if (this.projectDev) {
        this.plateformePourTenue.setProjectDev();
      }
      this.tabAutrePlateforme.push(this.plateformePourTenue);
    }
  }

  creerPlatformeBottom(screen_bottom) {
    let taille = new Taille(0, 20);
    let pos = new Position(0, this.taille.y - taille.y);
    this.screen_bottom = screen_bottom;
    if (this.screen_bottom != undefined) {
      //this.screen_bottom.setTaille(taille);
      this.screen_bottom.volume = this.volumeEffet;
      this.screen_bottom.setBackground(this);
      this.screen_bottom.setPosition(pos);
      if (this.projectDev) {
        this.screen_bottom.setProjectDev();
      }
      this.tabAutrePlateforme.push(this.screen_bottom);
    }
  }
  
  creerPlateformeTenue(tenue) {
    if (tenue != undefined) {
      let taille = new Taille(40, 40);
      let pos = new Position(this.taille.x - taille.x - 60, taille.y - 10);
      //let pos = new Position(0, this.taille.y - 40);
      this.tenue = tenue;
      this.tenue.volume = this.volumeEffet;
      this.tenue.setTaille(taille);
      this.tenue.setBackground(this);
      this.tenue.setPosition(pos);
      if (this.projectDev) {
        this.tenue.setProjectDev();
      }
      this.tabAutrePlateforme.push(this.tenue);
    }
  }

  choixPlateforme() {
    return new Plateforme();
  }

  /**
   * creation et placement des plateformes position x et y en aleatoire (lien avec la class RndPos.js) avec definition ecart de la hauteur entre plateformes y et definition largeur espacement des plateformes x entre elle.
   */
  creerPlatforme(minX, maxX, minY, maxY) {
    this.minX = minX;
    this.maxX = maxX;
    this.minY = minY;
    this.maxY = maxY;
    this.plateformes = [];
    this.plateformesCollision = [];
    let defaultHauteur = this.maxY; //hauteur espacement initiale interligne y entre 2 plateformes
    let startHauteur = defaultHauteur;
    let countPg = 0;
    let countPgLine = 0;
    let countOldPgLine = 0;
    let nbLine = 0;
    while (startHauteur < this.taille.y) {
      this.stopPg = true;
      if(this.nbPgSepareLine != -1) {
        countPgLine = Math.floor(nbLine/this.nbPgSepareLine);
        if(countPgLine != countOldPgLine) {
          countOldPgLine = countPgLine;
          this.stopPg = false;
        }
      } else {
        this.stopPg = false;
      }
      countPgLine=0;
      let nombreDeLignes = 0;
      let posPlateforme = 0;
      while (posPlateforme < this.taille.x) {
          if(this.nbPgTotal != -1 && !this.stopPg) {
            if(countPg>=this.nbPgTotal) {
              this.stopPg = true;
            }
          }
          if(this.nbPgLine != -1 && !this.stopPg) {
            if(countPgLine>=this.nbPgLine) {
              this.stopPg = true;
            }
          }
        let objRndPos = new RndPos(posPlateforme, 0); //creation aleatoire position de la nouvelle platemeforme en x
        // let taille = new Taille(50, 10);
        let plateforme = this.choixPlateforme();
        plateforme.volume = this.volumeEffet;
        if(plateforme.piege) {
          countPg++;
          countPgLine++;
        }
        if (nombreDeLignes == 0) {
          objRndPos.minMaxX(0, this.maxX - this.minX);
          posPlateforme += objRndPos.getX();
        } else {
          objRndPos.minMaxX(this.minX, this.maxX);
          posPlateforme += objRndPos.getX();
          posPlateforme += plateforme.taille.getX();
        }

        objRndPos.minMaxY(this.minY, this.maxY); // position y en aleatoire
        let posPlateformeY = objRndPos.getY();
        let calculPosY = this.taille.y - (startHauteur + posPlateformeY);
        if (calculPosY > 20) {
          let pos = new Position(
            posPlateforme,
            this.taille.y - (startHauteur + posPlateformeY)
          );
          plateforme.setBackground(this);
          plateforme.setPosition(pos);
          if (this.projectDev) {
            plateforme.setProjectDev();
          }
          this.plateformes.push(plateforme);
        }
        nombreDeLignes++;
      }
      nbLine++;
      startHauteur += defaultHauteur;
    }
  }

  getTaille() {
    return this.taille;
  }

  setJoueur(joueur) {
    this.joueur = joueur;
    this.joueur.setBackground(this);
    this.joueur.setPosition(this.joueur.pos);
    this.joueur.setTabPlateforme(this.plateformes);
    this.joueur.setAutrePlateforme(this.tabAutrePlateforme);
    if (this.projectDev) {
      this.joueur.setProjectDev();
    }
    if (this.tenue != undefined) {
      this.tenue.setJoueur(this.joueur);
    }
  }

  stop() {
    this.joueur.stop();
    if (this.tenue != undefined) {
      this.tenue.stop();
    }
    if (this.screen_bottom != undefined) {
      this.screen_bottom.stop();
    }
    for (let index = 0; index < this.plateformes.length; index++) {
      const element = this.plateformes[index];
      element.stop();
    }
  }

  deplacement() {}

  screenBottom(posBas) {
    if (this.screen_bottom != undefined) {
      let posBasScroll = -1 * posBas;
      let positionHaut =
        this.taille.x - (posBasScroll + this.screen_bottom.taille.y);
      //console.log(positionHaut);
      if (positionHaut >= 0) {
        this.widthBottom = 100 * (posBasScroll / 20);
        if (Math.round(this.widthBottom) > this.taille.x) {
          this.widthBottom = this.taille.x;
        }
        //if (this.widthBottom <= this.taille.x) {     //pour augmenter en largeur progressivement le feu selon la hauteur du scroll
        let taille = new Taille(this.widthBottom, this.screen_bottom.taille.y);
        this.screen_bottom.setTaille(taille);
        //}
        let pos = new Position(
          0,
          this.taille.y + posBas - this.screen_bottom.taille.y
        );
        this.screen_bottom.setPosition(pos);
      } else {
        this.screen_bottom.setPosition(0);
      }
    }
  }

  getPlateformes() {
    return this.plateformes;
  }

  getAutrePlateformes() {
    return this.tabAutrePlateforme;
  }

  /*getPlateformesCollision() {
    return this.plateformesCollision;
  }*/

  posPersonnage(pos, taille) {
    if (this.scrollMove != undefined) {
      /*console.log(this.scrollMove.calculMillieu());
      console.log(pos);
      console.log(taille);*/
      //console.log(pos.y-pos.y/this.scrollMove.taillePixel());
    }
  }

  imgBackDisplay(canvas) {
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#EBDEF0";
    ctx.fillRect(0, 0, this.taille.x, this.taille.y);
    this.afficherContenue();
  }

  afficher() {
    if (this.stopDisplay) {
      this.stopDisplay = false;
      this.nbDisplayPlt = 0;
      this.nbDisplayOther = 0;
      this.canvasBackground = document.createElement("canvas");
      this.canvasBackground.id = this.idBackground;
      this.canvasBackground.width = this.taille.x;
      this.canvasBackground.height = this.taille.y;
      this.imgBackDisplay(this.canvasBackground);
    }
  }

  afficherContenue() {
    if (this.nbDisplayPlt < this.plateformes.length) {
      const element = this.plateformes[this.nbDisplayPlt];
      this.nbDisplayPlt++;
      if (element != undefined) {
        element.afficher(this.canvasBackground);
      }
    } else if (this.nbDisplayOther == 2) {
      this.nbDisplayOther++;
      if (this.screen_bottom != undefined) {
        this.screen_bottom.afficher(this.canvasBackground);
      } else {
        this.afficherContenue();
      }
    } else if (this.nbDisplayOther == 1) {
      this.nbDisplayOther++;
      if (this.tenue != undefined) {
        this.tenue.afficher(this.canvasBackground);
      } else {
        this.afficherContenue();
      }
    } else if (this.nbDisplayOther == 0) {
      this.nbDisplayOther++;
      if (this.plateformePourTenue != undefined) {
        this.plateformePourTenue.afficher(this.canvasBackground);
      } else {
        this.afficherContenue();
      }
    } else if (this.nbDisplayOther == 3) {
      this.nbDisplayOther++;
      this.joueur.game.collisionActionGameAll();
      if (this.joueur != undefined) {
        this.joueur.afficher(this.canvasBackground);
      } else {
        this.afficherContenue();
      }
    } else if (this.nbDisplayOther == 4) {
      /*this.nbDisplayOther++;
      let platTest = new PlateformePiegesNuages();
      platTest.setBackground(this)
      platTest.setProjectDev();
      platTest.setPosition(new Position(0, this.taille.y-200));
      platTest.afficher(this.canvasBackground);
      //this.afficherContenue();
    } else if (this.nbDisplayOther == 5) {*/
      let backGroundOld = document.getElementById(this.idBackground);
      if(backGroundOld != undefined) {
        let ctx = backGroundOld.getContext("2d");
        ctx.clearRect(0, 0, this.taille.x, this.taille.y);
        backGroundOld.parentNode.replaceChild(
          this.canvasBackground,
          backGroundOld
        );
      }
      this.stopDisplay = true;
    }
  }
}
