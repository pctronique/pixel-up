class PlateformePiegesNacelles extends PlateformePiegeHaut{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,70);

    }
    typeMort() {
        return EnumTypeMort.NACELLECASSEE;
    }
    afficher(canvas){
        //this.img;
        this.imageSrc('./img/nacelle_piege.png');
        let piegesNacelles = new Images(this.img, this.pos, this.taille);
        piegesNacelles.setBackground(this.background);
        piegesNacelles.afficher(canvas);
    }
   
}