class PlateformeMobileSatellite extends PlateformeMobile {
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
        this.taille = new Taille(76,12);
        
    }

    typeMort() {
        this.effetGameOver();
        return EnumTypeMort.SATELLITE;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        //this.imageSrc(this.allImage.recupImgData("plft_satellite"));
        this.createBorder(canvas);
        let satellite = new Images(this.allImage.recupImg("plft_satellite"), new Position(this.pos.x-10, this.pos.y-41), new Taille(100,100));
        satellite.setObjetDuplique(this);
        satellite.setBackground(this.background);
        satellite.afficher(canvas);
    }
   
}