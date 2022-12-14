class PlateformePiegeHaut extends Plateforme {

    /**
     * 
     * @param {*} taille sa taille
     * @param {*} collisionHautStable conserver le joueur au dessu de la platforme
     */
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.piege = true;
    }

    action(enumCollision) {
        if(enumCollision == EnumCollision.HAUT) {
            return EnumAction.MORT;
        }
        return EnumAction.NULL;
    }

    typeMort() {
        return EnumTypeMort.TOMBER;
    }

    
}