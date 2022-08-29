class PlateformePiegeCote extends PlateformeMobile{
    /**
     * 
     * @param {*} taille sa taille
     * @param {*} collisionHautStable conserver le joueur au dessu de la platforme
     */
     constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    action(enumCollision) {
        if (enumCollision == EnumCollision.HAUT) {
            return EnumAction.STOP;
        } else if (enumCollision == EnumCollision.GAUCHE && this.deplacementImg == -1) {
            return EnumAction.MORT;
        } else if (enumCollision == EnumCollision.DROITE && this.deplacementImg == 1) {
            return EnumAction.MORT;
        }
        return EnumAction.NULL;
    }

    typeMort() {
        return EnumTypeMort.TOMBER;
    }
   
}

