class PlateformeMobileAsteroide extends PlateformeMobile {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(85,40);

    }

    typeMort() {
        return EnumTypeMort.ASTEROIDE;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        this.imageSrc('./img/asteroide.png');
        this.createBorder(canvas);
        let asteroide = new Images(this.img, new Position(this.pos.x-10, this.pos.y-12), new Taille(100,50));
        asteroide.setObjetDuplique(this);
        asteroide.setBackground(this.background);
        asteroide.afficher(canvas);
    }
   
}