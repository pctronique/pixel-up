class PlateformeVaisseau extends PlateformeMobile{
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
        this.taille = new Taille(60,20);

    }

    typeMort() {
        this.effetGameOver();
        return EnumTypeMort.VAISSEAU;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        //this.imageSrc(this.allImage.recupImgData("plft_vaisseau_2"));
        this.createBorder(canvas);
        let vaisseau = new Images(this.allImage.recupImg("plft_vaisseau_2"), new Position(this.pos.x-10, this.pos.y-15), new Taille(100,50));
        vaisseau.setObjetDuplique(this);
        vaisseau.setBackground(this.background);
        vaisseau.afficher(canvas);
    }
   
}