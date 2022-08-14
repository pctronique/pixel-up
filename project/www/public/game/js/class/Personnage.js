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

    setEnumCollision() {
        let enumCollisionClass = new EnumCollision();
        this.tabPlateforme.forEach(element => {
            let collision = new Collision(this);
            collision.setPlateforme(element);
            let enumCollision = collision.getEnumCollision();
            if(enumCollision.id != enumCollisionClass.enum.NULL.id) {
                return [enumCollision, element];
            }
        });
        return [enumCollisionClass.enum.NULL, undefined];
    }

    mourir() {

    }

    deplacer() {

    }

    tirer() {

    }
}