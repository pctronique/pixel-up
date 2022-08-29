class PlateformeFeu extends PlateformePiegeHaut {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(0, 100);
        this.imgGif = new ImageGif(
            [
              "./img/flamme-1.png",
              "./img/flamme-2.png",
            ],
            this.pos,
            this.taille
          );
          this.imgGif.start();
    }

    typeMort() {
      this.effetGameOver();
        return EnumTypeMort.FEU;
    }

    stop() {
      this.imgGif.stop();
    }

    afficher(canvas){
      this.createBorder(canvas);
        this.imgGif.setBackground(this.background);
        this.imgGif.pos = this.pos;
        this.imgGif.taille = this.taille;
        this.imgGif.afficher(canvas);
        //this.img;

        /*this.imageSrc('./img/flamme.png');

        let feu = new Images(this.img, this.pos, this.taille);
        feu.setBackground(this.background);
        feu.afficher(canvas);*/
    }
   
}