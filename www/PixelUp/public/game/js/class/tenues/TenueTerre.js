class TenueTerre extends Tenue{
    constructor(taille = undefined, collisionHautStable = true){
        super(taille, collisionHautStable);
        this.setTenue(EnumTenues.TERRE);
    }
    afficher(canvas){
       
        this.imageSrc('./img/boiteCasquette.png');
    
        let casquette = new Images(this.img, this.pos, this.taille);
        casquette.setBackground(this.background);
        casquette.afficher(canvas);
    }
    
}
