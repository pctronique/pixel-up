class PlateformeHelicopteres extends PlateformePiegeHaut {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(0, 60);
        this.imgGif = new ImageGif(
          ["./img/helico3.png", "./img/helico6.png"],
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