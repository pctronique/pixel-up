class TenueTerre extends Tenue{
    constructor(allImage, taille = undefined, collisionHautStable = true){
        super(allImage, taille, collisionHautStable);
        this.setTenue(EnumTenues.TERRE);
    }
    afficher(canvas){
       
        //this.imageSrc(this.allImage.recupImgData("boite_casquette"));
    
        let casquette = new Images(this.allImage.recupImg("boite_casquette"), this.pos, this.taille);
        casquette.setBackground(this.background);
        casquette.afficher(canvas);
    }
    
}
