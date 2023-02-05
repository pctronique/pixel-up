class TenueMer extends Tenue{
    constructor(allImage, taille = undefined, collisionHautStable = true){
        super(allImage, taille, collisionHautStable);
        this.setTenue(EnumTenues.MER);
    }

    afficher(canvas){
        //this.img;
    
        //this.imageSrc(this.allImage.recupImgData("boite_tuba"));
    
        let tuba = new Images(this.allImage.recupImg("boite_tuba"), this.pos, this.taille);
        tuba.setBackground(this.background);
        tuba.afficher(canvas);
    }
    
}