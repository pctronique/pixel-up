class Background {
  constructor(idBackground, taille, scrollMove = undefined, imgBack = undefined, imgBas = undefined) {
    this.taille = taille;
    this.imgBack = imgBack;
    this.imgBas = imgBas;
    this.joueur = undefined;
    this.idBackground = idBackground;
    this.plateformes = [];
    this.plateformesCollision = [];
    this.screen_bottom = undefined;
    this.tenue = undefined;
    this.imageSource = undefined;
    this.pos = new Position(0, 0);
    this.widthBottom = 0;
    this.scrollMove = scrollMove;
    if(this.scrollMove != undefined) {
      this.scrollMove.setBackground(this);
    }
    this.creerPlatforme();
    this.creerPlatformeBottom(new Plateforme());
    this.creerPlatformeBottom(new PlateformeFeu());
    //this.creerPlateformeTenue();
  }
  imageSrc(src) {
    this.imageSource = src;
  }

  idSreenValue(idScreen) {
    this.idScreen = idScreen;
  }

  creerPlatformeBottom(screen_bottom) {
    let taille = new Taille(0, 200);
    let pos = new Position(0, this.taille.y - taille.y);
    this.screen_bottom = screen_bottom;
    if(this.screen_bottom != undefined) {
      this.screen_bottom.setTaille(taille);
      this.screen_bottom.setPosition(pos);
      this.screen_bottom.setBackground(this);
    }
  }
  /*creerPlateformeTenue(){
    let taille = new Taille(20, 20);
    let pos = new Position(0, this.taille.y - taille.y);
    this.tenue = new Tenue();
    if(this.tenue != undefined) {
      this.tenue.setTaille(taille);
      this.tenue.setPosition(pos);
      this.tenue.setBackground(this);
    }
  }*/
  creerPlatforme() {
    let defaultHauteur = 70;
    let startHauteur = defaultHauteur;
    while (startHauteur < this.taille.y) {
      let nombreDeLignes = 0;
      let posPlateforme = 0;
      while (posPlateforme < this.taille.x) {
        let objRndPos = new RndPos(posPlateforme, 0);
        let taille = new Taille(50, 10);
        let plateforme = new Plateforme(taille);
        if (nombreDeLignes == 0) {
          objRndPos.minMax(2, 52);
          posPlateforme += objRndPos.getX();
        } else {
          objRndPos.minMax(70, 102);
          posPlateforme += objRndPos.getX();
          posPlateforme += taille.getX();
        }
        let pos = new Position(posPlateforme, this.taille.y - startHauteur);
        plateforme.setPosition(pos);
        plateforme.setBackground(this);
        let posArete = plateforme.getAreteRectangle();
        this.plateformesCollision.push({
          id: this.plateformes.length,
          haut: posArete.haut(),
          bas: posArete.bas(),
          gauche: posArete.gauche(),
          droite: posArete.droite(),
        });
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
    let pos = new Position(0, (this.taille.y + posBas - this.screen_bottom.taille.y)+20);
    this.screen_bottom.setPosition(pos);
  }

  getPlateformes() {
    return this.plateformes;
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

  afficher() {
    let background = document.getElementById(this.idBackground);
    let ctx = background.getContext("2d");
    ctx.fillStyle = "#EBDEF0";
    ctx.fillRect(0, 0, this.taille.x, this.taille.y);
    this.plateformes.forEach((element) => {
      if (element != undefined) {
        element.setCanvasBackground(this.idBackground);
        element.afficher();
      }
    });
    if (this.screen_bottom != undefined) {
      this.screen_bottom.setCanvasBackground(this.idBackground);
      this.screen_bottom.afficher();
    }
   /* if (this.tenue != undefined) {
      this.tenue.setCanvasBackground(this.idBackground);
      this.tenue.afficher();
    }*/
    if (this.joueur != undefined) {
      this.joueur.setCanvasBackground(this.idBackground);
      this.joueur.afficher();
    }
  }
}
