class Background {
  constructor(idBackground, taille, scrollMove = undefined, imgBack = undefined, imgBas = undefined) {
    this.taille = taille;
    this.imgBack = imgBack;
    this.imgBas = imgBas;
    this.joueur = undefined;
    this.idBackground = idBackground;
    this.plateformes = [];
    this.tabAutrePlateforme = [];
    this.plateformesCollision = [];
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
    
    if (this.scrollMove != undefined) {
      this.scrollMove.setBackground(this);
    }
    this.creerPlatforme();
    this.creerPlatformeBottom(new Plateforme());

    //this.creerPlateformeTenue(new Tenue());
  }
  imageSrc(src) {
    this.imageSource = src;
  }

  idSreenValue(idScreen) {
    this.idScreen = idScreen;
  }

  creerPlateformePourTenue(plateformePourTenue){

    
    this.plateformePourTenue = plateformePourTenue;
    let pos = new Position(this.taille.x - this.plateformePourTenue.taille.x, this.plateformePourTenue.taille.y);
    if (this.plateformePourTenue != undefined) {
      this.plateformePourTenue.setPosition(pos);
      this.plateformePourTenue.setBackground(this);
      this.tabAutrePlateforme.push(this.plateformePourTenue);
    }
  }
  creerPlatformeBottom(screen_bottom) {
    let taille = new Taille(0, 20);
    let pos = new Position(0, this.taille.y - taille.y);
    this.screen_bottom = screen_bottom;
    if (this.screen_bottom != undefined) {
      //this.screen_bottom.setTaille(taille);
      this.screen_bottom.setPosition(pos);
      this.screen_bottom.setBackground(this);
      this.tabAutrePlateforme.push(this.screen_bottom);
    }
  }

  creerPlateformeTenue(tenue) {
    if (tenue != undefined) {
      let taille = new Taille(40, 40);
      let pos = new Position(this.taille.x - taille.x - 60, taille.y - 10);
      this.tenue = tenue;
      this.tenue.setTaille(taille);
      this.tenue.setPosition(pos);
      this.tenue.setBackground(this);
      this.tabAutrePlateforme.push(this.tenue);

    }
  }

  choixPlateforme(taille) {
    return new Plateforme(taille);
  }
  /**
   * creation et placement des plateformes position x et y en aleatoire (lien avec la class RndPos.js) avec definition ecart de la hauteur entre plateformes y et definition largeur espacement des plateformes x entre elle.
   */
  creerPlatforme() {
    let defaultHauteur = 70; //hauteur espacement initiale interligne y entre 2 plateformes 
    let startHauteur = defaultHauteur;
    while (startHauteur < this.taille.y) {
      let nombreDeLignes = 0;
      let posPlateforme = 0;
      while (posPlateforme < this.taille.x) {
        let objRndPos = new RndPos(posPlateforme, 0); //creation aleatoire position de la nouvelle platemeforme en x
        let taille = new Taille(50, 10);
        let plateforme = this.choixPlateforme(taille);
        if (nombreDeLignes == 0) {
          objRndPos.minMaxX(2, 52);
          posPlateforme += objRndPos.getX();
        } else {
          objRndPos.minMaxX(70, 102);
          posPlateforme += objRndPos.getX();
          posPlateforme += taille.getX();
        }

        objRndPos.minMaxY(10, 70); // position y en aleatoire
        let posPlateformeY = objRndPos.getY();
        let pos = new Position(posPlateforme, this.taille.y - (startHauteur + posPlateformeY));
        plateforme.setPosition(pos);
        plateforme.setBackground(this);
        let posArete = plateforme.getAreteRectangle(); //creation rectangle plateforme
        this.plateformesCollision.push(
          new CollisionPlateforme(
            this.plateformes.length,
            posArete.haut(),
            posArete.bas(),
            posArete.gauche(),
            posArete.droite()));
        this.plateformes.push(plateforme);
        nombreDeLignes++;
      }
      startHauteur += defaultHauteur;
    }

    let pos = new Position(0, this.taille.y - 1);
    let taille = new Taille(this.taille.x, 10);
    let plateforme = new Plateforme(taille);
    plateforme.setPosition(pos);
    plateforme.setBackground(this);
    this.plateformes.push(plateforme);
  }

  getTaille() {
    return this.taille;
  }

  setJoueur(joueur) {
    this.joueur = joueur;
    if (this.tenue != undefined) {
      this.tenue.setJoueur(this.joueur);
      this.joueur.setBackground(this);
    }
  }

  deplacement() { }

  screenBottom(posBas) {
    let posBasScroll = -1 * posBas;
    this.widthBottom = 100 * (posBasScroll / 20);
    if (Math.round(this.widthBottom) > this.taille.x) {
      this.widthBottom = this.taille.x;
    }
    //if (this.widthBottom <= this.taille.x) {     //pour augmenter en largeur progressivement le feu selon la hauteur du scroll
    let taille = new Taille(this.widthBottom, this.screen_bottom.taille.y);
    this.screen_bottom.setTaille(taille);
    //}
    let pos = new Position(0, (this.taille.y + posBas - this.screen_bottom.taille.y));
    this.screen_bottom.setPosition(pos);
  }

  getPlateformes() {
    return this.plateformes;
  }

  getAutrePlateformes() {
    return this.tabAutrePlateforme;
  }

  getPlateformesCollision() {
    return this.plateformesCollision;
  }

  posPersonnage(pos, taille) {
    if (this.scrollMove != undefined) {
      /*console.log(this.scrollMove.calculMillieu());
      console.log(pos);
      console.log(taille);*/
      if (pos.y < (this.taille.y - 150)) {
        console.log('#######################');
        this.scrollMove.monter(((this.taille.y - pos.y) / (this.taille.y * 2)) * 100);
      }
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
    } else if (this.nbDisplayOther == 0) {
      this.nbDisplayOther++;
      if (this.screen_bottom != undefined) {
        this.screen_bottom.afficher(this.canvasBackground);
      } else {
        this.afficherContenue();
      }
    } else if (this.nbDisplayOther == 2) {
      this.nbDisplayOther++;
      if (this.tenue != undefined) {
        this.tenue.afficher(this.canvasBackground);
      } else {
        this.afficherContenue();
      }
    }  else if (this.nbDisplayOther == 1) {
      this.nbDisplayOther++;
      if (this.plateformePourTenue != undefined) {
        this.plateformePourTenue.afficher(this.canvasBackground);
      } else {
        this.afficherContenue();
      }
    } else if (this.nbDisplayOther == 3) {
      this.nbDisplayOther++;
      if (this.joueur != undefined) {
        this.joueur.afficher(this.canvasBackground);
      } else {
        this.afficherContenue();
      }
    }else if (this.nbDisplayOther == 4) {
      let backGroundOld = document.getElementById(this.idBackground);
      let ctx = backGroundOld.getContext('2d');
      ctx.clearRect(0, 0, this.taille.x, this.taille.y);
      backGroundOld.parentNode.replaceChild(this.canvasBackground, backGroundOld);
      this.stopDisplay = true;
    }
  }
}
