class Plateforme extends BlockRectange {

    /**
     * 
     * @param {*} taille sa taille
     * @param {*} collisionHautStable conserver le joueur au dessu de la platforme
     */
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
    }

    afficher() {
        let background = document.getElementById(this.idBackground);
        let ctx = background.getContext('2d');
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.pos.x, this.pos.y, this.taille.x, this.taille.y);
    }

    action(enumCollision) {
        if(enumCollision == EnumCollision.HAUT) {
            return EnumAction.STOP;
        }
        return EnumAction.NULL;
    }
}