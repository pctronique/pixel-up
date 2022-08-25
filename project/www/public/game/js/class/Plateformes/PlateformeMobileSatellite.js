class PlateformeMobileSatellite extends PlateformeMobile {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,50);

    }

    typeMort() {
        return EnumTypeMort.TOMBER;
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/satellite.png');
        let satellite = new Images(this.img, this.pos, this.taille);
        satellite.setBackground(this.background);
        satellite.afficher(canvas);
    }
   
}