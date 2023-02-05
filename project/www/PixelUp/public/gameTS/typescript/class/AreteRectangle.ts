import { Position } from "./Position";
import { Taille } from "./Taille";

export class AreteRectangle {
    
    private pos: Position|null;
    private taille: Taille|null;

    constructor(pos: Position|null = null, taille: Taille|null = null) {
        this.pos = pos;
        this.taille = taille;
    }

    public haut() {
        if(this.pos == null || this.taille == null) {
            return {
                pos : 0,
                debut : 0,
                fin : 0
            }
        }
        return {
            pos : this.pos.getY(),
            debut : this.pos.getX(),
            fin : this.pos.getX()+this.taille.getX()
        }
    }

    public bas() {
        if(this.pos == null || this.taille == null) {
            return {
                pos : 0,
                debut : 0,
                fin : 0
            }
        }
        return {
            pos : this.pos.getY()+this.taille.getY(),
            debut : this.pos.getX(),
            fin : this.pos.getX()+this.taille.getX()
        }
    }

    public gauche() {
        if(this.pos == null || this.taille == null) {
            return {
                pos : 0,
                debut : 0,
                fin : 0
            }
        }
        return {
            pos : this.pos.getX(),
            debut : this.pos.getY(),
            fin : this.pos.getY()+this.taille.getY()
        }
    }

    public droite() {
        if(this.pos == null || this.taille == null) {
            return {
                pos : 0,
                debut : 0,
                fin : 0
            }
        }
        return {
            pos : this.pos.getX()+this.taille.getX(),
            debut : this.pos.getY(),
            fin : this.pos.getY()+this.taille.getY()
        }
    }

}
