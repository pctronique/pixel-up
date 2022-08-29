class PlateformeNacelles extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(65,20);

    }
    typeMort() {
        return EnumTypeMort.NULL;
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/nacelle.png');
        this.createBorder(canvas);
        let nacelles = new Images(this.img, new Position(this.pos.x-20, this.pos.y-27), new Taille(100,70));
        nacelles.setObjetDuplique(this);
        nacelles.setBackground(this.background);
        nacelles.afficher(canvas);
    }
   
}