class AreteRectangle {
    constructor(pos, taille) {
        this.pos = pos;
        this.taille = taille;
    }

    haut() {
        return {
            pos : this.pos.y,
            debut : this.pos.x,
            fin : this.pos.x+this.taille.x
        }
    }

    bas() {
        return {
            pos : this.pos.y+this.taille.y,
            debut : this.pos.x,
            fin : this.pos.x+this.taille.x
        }
    }

    gauche() {
        return {
            pos : this.pos.x,
            debut : this.pos.y,
            fin : this.pos.y+this.taille.y
        }
    }

    droite() {
        return {
            pos : this.pos.x+this.taille.x,
            debut : this.pos.y,
            fin : this.pos.y+this.taille.y
        }
    }

}
