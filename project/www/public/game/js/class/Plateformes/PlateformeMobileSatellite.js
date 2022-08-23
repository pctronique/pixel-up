class PlateformeMobileSatellite extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/satellite.png');
        this.taille = new Taille(100,50);
        let satellite = new Images(this.img, this.pos, this.taille);
        satellite.setBackground(this.background);
        satellite.afficher(canvas);
    }
   
}