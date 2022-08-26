class PlateformeVaisseau extends PlateformeMobile{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,50);

    }

    typeMort() {
        return EnumTypeMort.VAISSEAU;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        this.imageSrc('./img/vaisseau2.png');
        this.createBorder(canvas);
        let vaisseau = new Images(this.img, this.pos, this.taille);
        vaisseau.setObjetDuplique(this);
        vaisseau.setBackground(this.background);
        vaisseau.afficher(canvas);
    }
   
}