class PlateformeVaisseau extends PlateformeMobile{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(60,20);

    }

    typeMort() {
        this.effetGameOver();
        return EnumTypeMort.VAISSEAU;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        this.imageSrc('./img/vaisseau2.png');
        this.createBorder(canvas);
        let vaisseau = new Images(this.img, new Position(this.pos.x-10, this.pos.y-15), new Taille(100,50));
        vaisseau.setObjetDuplique(this);
        vaisseau.setBackground(this.background);
        vaisseau.afficher(canvas);
    }
   
}