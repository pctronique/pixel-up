class PlateformeNacelles extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
    }

    afficher(){
        //this.img;
        let nacelles = new Images(this.img, this.pos, this.taille);
        nacelles.afficher(this.idBackground);
    }
   
}