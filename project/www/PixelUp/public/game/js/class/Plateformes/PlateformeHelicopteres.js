class PlateformeHelicopteres extends PlateformePiegeHaut {
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
        this.taille = new Taille(0, 60);
        this.imgGif = new ImageGif(
          [this.allImage.recupImg("plft_helico_3"), 
          this.allImage.recupImg("plft_helico_6")],
          this.pos,
          this.taille,
        );
        this.imgGif.setIsRepeat(true);
        this.imgGif.start();
    }

    typeMort() {
      this.effetGameOver();
        return EnumTypeMort.HELICOPTERE;
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
        /*this.imageSrc('./img/helico2.png');
        this.createBorder(canvas);
        let helicopteres = new Images(this.img, this.pos, this.taille);
        helicopteres.setIsRepeat(true);
        helicopteres.setBackground(this.background);
        helicopteres.afficher(canvas);*/
    }
   
}