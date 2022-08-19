class PlateformeFeu extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
    }

    afficher(){
        //this.img;
        let feu = new Images(this.img, this.pos, this.taille);
        feu.afficher(this.idBackground);
    }
   
}