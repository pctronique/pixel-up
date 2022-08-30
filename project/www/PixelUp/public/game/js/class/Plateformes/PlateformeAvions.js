class PlateformeAvions extends PlateformePiegeCote {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(80,20);
        this.deplacementImg = 1;
    }

    typeMort() {
        this.effetGameOver();
        return EnumTypeMort.AVION;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        this.imageSrc('./img/avion_pixel-remove1.png');
        this.createBorder(canvas);
        let avions = new Images(this.img, new Position(this.pos.x-16, this.pos.y-15), new Taille(100,50));
        avions.setObjetDuplique(this);
        avions.setBackground(this.background);
        avions.afficher(canvas);
    }
   
}