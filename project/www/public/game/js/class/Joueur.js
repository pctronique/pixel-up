class Joueur extends Personnage {

    constructor(taille=undefined, images=undefined) {
        super(taille, images);
        this.joueur = document.getElementById('utilisateur');
        this.pos = new Position(-335, 950);
    }

    sauter() {

    }

    coucou() {

    }

    changementTenue() {

    }

    deplacer() {
        document.body.addEventListener("keydown", (event) => {
            console.log(event.key);
            console.log(this.joueur.offsetLeft);
            console.log(this.joueur.offsetTop);
            let x = this.pos.x;
            let y = this.pos.y;
            if (event.key == "ArrowRight") {
                this.pos = new Position(x+10, y);
            } else if (event.key == "ArrowLeft") {
                this.pos = new Position(x-10, y);
            } else if (event.key == "ArrowDown") {
                this.pos = new Position(x, y+10);
            } else if (event.key == "ArrowUp") {
                this.pos = new Position(x, y-10);
            } else if (event.key == " ") {
                y -= 120;
                for (let index = 0; index < 100; index++) {
                    y += 1;
                }
                this.pos = new Position(x, y);
            }
            this.joueur.style.marginLeft = this.pos.x + "px";
            this.joueur.style.marginTop = this.pos.y + "px";
        });
        
    }
}