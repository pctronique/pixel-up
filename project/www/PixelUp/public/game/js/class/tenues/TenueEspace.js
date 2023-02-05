class TenueEspace extends Tenue{
    constructor(allImage, taille = undefined, collisionHautStable = true){
        super(allImage, taille, collisionHautStable);
        this.setTenue(EnumTenues.ESPACE);
    }
    afficher(canvas){
        //this.img;
    
        //this.imageSrc(this.allImage.recupImgData("boite_cosmo_casque"));
    
        let cosmonauteCasque= new Images(this.allImage.recupImg("boite_cosmo_casque"), this.pos, this.taille);
        cosmonauteCasque.setBackground(this.background);
        cosmonauteCasque.afficher(canvas);
    }
    
}
