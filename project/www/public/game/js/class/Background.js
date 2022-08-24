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
    this.tenue = undefined;
    this.imageSource = undefined;
    this.canvasBackground = undefined;
    this.pos = new Position(0, 0);
    this.widthBottom = 0;
    this.scrollMove = scrollMove;
    if(this.scrollMove != undefined) {
      this.scrollMove.setBackground(this);
    }
    this.creerPlatforme();
    this.creerPlatformeBottom(new Plateforme());
    this.creerPlatformeBottom(new Plateforme());
    this.creerPlateformeTenue();
  }
  imageSrc(src) {
    this.imageSource = src;
  }

  idSreenValue(idScreen) {
    this.idScreen = idScreen;
  }

  creerPlatformeBottom(screen_bottom) {
    let taille = new Taille(0, 20);
    let pos = new Position(0, this.taille.y - taille.y);
    this.screen_bottom = screen_bottom;
    if(this.screen_bottom != undefined) {
      this.screen_bottom.setTaille(taille);
      this.screen_bottom.setPosition(pos);
      this.screen_bottom.setBackground(this);
      this.tabAutrePlateforme.push(this.screen_bottom);
    }
  }
  


  creerPlateformeTenue(){
    let taille = new Taille(40, 40);
    let pos = new Position(0, this.taille.y - taille.y);
    this.tenue = new Tenue();
    if(this.tenue != undefined) {
      this.tenue.setTaille(taille);
      this.tenue.setPosition(pos);
      this.tenue.setBackground(this);
      this.tabAutrePlateforme.push(this.tenue);
    }
  }

  choixPlateforme(taille){
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
        this.plateformesCollision.push(new CollisionPlateforme(this.plateformes.length, posArete.haut(), posArete.bas(), posArete.gauche(), posArete.droite()) /*{
          id: this.plateformes.length,
          haut: posArete.haut(),
          bas: posArete.bas(),
          gauche: posArete.gauche(),
          droite: posArete.droite(),
        }*/);
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
    if(this.tenue != undefined) {
      this.tenue.setJoueur(this.joueur);
    }
  }

  deplacement() {}

  screenBottom(posBas) {
    let posBasScroll = -1 * posBas;
    this.widthBottom = 100 * (posBasScroll / 20);
    if(Math.round(this.widthBottom) > this.taille.x) {
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
    if(this.scrollMove != undefined) {
      /*console.log(this.scrollMove.calculMillieu());
      console.log(pos);
      console.log(taille);*/
      if(pos.y < (this.taille.y-150)) {
        console.log('#######################');
        this.scrollMove.monter(((this.taille.y-pos.y)/(this.taille.y*2))*100);
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
    this.canvasBackground = document.createElement("canvas");
    this.canvasBackground.id = this.idBackground;
    this.canvasBackground.width = this.taille.x;
    this.canvasBackground.height = this.taille.y;
    this.imgBackDisplay(this.canvasBackground);
  }

  afficherContenue() {
    for (let index = 0; index < this.plateformes.length; index++) {
      const element = this.plateformes[index];
      if (element != undefined) {
        element.afficher(this.canvasBackground);
      }
    };
    if (this.screen_bottom != undefined) {
      this.screen_bottom.afficher(this.canvasBackground);
    }
    if (this.tenue != undefined) {
      this.tenue.afficher(this.canvasBackground);
    }
    if (this.joueur != undefined) {
      this.joueur.afficher(this.canvasBackground);
    }
    let backGroundOld = document.getElementById(this.idBackground);
    backGroundOld.parentNode.replaceChild(this.canvasBackground, backGroundOld);
  }
}
