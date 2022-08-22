class PlateformeOiseaux extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    afficher(){
        //this.img;
        let oiseaux = new Images(this.img, this.pos, this.taille);
        oiseaux.afficher(this.idBackground);
    }
   
}