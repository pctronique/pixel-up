class PlateformeMobileAsteroide extends PlateformeMobile {
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
        this.taille = new Taille(85,40);

    }

    typeMort() {
        this.effetGameOver();
        return EnumTypeMort.ASTEROIDE;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        //this.imageSrc(this.allImage.recupImgData("plft_asteroide"));
        this.createBorder(canvas);
        let asteroide = new Images(this.allImage.recupImg("plft_asteroide"), new Position(this.pos.x-10, this.pos.y-12), new Taille(100,50));
        asteroide.setObjetDuplique(this);
        asteroide.setBackground(this.background);
        asteroide.afficher(canvas);
    }
   
}