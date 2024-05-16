class PlateformePierre extends Plateforme {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        //this.taille = new Taille(120,50);
        this.taille = new Taille(60,35);
    }
    typeMort() {
        return EnumTypeMort.NULL;
    }

    action(enumCollision) {
        if(enumCollision == EnumCollision.HAUT) {
            this.effetPas();
            return EnumAction.STOP;
        }
        return EnumAction.NULL;
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/pierreBackground.png');
        this.createBorder(canvas);
        //let pierre = new Images(this.img, this.pos, this.taille);
        let pierre = new Images(this.img, new Position(this.pos.x-40, this.pos.y-15), new Taille(120,50));
        pierre.setObjetDuplique(this);
        pierre.setBackground(this.background);
        pierre.afficher(canvas);
    }
   
}