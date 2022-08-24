class TenueEspace extends Tenue{
    constructor(taille = undefined, collisionHautStable = true){
        super(taille, collisionHautStable);
        this.setTenue("pink");
    }
    afficher(canvas){
        //this.img;
    
        this.imageSrc('./img/boiteCosmoCasque.png');
    
        let cosmonauteCasque= new Images(this.img, this.pos, this.taille);
        cosmonauteCasque.setBackground(this.background);
        cosmonauteCasque.afficher(canvas);
    }
    
}
