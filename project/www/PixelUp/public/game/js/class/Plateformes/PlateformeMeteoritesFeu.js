class PlateformeMeteoritesFeu extends PlateformePiegeHaut {
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
        this.taille = new Taille(0, 55);
        this.imgGif = new ImageGif(
          [this.allImage.recupImg("plft_meteorite_4"), 
          this.allImage.recupImg("plft_meteorite_5")],
          this.pos,
          this.taille,
        );
        this.imgGif.setIsRepeat(true);
        this.imgGif.start();
    }

    typeMort() {
      this.effetGameOver();
        return EnumTypeMort.METEORITEFEU;
    }

    stop() {
      this.imgGif.stop();
    }

    afficher(canvas){
        this.createBorder(canvas);
        this.imgGif.setBackground(this.background);
        this.imgGif.pos = this.pos;
        this.imgGif.setTaille(this.taille);
        this.imgGif.afficher(canvas);
        //this.img;
        /*this.imageSrc('./img/meteorite2.png');
        this.createBorder(canvas);
        let meteoritesFeu = new Images(this.img, this.pos, this.taille);
        meteoritesFeu.setIsRepeat(true);
        meteoritesFeu.setBackground(this.background);
        meteoritesFeu.afficher(canvas);*/
    }
   
}