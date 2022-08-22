class PlateformeHelicopteres extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    afficher(){
        //this.img;
        this.imageSrc('./img/helicoptere.png');
        let helicopteres = new Images(this.img, this.pos, this.taille);
        helicopteres.afficher(this.idBackground);
    }
   
}