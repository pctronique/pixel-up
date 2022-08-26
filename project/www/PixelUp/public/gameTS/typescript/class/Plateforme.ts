import { BlockRectange } from "./BlockRectange";
import { Taille } from "./Taille";

export class Plateforme extends BlockRectange {

    /**
     * 
     * @param {*} taille sa taille
     * @param {*} collisionHautStable conserver le joueur au dessu de la platforme
     */
    constructor(taille: Taille | null = null, collisionHautStable: boolean = true) {
        super(taille);
    }

}