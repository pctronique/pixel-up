class PlateformeLave extends PlateformePiegeHaut {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(0, 50);
        this.imgGif = new ImageGif(
            [
              "./img/Lave.png",
              "./img/Lave1.png",
            ],
            this.pos,
            this.taille
          );
          this.imgGif.start();
    }

    typeMort() {
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