class PlateformeSolid extends Plateforme {

    /**
     * 
     * @param {*} taille sa taille
     * @param {*} collisionHautStable conserver le joueur au dessu de la platforme
     */
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille);
        if(this.taille == undefined || this.taille.y == 0) {
            this.taille = new Taille(0, 20);
        }
    }

    afficher(canvas) {
        if (this.background != undefined) {
          this.background.afficherContenue();
        }
    }

    action(enumCollision) {
        if(enumCollision == EnumCollision.HAUT) {
            return EnumAction.STOP;
        }
        return EnumAction.NULL;
    }
    
    
}