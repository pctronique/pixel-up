class PlateformeVaisseau extends PlateformeMobile{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,50);

    }

    typeMort() {
        return EnumTypeMort.TOMBER;
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/vaisseau2.png');
        let vaisseau = new Images(this.img, this.pos, this.taille);
        vaisseau.setBackground(this.background);
        vaisseau.afficher(canvas);
    }
   
}