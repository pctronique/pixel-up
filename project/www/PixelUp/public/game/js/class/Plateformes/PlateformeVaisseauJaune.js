class PlateformeVaisseauJaune extends PlateformeMobile{
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
        this.taille = new Taille(100,50);
        this.deplacementImg = 1;
    }

    typeMort() {
        this.effetGameOver();
        return EnumTypeMort.VAISSEAUJAUNE;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        //this.imageSrc(this.allImage.recupImgData("plft_vaisseau_jaune"));
        this.createBorder(canvas);
        let vaisseauJaune = new Images(this.allImage.recupImg("plft_vaisseau_jaune"), this.pos, this.taille);
        vaisseauJaune.setObjetDuplique(this);
        vaisseauJaune.setBackground(this.background);
        vaisseauJaune.afficher(canvas);
    }
   
}