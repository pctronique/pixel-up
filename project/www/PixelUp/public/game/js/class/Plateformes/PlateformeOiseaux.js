class PlateformeOiseaux extends PlateformeMobile{
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
        this.taille = new Taille(40,10);
        this.imgGif = new ImageGif(
          [this.allImage.recupImg("plft_oiseau_1"), 
          this.allImage.recupImg("plft_oiseau_2")],
          this.pos,
          new Taille(100,50),
        );
        this.imgGif.setIsRepeat(true);
        this.imgGif.start();
        this.deplacementImg = 1;
    }

    action(enumCollision) {
        if (enumCollision == EnumCollision.HAUT) {
          this.effetPas();
            return EnumAction.STOP;
        }
        return EnumAction.NULL;
    }
    typeMort() {
        return EnumTypeMort.NULL;
    }

    stop() {
      this.imgGif.stop();
    }

    afficher(canvas){
        this.deplacement();
        this.createBorder(canvas);
          this.imgGif.setBackground(this.background);
          this.imgGif.pos = new Position(this.pos.x-28, this.pos.y-38);
          this.imgGif.afficher(canvas);
        //this.img;
        /*this.imageSrc('./img/oiseau.png');
        this.createBorder(canvas);
        let oiseaux = new Images(this.img, new Position(this.pos.x-25, this.pos.y-38), new Taille(100,50));
        oiseaux.setObjetDuplique(this);
        oiseaux.setBackground(this.background);
        oiseaux.afficher(canvas);*/
    }
   
}