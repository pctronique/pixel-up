class PlateformeNacelles extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    afficher(){
        //this.img;
        let nacelles = new Images(this.img, this.pos, this.taille);
        nacelles.afficher(this.idBackground);
    }
   
}