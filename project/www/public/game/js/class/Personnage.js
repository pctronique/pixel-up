class Personnage extends BlockRectange // implements InterfaceGravite
{
    constructor(taille=undefined) {
        super(taille);
        console.log("Personnage");
        this.tabPlateforme = [];
    }

    setTabPlateforme(plateformes) {
        this.tabPlateforme = plateformes;
    }

    getEnumCollision() {
        for (let index = 0; index < this.tabPlateforme.length; index++) {
            const element = this.tabPlateforme[index];
            let collision = new Collision(this);
            collision.setPlateforme(element);
            let enumCollision = collision.getEnumCollision();
            if(enumCollision != EnumCollision.NULL) {
                return [enumCollision, element];
            }
        };
        return [EnumCollision.NULL, undefined];
    }

    posBackground() {
        if(this.background != undefined) {
            this.background.posPersonnage(this.pos, this.taille);
        }
    }

    mourir() {

    }

    deplacer() {

    }

    tirer() {

    }
}