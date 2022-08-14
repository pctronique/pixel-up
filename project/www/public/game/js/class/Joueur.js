class Joueur extends Personnage {

    constructor(taille=undefined) {
        super(taille);
        
    }

    sauter() {
        document.body.addEventListener("keydown", (event) => {
            if (event.key == " ") {
                this.choixMouvement(event.key);
            }
        });
    }

    coucou() {

    }

    changementTenue() {

    }

    deplacer() {
        document.body.addEventListener("keydown", (event) => {
            if (event.key == "ArrowRight") {
                this.choixMouvement(event.key);
            } else if (event.key == "ArrowLeft") {
                this.choixMouvement(event.key);
            } else if (event.key == "ArrowDown") {
                this.choixMouvement(event.key);
            } else if (event.key == "ArrowUp") {
                this.choixMouvement(event.key);
            }
        });
        
    }

    afficher() {
        let background = document.getElementById(this.idBackground);
        let ctx = background.getContext('2d');
        ctx.fillStyle = '#24AE1D';
        ctx.fillRect(this.pos.x, this.pos.y, this.taille.x, this.taille.y);
    }

    collisionHaut() {
        let enumCollision = this.setEnumCollision();
        let enumCollisionClass = new EnumCollision();
        return enumCollision.id == enumCollisionClass.enum.HAUT.id;
    }

    choixMouvement(eventKey) {
        let enumCollisionClass = new EnumCollision();
        if(this.background != undefined) {
            this.tabPlateforme = this.background.getPlateformes();
        }
        let x = this.pos.x;
            let y = this.pos.y;
            if (eventKey == "ArrowRight") {
                for (let index = 0; index < 10; index++) {
                    let pos = new Position(x+index, y);
                    this.setPosition(pos);
                    if(this.background != undefined) {
                        this.background.afficher();
                    }
                    let enumCollision = this.setEnumCollision();
                    if(enumCollision.id != enumCollisionClass.enum.NULL.id) {
                        console.log(enumCollision);
                        break;
                    }
                }
            } else if (eventKey == "ArrowLeft") {
                for (let index = 0; index < 10; index++) {
                    let pos = new Position(x-index, y);
                    this.setPosition(pos);
                    if(this.background != undefined) {
                        this.background.afficher();
                    }
                    let enumCollision = this.setEnumCollision();
                    if(enumCollision.id != enumCollisionClass.enum.NULL.id) {
                        console.log(enumCollision);
                        break;
                    }
                }
            } else if (eventKey == "ArrowDown") {
                for (let index = 0; index < 10; index++) {
                    let pos = new Position(x, y+index);
                    this.setPosition(pos);
                    if(this.background != undefined) {
                        this.background.afficher();
                    }
                    let enumCollision = this.setEnumCollision();
                    if(enumCollision.id != enumCollisionClass.enum.NULL.id) {
                        console.log(enumCollision);
                        break;
                    }
                }
            } else if (eventKey == "ArrowUp") {
                for (let index = 0; index < 10; index++) {
                    let pos = new Position(x, y-index);
                    this.setPosition(pos);
                    if(this.background != undefined) {
                        this.background.afficher();
                    }
                    let enumCollision = this.setEnumCollision();
                    if(enumCollision.id != enumCollisionClass.enum.NULL.id) {
                        console.log(enumCollision);
                        break;
                    }
                }
            } else if (eventKey == " ") {
                for (let index = 0; index < 120; index++) {
                    y -= 1;
                    this.pos = new Position(x, y);
                    if(this.background != undefined) {
                        this.background.afficher();
                    }
                }
                let number = 0;
                while(this.collisionHaut() || number == 120) {
                    y += 1;
                    this.pos = new Position(x, y);
                    if(this.background != undefined) {
                        this.background.afficher();
                    }
                    number++;
                }
            }
    }
}