class PlateformeMobileSatellite extends PlateformeMobile {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(76,12);
        
    }

    typeMort() {
        return EnumTypeMort.SATELLITE;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        this.imageSrc('./img/satellite.png');
        this.createBorder(canvas);
        let satellite = new Images(this.img, new Position(this.pos.x-10, this.pos.y-41), new Taille(100,100));
        satellite.setObjetDuplique(this);
        satellite.setBackground(this.background);
        satellite.afficher(canvas);
    }
   
}