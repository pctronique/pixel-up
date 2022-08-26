class PlateformeOiseaux extends PlateformeMobile{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,50);
        this.deplacementImg = 1;
    }

    action(enumCollision) {
        if (enumCollision == EnumCollision.HAUT) {
            return EnumAction.STOP;
        }
        return EnumAction.NULL;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        this.imageSrc('./img/oiseau.png');
        this.createBorder(canvas);
        let oiseaux = new Images(this.img, this.pos, this.taille);
        oiseaux.setObjetDuplique(this);
        oiseaux.setBackground(this.background);
        oiseaux.afficher(canvas);
    }
   
}