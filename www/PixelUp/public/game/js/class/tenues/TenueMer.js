class TenueMer extends Tenue{
    constructor(taille = undefined, collisionHautStable = true){
        super(taille, collisionHautStable);
        this.setTenue(EnumTenues.MER);
    }

    afficher(canvas){
        //this.img;
    
        this.imageSrc('./img/boiteTuba.png');
    
        let tuba = new Images(this.img, this.pos, this.taille);
        tuba.setBackground(this.background);
        tuba.afficher(canvas);
    }
    
}