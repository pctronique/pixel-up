class PlateformeMeteoritesFeu extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/meteorite2.png');
        let meteoritesFeu = new Images(this.img, this.pos, this.taille);
        meteoritesFeu.setBackground(this.background);
        meteoritesFeu.afficher(canvas);
    }
   
}