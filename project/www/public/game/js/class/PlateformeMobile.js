class PlateformeMobile extends Plateforme {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.deplacementImg = -1;
    }
   
   deplacement() {
    this.setPositionX(this.pos.x+this.deplacementImg);
   }
}