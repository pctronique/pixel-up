class PlateformeNacelles extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,70);

    }
    typeMort() {
        return EnumTypeMort.NACELLE;
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/nacelle.png');
        this.createBorder(canvas);
        let nacelles = new Images(this.img, this.pos, this.taille);
        nacelles.setObjetDuplique(this);
        nacelles.setBackground(this.background);
        nacelles.afficher(canvas);
    }
   
}