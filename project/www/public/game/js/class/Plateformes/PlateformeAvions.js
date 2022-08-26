class PlateformeAvions extends PlateformePiegeCote {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,50);
        this.deplacementImg = 1;
    }

    typeMort() {
        return EnumTypeMort.AVION;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        this.imageSrc('./img/avion_pixel-remove1.png');
        this.createBorder(canvas);
        let avions = new Images(this.img, this.pos, this.taille);
        avions.setObjetDuplique(this);
        avions.setBackground(this.background);
        avions.afficher(canvas);
    }
   
}