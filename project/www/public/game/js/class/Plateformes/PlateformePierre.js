class PlateformePierre extends Plateforme {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(120,50);
    }
    typeMort() {
        return EnumTypeMort.PIERRE;
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/pierreBackground.png');
        this.createBorder(canvas);
        let pierre = new Images(this.img, this.pos, this.taille);
        pierre.setObjetDuplique(this);
        pierre.setBackground(this.background);
        pierre.afficher(canvas);
    }
   
}