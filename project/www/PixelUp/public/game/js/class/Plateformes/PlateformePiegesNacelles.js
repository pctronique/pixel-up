class PlateformePiegesNacelles extends PlateformePiegeHaut{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(65,20);

    }
    typeMort() {
        return EnumTypeMort.NACELLECASSEE;
    }
    afficher(canvas){
        //this.img;
        this.imageSrc('./img/nacelle_piege.png');
        let piegesNacelles = new Images(this.img, new Position(this.pos.x-20, this.pos.y-27), new Taille(100,70));
        this.createBorder(canvas);
        piegesNacelles.setBackground(this.background);
        piegesNacelles.afficher(canvas);
    }
   
}