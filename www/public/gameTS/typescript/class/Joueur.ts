import { Personnage } from "./Personnage";
import { Position } from "./Position";
import { EnumCollision } from "./EnumCollision";
import { Taille } from "./Taille";

export class Joueur extends Personnage {

    private joueur: HTMLElement | null;

    constructor(taille: Taille | null = null) {
        super(taille);

    }

    elementJoueur() {
        this.joueur = document.getElementById('utilisateur');
    }

    collisionBas() {
        console.log(this.taille);
        //if
        return false;
    }

    sauter() {

        document.body.addEventListener("keydown", (event) => {
            if (this.pos != null && this.joueur != null) {
                let x = this.pos.getX();
                let y = this.pos.getY();
                if (event.key == " ") {
                    for (let index = 0; index < 120; index++) {
                        y -= 1;
                        this.pos = new Position(x, y);
                        this.joueur.style.marginLeft = this.pos.getX() + "px";
                        this.joueur.style.marginTop = this.pos.getY() + "px";
                    }
                    let number = 0;
                    while (this.collisionBas() || number == 120) {

                        number++;
                    }
                }
            }
        });
    }

    coucou() {

    }

    changementTenue() {

    }

    deplacer() {
        document.body.addEventListener("keydown", (event) => {
            if (this.pos != null && this.joueur != null) {
                let x = this.pos.getX();
                let y = this.pos.getY();
                console.log("------------------------------------------------------");
                if (event.key == "ArrowRight") {
                    for (let index = 0; index < 10; index++) {
                        let pos = new Position(x + index, y);
                        this.setPosition(pos);
                        let enumCollision = this.setEnumCollision();
                        this.joueur.style.marginLeft = this.pos.getX() + "px";
                        this.joueur.style.marginTop = this.pos.getY() + "px";
                        if (enumCollision != EnumCollision.NULL) {
                            console.log(enumCollision);
                            break;
                        }
                    }
                } else if (event.key == "ArrowLeft") {
                    for (let index = 0; index < 10; index++) {
                        let pos = new Position(x - index, y);
                        this.setPosition(pos);
                        let enumCollision = this.setEnumCollision();
                        this.joueur.style.marginLeft = this.pos.getX() + "px";
                        this.joueur.style.marginTop = this.pos.getY() + "px";
                        if (enumCollision != EnumCollision.NULL) {
                            console.log(enumCollision);
                            break;
                        }
                    }
                } else if (event.key == "ArrowDown") {
                    for (let index = 0; index < 10; index++) {
                        let pos = new Position(x, y + index);
                        this.setPosition(pos);
                        let enumCollision = this.setEnumCollision();
                        this.joueur.style.marginLeft = this.pos.getX() + "px";
                        this.joueur.style.marginTop = this.pos.getY() + "px";
                        if (enumCollision != EnumCollision.NULL) {
                            console.log(enumCollision);
                            break;
                        }
                    }
                } else if (event.key == "ArrowUp") {
                    for (let index = 0; index < 10; index++) {
                        let pos = new Position(x, y - index);
                        this.setPosition(pos);
                        let enumCollision = this.setEnumCollision();
                        this.joueur.style.marginLeft = this.pos.getX() + "px";
                        this.joueur.style.marginTop = this.pos.getY() + "px";
                        if (enumCollision != EnumCollision.NULL) {
                            console.log(enumCollision);
                            break;
                        }
                    }
                }
            }
        });

    }
}