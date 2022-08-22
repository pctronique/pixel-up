class PlateformeMobileSatellite extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
    }

    afficher(){
        //this.img;
        this.imageSrc('./img/satellite.png');
        let satellite = new Images(this.img, this.pos, this.taille);
        satellite.afficher(this.idBackground);
    }
   
}