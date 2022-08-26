class PlateformePiegesNacelles extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,70);

    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/nacelle.png');
        let piegesNacelles = new Images(this.img, this.pos, this.taille);
        piegesNacelles.setBackground(this.background);
        piegesNacelles.afficher(canvas);
    }
   
}