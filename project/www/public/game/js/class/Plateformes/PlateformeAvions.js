class PlateformeAvions extends PlateformePiegeCote {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,50);

    }

    typeMort() {
        return EnumTypeMort.TOMBER;
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/avion_pixel-remove1.png');
        let avions = new Images(this.img, this.pos, this.taille);
        avions.setBackground(this.background);
        avions.afficher(canvas);
    }
   
}