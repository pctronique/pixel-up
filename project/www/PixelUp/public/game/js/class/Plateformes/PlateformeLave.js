class PlateformeLave extends PlateformePiegeHaut {
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
        this.taille = new Taille(0, 50);
        this.imgGif = new ImageGif(
            [
                this.allImage.recupImg("plft_lave"),
                this.allImage.recupImg("plft_lave_1"),
            ],
            this.pos,
            this.taille
          );
          this.imgGif.start();
    }

    typeMort() {
        this.effetGameOver();
        return EnumTypeMort.LAVE;
    }

    afficher(canvas){
        this.createBorder(canvas);
        this.imgGif.setBackground(this.background);
        this.imgGif.pos = this.pos;
        this.imgGif.taille = this.taille;
        this.imgGif.afficher(canvas);
    }
   
}