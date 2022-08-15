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
        this.tabPlateforme.forEach(element => {
            let collision = new Collision(this);
            collision.setPlateforme(element);
            let enumCollision = collision.getEnumCollision();
            if(enumCollision != EnumCollision.NULL) {
                return [enumCollision, element];
            }
        });
        return [EnumCollision.NULL, undefined];
    }

    mourir() {

    }

    deplacer() {

    }

    tirer() {

    }
}