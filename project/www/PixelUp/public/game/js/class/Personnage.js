class Personnage extends BlockRectange // implements InterfaceGravite
{
    constructor(taille=undefined) {
        super(taille);
        this.tabPlateforme = [];
        this.tabAutrePlateforme = [];
    }

    setTabPlateforme(plateformes) {
        this.tabPlateforme = plateformes;
    }

    setAutrePlateforme(plateformes) {
        this.tabAutrePlateforme = plateformes;
    }

    getEnumCollision() {
        console.log(this.tabAutrePlateforme);
        for (let index = 0; index < this.tabAutrePlateforme.length; index++) {
            const element = this.tabAutrePlateforme[index];
            let collision = new Collision(this);
            collision.setPlateforme(element);
            let enumCollision = collision.getEnumCollision();
            console.log(enumCollision);
            if(enumCollision != EnumCollision.NULL) {
                let enumAction = collision.plateforme.action(enumCollision);
                console.log(enumAction);
                if (enumAction == EnumAction.STOP || enumAction == EnumAction.MORT) {
                    return {enumCollision:enumCollision, enumAction:enumAction, index:index};
                }
            }
        };
        for (let index = 0; index < this.tabPlateforme.length; index++) {
            const element = this.tabPlateforme[index];
            let collision = new Collision(this);
            collision.setPlateforme(element);
            let enumCollision = collision.getEnumCollision();
            //console.log(enumCollision);
            if(enumCollision != EnumCollision.NULL) {
                let enumAction = collision.plateforme.action(enumCollision);
                if (enumAction == EnumAction.STOP || enumAction == EnumAction.MORT) {
                    return {enumCollision:enumCollision, enumAction:enumAction, index:index};
                }
            }
        };
        return {enumCollision:EnumCollision.NULL, enumAction:EnumAction.NULL, index:-1};
    }

    posBackground() {
        /*if(this.background != undefined) {
            this.background.posPersonnage(this.pos, this.taille);
        }*/
    }

    mourir(enumAction) {

    }

    deplacer() {

    }

    tirer() {

    }
}