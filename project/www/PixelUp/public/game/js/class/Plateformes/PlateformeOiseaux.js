class PlateformeOiseaux extends PlateformeMobile{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(50,10);
        this.deplacementImg = 1;
    }

    action(enumCollision) {
        if (enumCollision == EnumCollision.HAUT) {
            return EnumAction.STOP;
        }
        return EnumAction.NULL;
    }
    typeMort() {
        return EnumTypeMort.NULL;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        this.imageSrc('./img/oiseau.png');
        this.createBorder(canvas);
        let oiseaux = new Images(this.img, new Position(this.pos.x-25, this.pos.y-38), new Taille(100,50));
        oiseaux.setObjetDuplique(this);
        oiseaux.setBackground(this.background);
        oiseaux.afficher(canvas);
    }
   
}