class PlateformeMobileRequin extends PlateformePiegeCote {
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
        this.taille = new Taille(85,30);
        this.deplacementImg = 1;
    }

    typeMort() {
        this.effetGameOver();
        return EnumTypeMort.REQUIN;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        //this.imageSrc(this.allImage.recupImgData("plft_requin_2"));
        this.createBorder(canvas);
        let requin = new Images(this.allImage.recupImg("plft_requin_2"), new Position(this.pos.x-25, this.pos.y-32), new Taille(120,80));
        requin.setObjetDuplique(this);
        requin.setBackground(this.background);
        requin.afficher(canvas);
    }
   
}