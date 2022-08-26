class PlateformeVaisseauJaune extends PlateformeMobile{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,50);
        this.deplacementImg = 1;
    }

    typeMort() {
        return EnumTypeMort.TOMBER;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        this.imageSrc('./img/vaisseau_jaune.png');
        this.createBorder(canvas);
        let vaisseauJaune = new Images(this.img, this.pos, this.taille);
        vaisseauJaune.setObjetDuplique(this);
        vaisseauJaune.setBackground(this.background);
        vaisseauJaune.afficher(canvas);
    }
   
}